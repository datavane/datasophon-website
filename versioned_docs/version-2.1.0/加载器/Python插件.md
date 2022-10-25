---
sidebar_position: 3
sidebar_label: Python Plugin
---

# Python Plugin

## :star:wrapper.py Architecture


Python Language Wrapper:
![img](python.png)

## Background

1. The previous wrapper.py was implemented by [C project](https://github.com/xfyun/aiges_c_python_wrapper) [wrapper interface](https://github.com/xfyun/aiges_c_python_wrapper/blob/master/include/aiges/wrapper.h).

   **aiges_c_python_wrapper** is compiled into `libwrapper.so` and loaded uniformly by aiges.
2. Previously, if python users needed to implement an inference plugin, they only needed to refer to [wrapper.py](https://github.com/xfyun/aiges/blob/master/demo/mmocr/wrapper.py) to implement the corresponding interface, namely Python inference can be achieved.

3. When the user implements `wrapper.py`, they cannot directly debug and run, and they do not know how `aiges` calls `wrapper.py` and what type of parameters are passed to `wrapper.py`. Versions of the AI inference plugin integrate in a less pythonic way.

## The optimization goal of the integration method of the new version of wrapper.py

1. Users can define the data fields entered by AI capabilities and control the list of fields.

2. Users can define the field list of AI capability output as needed.

3. Platform tools can automatically export user schema through `wrapper.py` and configure it to webgate, shielding the schema concept for users.

4. The platform tool can provide users to run `wrapper.py` directly, and pass the corresponding parameters according to the way of actually loading `wrapper.py` on the platform, which is convenient for users to quickly debug in any environment and find some basic problems.

5. Simplify user input as much as possible, and obtain the information required by the platform under limited user input.

## wrapper.py new design

1. Provide python sdk: The python sdk will be released to pypi, which is convenient for users to install and update at any time.

2. [Why?](#Why) The new wrapper requires users to implement the `Wrapper` class, and put the functions at the beginning of the original functional wrapper into the `Wrapper` (class method | object method? Todo). The `Wrapper` class implemented by the user must **inherit** the `WrapperBase` class, and the functions `wrapperInit`, `wrapperFini`, `wrapperOnceExec` and `wrapperError` are declared as class methods `@classmethod` in the `WrapperBase` class , if not implemented, `NotImplementedError` will be thrown.

3. In addition to implementing the original `wrapperInit`, `WrapperExec` and other implementations in the Wrapper class, users need to define additional input and output capabilities. The final generated HTTP interface is generated based on this information.

### Why?

   - We hope that users only need to define key implementations, and do not need to care about the details of how `wrapper.py` is called behind. The logic behind this is actually complicated, and we don't want users to have too much in `wrapper.py` Define some settings that are pre-required by the platform. We want to implement and define these default behaviors in the base class of the SDK. For example, the actual calling sequence of `wrapper.py` is `WrapperInit` -> `WrapperExec` -> `WrapperFin`.

   - The advantage of defining the behavior in the base class is that after the user inherits the base class and implements the necessary methods, he can run it directly and get the result after debugging.

   - As for why you want users to implement the Wrapper class by inheriting the `WrapperBase` class, it's because you can do some more Pythonic magic in the base class behavior to simplify user input.

       [New version Python loader plugin](https://github.com/xfyun/aiges_c_python_wrapper/blob/master/wrapper.py)


### WrapperBase Class
The biggest change in the new version of the Python loader plugin is the introduction of the `WrapperBase` class, the `Wrapper` class implemented by the user must **inherit** the `WrapperBase` class, and the `wrapperInit`, `wrapperFini`, `wrapperOnceExec` and `wrapperError` Such functions are declared as class methods `@classmethod` in the `WrapperBase` class. If they are not implemented, a `NotImplementedError` error will be thrown.

### Quick start with your first wrapper.py

**The following describes the implementation process of a Python loader plugin that calls the third-party API to help you understand the whole process. **

#### Preparing the project

   1. [Install or update](#appendix) aiges sdk library (this sdk is used to assist local debugging of `wrapper.py`)

   2. Use aiges to quickly generate your python project
       ````python
       python -m aiges create -n "project"
       ````
       This command generates a "project" folder and contains the semifinished wrapper.py.

   3. Add dependencies in the project, [perfect wrapper.py and pass local debugging](#Complete local debugging).

   4. Build wrapper.py as a docker image and publish it to the athenaserving framework.

   5. Access your AI HTTP API... Enjoy...

#### complete local debugging

##### :exclamation: advance notice
   - When implementing the `Wrapper` class, you must **inherit** the `WrapperBase` class.
   - For parameters used in operation, you can choose to declare variables as class variables, and instance variables are also optional. To simulate AIservice passing parameters, declare a class member in the `Wrapper` class.
   config is used for initialization, after going online **select the comment**, in this example as follows
      ```python
      class Wrapper(WrapperBase):
         requrl, http_method, http_uri = None, None, None
         # music
         access_key_music, access_secret_music = None, None
         # humming
         access_key_humming, access_secret_humming = None, None

         config = {}
         config = {
         "requrl" : ...,
         "http_method" : ...,
         "http_uri" : ...,
         "access_key_music" : ...,
         "access_secret_music" : ...,
         "access_key_humming" : ...,
         "access_secret_humming" : ...
         }
      ```
   - The return type of the `wrapperOnceExec` function is a `Response` object, not the `int` type that usually represents the execution status error code, which means **whether the result is normal or not**, you need to instantiate the `Response` object and Return the result.
      ```python
      res = Response()
      ```
      - When no exception occurs, the `Response` object is a list of one or more `ResponseData` objects, where the `ResponseData` class has `key`, `data`, `len`, `type` and `status` five member variables
         ```python
         l = ResponseData()
         l.key = "output_text"
         l.status = 3
         l.len = len(r.text.encode())
         l.data = r.text
         l.type = 0
         res.list = [l]
         # multi data: res.list = [l1, l2, l3]
         return res
         ```
      - When an exception occurs, directly call the `response_err` method of the `Response` object to return the error code
         ```python
         return res.response_err(ERROR_CODE)
         ```

##### Inheriting the `WrapperBase` class to complete the construction of the `Wrapper` class

   1. `wrapperInit` is used to initialize the variables used in the execution of the loader, and the parameters are read from the dictionary variable `config`
      ```python
      def wrapperInit(cls, config: {}) -> int:
         print("Initializing ..")
         config = config

         Wrapper.requrl, Wrapper.http_method, Wrapper.http_uri = config['requrl'], config['http_method'], config['http_uri']
         Wrapper.access_key_music, Wrapper.access_secret_music = config['access_key_music'], config['access_secret_music']
         Wrapper.access_key_humming, Wrapper.access_secret_humming = config['access_key_humming'], config['access_secret_humming']

         print('----------Finish Init--------------')
         
         return 0
      ```

   2. `wrapperError` will return the meaning of the error code, in this case as follows
      ```python
      def wrapperError(cls, ret: int) -> str:
         if ret == 1001:
            return "No result for identification"
         elif ret == 2000:
            return "Recording failed, maybe a device permission problem"
         elif ret == 2001:
            return "Initialization error or initialization timeout"
         elif ret == 2002:
            return "handle metadata error"
         elif ret == 2004:
            return "Failed to generate fingerprint (possibly silent)"
         elif ret == 2005:
            return "timeout"
         elif ret == 3000:
            return "Server Error"
         elif ret == 3001:
            return "Access Key does not exist or is wrong"
         elif ret == 3002:
            return "HTTP content is illegal"
         elif ret == 3003:
            return "The number of requests exceeds the limit (need to upgrade the account)"
         elif ret == 3006:
            return "Illegal parameter"
         elif ret == 3014:
            return "Illegal signature"
         elif ret == 3015:
            return "QPS exceeds the limit (need to upgrade account)"
         else:
            return f"User Defined Error: {ret}"
      ```

   3. `wrapperFini` is used to deal with the recovery of heap pointers of some loader plugins. For the Python language, it is usually not necessary to implement:
      ```python
      def wrapperFini() -> int:
         logging.info('Wrapper finished.')
         return 0
      ```

   4. The execution of `wrapperOnceExec` consists of <u>authentication</u>, <u>send HTTP request</u> and <u>receive response data</u>
      ```python
      def wrapperOnceExec(self, params: {}, reqData: DataListCls) -> Response:
         ......
         # Authentication
         data_mode = params['mode']
        
         access_key = Wrapper.access_key_music if data_mode == 'music' else Wrapper.access_key_humming
         access_secret = Wrapper.access_secret_music if data_mode == 'music' else Wrapper.access_secret_humming
       
         src = reqData.list[0].data# binary files
         sample_bytes = reqData.list[0].len
         signature_version, data_type = '1', 'audio'
            
         timestamp = time.time()
         res = Response()
        
         string_to_sign = Wrapper.http_method + '\n' \
                     + Wrapper.http_uri + '\n' \
                     + access_key + '\n' \
                     + data_type + '\n' \
                     + signature_version + '\n' \
                     + str(timestamp)
         sign = base64.b64encode(hmac.new(access_secret.encode('ascii'), string_to_sign.encode('ascii'),digestmod=hashlib.sha1).digest()).decode('ascii')
        
         if sign is None:
               return res.response_err(5014)

         # send http request
         files = {'sample': src}
         data = {
               'access_key': access_key,
               'sample_bytes': sample_bytes,
               'timestamp': str(timestamp),
               'signature': sign,
               'data_type': data_type,
               'signature_version': signature_version
         }

         try:
            r = requests.post(Wrapper.requrl, files=files, data=data, timeout=5)
         except requests.exceptions.ConnectTimeout:
            return res.response_err(4408)
         if r is None:
            return res.response_err(4003)

         if r.status_code != 200:
            return res.response_err(4000 + r.status_code)

         # accept response data
         pattern = re.compile('"code":\d+')
         error_code = re.findall(pattern, r.text)
         error_code = error_code[0].split(':')[-1]
        
         if int(error_code):
            return self.response_err(int(error_code))
         else:
            r.encoding = 'utf-8'
            l = ResponseData()
        
            l.key = "output_text"
            l.type = 0
            l.status = 3
            l.data = r.text
            l.len = len(r.text.encode())
            res.list = [l]
        return res 
      ```


#### Local debugging simulates incoming data: heavy_check_mark:
   - additionally declare **user request** and **user response** two classes

      ```python
      class UserRequest(object):
         '''
         Define the request class:
         params:  params The attribute at the beginning of params represents the function parameter part in the   final HTTP protocol, which corresponds to the parameter field in xtest.toml.params Field supports StringParamField. NumberParamField, BooleanParamField, IntegerParamField, each field supports enumeration. The params attribute is mostly used for the control field in the protocol, but the request body field does not belong to the params category

         input:    The input field is mostly used with the request data segment, that is, the body part. Currently, ImageBodyField, StringBodyField and AudioBodyField are supported.
         '''
         params1 = StringParamField(key="mode", enums=["music", "humming"], value='humming')

         input1 = AudioBodyField(key="data", path="/home/wrapper/test.wav")
         
      class UserResponse(object):
         '''
         Define the response class:
         accepts:  accepts represents which fields are included in the response, and the data type

         input:   The input field is mostly used with the request data segment, that is, the body part. Currently, ImageBodyField, StringBodyField, and AudioBodyField are supported.
         '''
         accept1 = StringBodyField(key="ouput_text")
      ```
   - Instantiate user request and user response objects
      ```python
      class Wrapper(WrapperBase):
         # Instantiate user request class and user response class
         requestCls = UserRequest()
         responseCls = UserResponse()
         ......
      ```
   - Declare the `main` function, instantiate the `Wrapper` object and run the program
      ```python
      if __name__ == '__main__':
         m = Wrapper()
         m.schema()
         m.run()
      ```

### Appendix
-  Install and update

   Install and update the `aiges` library using the `pip` command
   ```python
   # install aiges
   pip install aiges -i https://pypi.python.org/simple
   # update aiges
   pip install --upgrade aiges -i https://pypi.python.org/simple
   ```

- During the execution process, errors need to be caught **as early as possible**, and error codes should be distinguished from third-party platforms. Even the default HTTP error codes should be identified, which is convenient for locating errors.

- Python loader plugin that calls the third-party API [for complete implementation, please refer to] (https://github.com/xfyun/aiges/tree/master/demo/music_api_v2)


