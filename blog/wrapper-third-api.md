---
slug: music/api
title: 集成三方API实现Python加载器插件
authors: jhr
tags: [三方API,Python加载器插件]
---


## 集成三方API实现Python加载器插件
### 能力
AI能力是指已完成云服务化的AI引擎。部署完成后，能力的使用者可以直接通过API和生成的接口文档进行集成及调用。具体定义可以参考[ASE引擎名词解释](https://www.iflyaicloud.com/aipaas-doc/docs/01-%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D/02-%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A.html)
### 加载器插件
能力是通过加载器插件来调用。调用的能力不仅包含AI能力的使用，普通网络请求的调用同样适用。

对于非流式的网络请求——HTTP请求——来说，插件的主体包括四步；加载器的初始化；加载器的完成；加载器的执行；加载器的错误处理。分别对应了四个执行函数`wrapperInit`；`wrapperFini`；`wrapperOnceExec`；`wrapperError`。

通常加载器插件实现采用了C++语言，对于熟谙C++语言的用户来说毫无压力，当了解加载器插件的运行流程、数据输入和输出方式后，就可以实现自己的加载器插件，随即通过编译成**动态库文件**后可调用。

Python是一种弱类型语音，相比于C++，Python更小巧精悍，用户也能够更容易上手构建加载器插件。

**本例主要介绍了一个调用[三方音乐识别API](https://docs.acrcloud.cn/api-reference/identification-api)的Python加载器插件实现步骤。调用音乐识别API时用户会发送待识别音乐的二进制流数据，音乐格式支持mp3、wav、wma、amr、ogg、ape、acc、spx、m4a、mp4、FLAC等，返回的识别结果是JSON对象。**

### 实现加载器插件
**加载器插件初始化函数**`wrapperInit`用于初始化加载器执行过程中用到的变量，这些参数从配置文件`config`中读入，其中**requrl**是发送请求的地址。
```python
global requrl, http_method, http_uri
global access_key_music, access_secret_music, access_key_humming, access_secret_humming

requrl, http_method, http_uri = config['requrl'], config['http_method'], config['http_uri']
access_key_music, access_secret_music = config['access_key_music'], config['access_secret_music']
access_key_humming, access_secret_humming = config['access_key_humming'], config['access_secret_humming']
```

**加载器插件执行函数**`wrapperOnceExec`的执行由**鉴权**、**发送HTTP请求**和**接收响应数据**构成。

- 鉴权的签名是通过`http_method`、`http_uri`、`access_key`、`data_type`、`signature_version`以及`时间戳`等来构建，构建过程如下：
    ```python
    signature_version, data_type = '1', 'audio'

    timestamp = time.time()

    string_to_sign = http_method + '\n' \
                    + http_uri + '\n' \
                    + access_key + '\n' \
                    + data_type + '\n' \
                    + signature_version + '\n' \
                    + str(timestamp)
    sign = base64.b64encode(hmac.new(access_secret.encode('ascii'), string_to_sign.encode('ascii'),
                                    digestmod=hashlib.sha1).digest()).decode('ascii')

    if sign is None:
        logging.error('HMAC failure.')
        return 5014
    ```
- HTTP请求体可以看作一个字典，包括了`请求数据`、`access_key`、`数据的长度`、`时间戳`、`签名`、`data_type`和`signature_version`等。

    构建的HTTP请求体如下：
    ```python
    files = {'sample': src}
    data = {
        'access_key': access_key,
        'sample_bytes': sample_bytes,
        'timestamp': str(timestamp),
        'signature': sign,
        'data_type': data_type,
        'signature_version': signature_version
    }
    r = requests.post(requrl, files=files, data=data, timeout=5)
    ```

- 此外，在执行的过程中，错误需要**尽可能早**捕获，错误码也要和第三方平台区别开来，即使是默认的HTTP错误码也要有辨别也好，方便定位错误。
    ```python
    try:
        r = requests.post(requrl, files=files, data=data, timeout=5)
    except requests.exceptions.ConnectTimeout:
        logging.error('Http post timeout.')
        return 4408# http timeout

    if r is None:
        logging.error("HTTP内容非法")
        return 4003
    if r.status_code != 200:
        return 4000 + r.status_code
    ```

- 请求的响应数据是JSON格式，有三个字段：
    ```json
    {
    "cost_time":...
    "status":...
    "metadata":...
    }
    ```

    其中`status`字段中的`code`代表了响应的状态，为0表示请求成功，否则失败。所以应该判断`code`的取值，当不为零时则提前返回`code`表示的错误码

    ```python
    pattern = re.compile('"code":\d+')
    error_code = re.findall(pattern, r.text)
    error_code = error_code[0].split(':')[-1]
    if int(error_code):
        return int(error_code)
    ```

    响应成功则返回一个预先定义好的字典表示：

    ```python
    r.encoding = 'utf-8'

    respData.append({
        'key': 'output_text',
        'type': 0,
        'status': 3,
        "data": r.text,
        "len": len(r.text.encode())
    })
    ```

**加载器插件错误处理函数**`wrapperError`将会返回错误码代表的含义，在本例中如下
```python
if ret == 1001:
    return "识别无结果"
elif ret == 2000:
    return "录音失败，可能是设备权限问题"
elif ret == 2001:
    return "初始化错误或者初始化超时"
elif ret == 2002:
    return "处理metadata错误"
elif ret == 2004:
    return "无法生成指纹（有可能是静音）"
elif ret == 2005:
    return "超时"
elif ret == 3000:
    return "服务端错误"
elif ret == 3001:
    return "Access Key不存在或错误"
elif ret == 3002:
    return "HTTP内容非法"
elif ret == 3003:
    return "请求数超出限制（需要升级账号）"
elif ret == 3006:
    return "参数非法"
elif ret == 3014:
    return "签名非法"
elif ret == 3015:
    return "QPS超出限制（需要升级账号）"
else:
    return f"User Defined Error: {ret}"
```

**加载器插件完成函数**`wrapperFini`用于处理一些加载器的收尾工作，在C++语言中里面会执行一些堆区和指针的释放，对于Python语言，通常不需要实现：
```python
def wrapperFini() -> int:
    logging.info('Wrapper finished.')
    return 0
```
**以上就是一个调用三方API的Python加载器实现的简单介绍**
具体代码可以参考[集成三方API实现Python加载器插件](https://github.com/xfyun/aiges/tree/master/demo/music_api)
