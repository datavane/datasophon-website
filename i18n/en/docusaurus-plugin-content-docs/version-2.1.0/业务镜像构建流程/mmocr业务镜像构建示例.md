---
sidebar_position: 2
---
# mmocr业务镜像构建

> 通过将mmocr服务与aiges推理服务框架进行结合，实现服务推理的快速落地。

## 构建业务镜像流程

### 1. envd 安装
```
pip install --pre --upgrade envd
envd bootstrap
```

### 2.克隆aiges项目

```
git clone https://github.com/test/aiges.git
```

### 3.进入项目mmocr并执行命令完成项目镜像构建
```
cd aiges/demo/mmocr/
envd up -t mmocr:test        # 构建镜像并进入创建的容器
```     

### 4. 进入容器并执行推理
```
cd /home/aiges/wpapper/
python wrapper_v2.py
```

