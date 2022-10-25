---
sidebar_position: 2
---
# MMOCR Business Image Construction

> By combining the mmocr service with the aiges inference service framework, the rapid implementation of service inference is realized.

## Build a business mirroring process

### 1. Envd install
```
pip install --pre --upgrade envd
envd bootstrap
```

### 2.Clone the aiges project

```
git clone https://github.com/iflytek/aiges.git
```

### 3.Enter the project mmocr and execute the command to complete the construction of the project image
```
cd aiges/demo/mmocr/
envd up -t mmocr:test        # Build the image and enter the created container
```     

### 4. Enter the container and perform service inference
```
cd /home/aiges/wpapper/
python wrapper_v2.py
```

