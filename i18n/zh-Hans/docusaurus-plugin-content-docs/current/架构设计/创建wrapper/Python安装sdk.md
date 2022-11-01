---
sidebar_position: 1
sidebar_label: 一、安装aiges sdk
---
# aiges sdk 工具库

## 背景

1. wrapper.py 在线上环境是由 c程序调用通过pybind11调用起来，而写wrapper.py的同事并不熟悉该机制，或者说难以在本地调试 wrapper.py的运行

2. 需要一个python库来帮助用户前期快速定位 wrapper.py编写的是否有问题，提前发现问题，提高开发效率

3. 需要通过wrapper.py的开发，明确用户的输入、输出，极简化python推理开发


## 使用pypi pip安装

使用`pip`指令完成`aiges`库的安装和更新
   ```python
   # 安装aiges
   pip install aiges -i https://pypi.python.org/simple
   # 更新aiges
   pip install --upgrade aiges -i https://pypi.python.org/simple
   ```