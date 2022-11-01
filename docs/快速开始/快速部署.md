---
sidebar_position: 2
sidebar_label: Install Service With Helm Chart
---

# Install Service With Helm Chart

## Precondition
  - Deploy k8s cluster
  - Install helm

## Install 
```
cd chart
helm install athena . 

## Wait for the AthenaServing service components to start successfully
helm  install mmocr .
```


## Configure Demo.py

```
image = open("demo_text_det.jpg","rb")     # image to be detected
img = base64.b64encode(image.read())


url = "http://172.16.59.17:30889/mmocr"    # url can be hostIP:nodePort or svcIP:svcPort
url = "http://172.16.59.17:30889/v1/private/mmocr"
method = "POST"
headers = {"Content-Type":"application/json"}
data = {
    "header": {
        "app_id": "123456",
        "uid": "39769795890",
        "did": "SR082321940000200",
        "imei": "8664020318693660",
        "imsi": "4600264952729100",
        "mac": "6c:92:bf:65:c6:14",
        "net_type": "wifi",
        "net_isp": "CMCC",
        "status": 3,
        "request_id": None
    },
    "parameter": {
        "mmocr": {
            "category": "ai_category",
            "application_mode": "common_gpu",
            "gpu_id": "first",
            "gpu_type": "T4G16",
            "boxes": {
                "encoding": "utf8",
                "compress": "raw",
                "format": "json"
            }
        }
    },
    "payload": {
        "data": {
            "encoding": "jpg",
            "image": img.decode("utf-8"),
            "status": 3
        }
    }
}

```


## Testing Demo.py
```
python demo.py
```

## Detected image
![img](imgs/demo_text_det.jpg)

## Result display

```
##################################
MMocr Result: box located at [190, 37, 253, 31, 254, 46, 191, 52], box score is 0.9566415548324585.  Detected text is nboroughofs , text  score is 1.0...
MMocr Result: box located at [253, 47, 257, 36, 287, 47, 282, 58], box score is 0.9649642705917358.  Detected text is fsouthw , text  score is 1.0...
MMocr Result: box located at [157, 59, 188, 41, 194, 52, 163, 70], box score is 0.9521175622940063.  Detected text is londond , text  score is 0.9897959183673469...
MMocr Result: box located at [280, 58, 286, 50, 306, 67, 300, 74], box score is 0.9397556781768799.  Detected text is thwark , text  score is 1.0...
MMocr Result: box located at [252, 78, 295, 78, 295, 98, 252, 98], box score is 0.9694718718528748.  Detected text is hill , text  score is 1.0...
MMocr Result: box located at [165, 78, 247, 78, 247, 99, 165, 99], box score is 0.9548642039299011.  Detected text is octavia , text  score is 1.0...
MMocr Result: box located at [164, 105, 215, 103, 216, 121, 165, 123], box score is 0.9806956052780151.  Detected text is social , text  score is 1.0...
MMocr Result: box located at [219, 104, 294, 104, 294, 122, 219, 122], box score is 0.9688025116920471.  Detected text is reformer , text  score is 1.0...
MMocr Result: box located at [150, 124, 226, 124, 226, 141, 150, 141], box score is 0.9752051830291748.  Detected text is established , text  score is 1.0...
MMocr Result: box located at [229, 124, 255, 124, 255, 140, 229, 140], box score is 0.94972825050354.  Detected text is this , text  score is 1.0...
MMocr Result: box located at [259, 125, 305, 123, 306, 139, 260, 142], box score is 0.9752089977264404.  Detected text is garden , text  score is 1.1666666666666667...
MMocr Result: box located at [166, 142, 193, 141, 194, 156, 167, 157], box score is 0.9731062650680542.  Detected text is hall , text  score is 1.0...
MMocr Result: box located at [198, 142, 223, 142, 223, 156, 198, 156], box score is 0.9548938870429993.  Detected text is and , text  score is 1.0...
MMocr Result: box located at [228, 144, 286, 144, 286, 159, 228, 159], box score is 0.977089524269104.  Detected text is cottages , text  score is 1.25...
MMocr Result: box located at [180, 158, 205, 158, 205, 172, 180, 172], box score is 0.9400062561035156.  Detected text is and , text  score is 1.0...
MMocr Result: box located at [210, 160, 279, 158, 279, 172, 210, 174], box score is 0.9543584585189819.  Detected text is pioneered , text  score is 1.0...
MMocr Result: box located at [226, 176, 277, 176, 277, 188, 226, 188], box score is 0.9748533964157104.  Detected text is cadets , text  score is 1.0...
MMocr Result: box located at [183, 177, 223, 177, 223, 189, 183, 189], box score is 0.9633153676986694.  Detected text is army , text  score is 1.0...
MMocr Result: box located at [201, 190, 235, 190, 235, 204, 201, 204], box score is 0.9714152216911316.  Detected text is 1887 , text  score is 1.25...
MMocr Result: box located at [175, 213, 180, 201, 211, 212, 206, 225], box score is 0.9704344868659973.  Detected text is vted , text  score is 0.9191176470588236...
MMocr Result: box located at [241, 213, 278, 200, 283, 213, 246, 227], box score is 0.9607459902763367.  Detected text is epeople , text  score is 1.0...
MMocr Result: box located at [208, 224, 210, 212, 223, 214, 220, 227], box score is 0.9337806701660156.  Detected text is by , text  score is 1.0...
MMocr Result: box located at [223, 214, 240, 214, 240, 226, 223, 226], box score is 0.969144344329834.  Detected text is the , text  score is 1.0...
```