---
title: 建议配置
keywords: 服务器要求
description: some description
---

## 1.1 创建集群

登录进入系统页面后在集群管理页面创建集群。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps9.jpg) 

创建成功后点击配置集群：

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps10.jpg) 

根据提示，输入主机列表，ssh用户名默认为root和ssh端口默认为22。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps11.jpg) 

配置完成后，点击【下一步】，系统开始链接主机并进行主机环境校验。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps12.jpg) 

主机环境校验成功后点击【下一步】，主机agent分发，将自动发放ddh-worker组件，并启动WorkerApplicationServer。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps13.jpg) 

主机管理Agent分发完成后，点击【下一步】，开始部署服务。

初始化配置集群先选择部署AlertManager,Grafana和Prometheus。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps14.jpg) 

点击【下一步】，分配AlertManager,Grafana和Prometheus服务的master服务角色部署节点。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps15.jpg) 

点击下一步，分配AlertManager,Grafana和Prometheus服务的worker与client服务角色部署节点，没有worker和client服务角色的可以跳过之间点击【下一步】。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps16.jpg) 

修改各服务配置。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps17.jpg) 

点击【下一步】开始服务安装，可实时查看服务安装进度。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps18.jpg) 

点击【完成】，进入系统主页。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps19.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps20.jpg) 

