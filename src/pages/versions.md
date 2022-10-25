---
title: Versions
---

# AthenaServing Framework

## AIges

### Current version (Stable) [v2.2.0​](https://github.com/iflytek/aiges/tree/v2.1.0 "Direct link to heading")
版本特性:
  * 完全支持流式推理
  * 支持异步方式回调数据给AIgies(透传callback指针到python)

### Last version (Stable) [v2.1.0​](https://github.com/iflytek/aiges/tree/v2.2.0 "Direct link to heading")
版本特性:
  * 部分支持流式推理

问题/bug:
   * 流式应用拷贝数据存在bug

### Next version (Unreleased) [v2.3.0​](https://github.com/iflytek/aiges/tree/v2.3.0 "Direct link to heading")
版本特性:
  * c++到python 拷贝数据引入memoryview buffer protocol， 实现零拷贝

## aiges_c_python_wrapper (compiled for libwrapper.so)

### [v1.0.0​](https://github.com/iflytek/aiges_c_python_wrapper/tree/release-v1.0.0 "Direct link to heading")

***已停止维护***

版本特性:

* v1.0.0的 libwrapper.so实现方式已经不再维护，该版本libwrapper.so 裸使用Python C API方式进行 C++ 调用python,代码较为复杂和冗余，不易维护
* v1.0.0的 python插件 为函数式定义[wrapper.py](https://github.com/iflytek/aiges_c_python_wrapper/blob/release-v1.0.0/wrapper.py)

### [v2.2.0](https://github.com/iflytek/aiges_c_python_wrapper/tree/master "Direct link to heading")

版本特性:
* v2+的 **aiges_c_python_wrapper** 使用pybind11头文件库，简化 c++ 和python互调用逻辑，大大减小代码量
* v2+ python插件为 类定义式 [wrapper_v2.py](https://github.com/iflytek/aiges_demo/blob/f5061b3b9a4d05f491cfdc21c525e22f8239b760/music_api/wrapper_v2.py)
* v2+ python插件提供了 aiges三方库辅助开发wrapper.py

### aiges_c_python_wrapper v1 vs v2.x

见上述版本特性区别.


## AIges SDK (published on pypi)

### 0.4.2
### 0.4.0
### 0.3.0
