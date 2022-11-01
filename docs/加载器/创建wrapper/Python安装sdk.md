---
sidebar_position: 1
sidebar_label: 1、Install Aiges SDK
---
# Aiges SDK

## background

1. The online environment of wrapper.py is called by the c program through pybind11, and the colleagues who wrote wrapper.py are not familiar with this mechanism, or it is difficult to debug the operation of wrapper.py locally.

2. A python library is needed to help users quickly locate whether there is a problem with wrapper.py in the early stage, find problems in advance, and improve development efficiency.

3. It is necessary to clarify the user's input and output through the development of wrapper.py, which greatly simplifies the python inference development process.


## Install aiges

Install and update the `aiges` library using the `pip` command
    ````python
    # install aiges
    pip install aiges -i https://pypi.python.org/simple
    # update aiges
    pip install --upgrade aiges -i https://pypi.python.org/simple