---
sidebar_position: 4
sidebar_label: Python调试工具

---

#  Aiges Python Sdk

## Install && Upgrade

* `$ pip install aiges`

* `$ pip install --upgrade aiges -i https://pypi.org/simple`


## Features

* 用于调试: 本地模拟加载 `wrapper.py` 脚本运行
* 用于自动生成 `wrapper.py` 项目工程
* 用于构建部署 `wrapper.py` 

## 原理

* 模拟加载器行为

1. 加载 `wrapper.py`
2. 检查 `wrapper.py` 中的实现是否包含必须要实现的
3. 调用 `wrapper.py` 中的 wrapperInit -> wrapperExec -> wrapperFinish
4. check 调用结果

