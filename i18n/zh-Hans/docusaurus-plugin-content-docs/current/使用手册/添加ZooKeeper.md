---
sidebar_position: 2
sidebar_label: 添加ZooKeeper
---
![](img/polaris-w.png)

## 核心功能
- 动态配置 (Dynamic Config)
- 服务注册、服务发现(Register Service & Discover Service)

## 特性
- Full category for managing service
- 支持服务配置多版本
- 支持配置回滚
- Support feedback for pushing config
- 支持在线管理 Provider/Consumer
- 高可用
- 快速集成
- 支持Docker/k8s部署

## 架构
![](img/15138432239107.jpg)

## 核心模块
- **Cynosure**

  此模块用于管理一些基础数据和配置，提供一个可视化配置中心操作页面。

  您可以使用它创建 Region,集群信息，服务配置等
  
  ![](img/polaris.png)


  ![](img/15138461728383.jpg)

- **Finder(SDK with go/java/c++)**

  客户端SDK， 用于Client侧集成配置中心和服务发现  

- **Companion**

  此模块用于操作和zookeeper交互的组件。 
  
  **案例 #1: 服务发现**

  ![](img/15138469634925.jpg)

  **案例 #2: 配置推送**

  ![](img/15138470006112.jpg)

  **案例 #3 Feedback?**

  ![](img/15138470283686.jpg)



## 如何在您的项目众引用 **Polaris**

- **Install**

  `You can get from `[install.md](install.md)


- **SDK**[supported]

  `Beginning it with the Finder SDK as you know, here are some examples in golang. More detail code has uploaded and you can view from `[finder-go/example/demo.go](http://git.xfyun.cn/AIaaS/finder-go/src/master/example/demo.go)

```go
    package main
    import (
	       "encoding/json"
	       "finder-go"
	       "finder-go/common"
	       "finder-go/utils/httputil"
	       "fmt"
	       "net"
	       "net/http"
	       "os"
	       "time"
    )    
    func main() {
       cachePath, err := os.Getwd()
	   if err != nil {
		  return
       }        
        
	   cachePath += "/findercache"
	   config := common.BootConfig{
		  CompanionUrl:     "http://    10.1.86.223:9080",
		  CachePath:        cachePath,
		  TickerDuration:   5000,
		  ZkSessionTimeout: 1000 * time.Second,
		  ZkConnectTimeout: 300 * time.Second,
		  ZkMaxSleepTime:   15 * time.Second,
		  ZkMaxRetryNum:    3,
		  MeteData: &common.ServiceMeteData{
			 Project: "test",
			 Group:   "default",
			 Service: "xsf",
			 Version: "1.0.0",
			 Address: "192.168.1.2:9091",
		  },
	   }	
       
	   f, err := finder.NewFinder(config)
	   if err != nil {
		  fmt.Println(err)
	   }	   
       
	   // use config with watcher
	   handler := new(ConfigChangedHandle)
	   configFiles, err := f.ConfigFinder.UseAndSubscribeConfig([]string{"default.cfg", "xsfc.tmol"}, handler)	   
       
	   // register service 
	   err = f.ServiceFinder.RegisterService()
	   if err != nil {
		  fmt.Println(err)
	   } 	   
       
	   // describe service
	   handler := new(ServiceChangedHandle)
	   serviceList, err = f.ServiceFinder.UseAndSubscribeService([]string{"xsf"}, handler)
	   if err != nil {
		  fmt.Println(err)
	   }	   
       
	   //todo business...
    }
```

- **Agent**[planning]

  `Also,you can have an integration with our agent without coding. This is in the planning stage already.`

![](img/15138545464059.jpg)


