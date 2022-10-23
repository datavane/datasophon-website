---
title: 建议配置
keywords: 服务器要求
description: some description
---

## 1.2 添加ZooKeeper

点击【添加服务】，选择ZooKeeper。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps21.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps22.jpg) 

分配ZooKeeper master服务角色部署节点，zk需部署奇数台。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps23.jpg) 

Zk没有worker与client服务角色，直接点击【下一步】跳过。

根据实际情况修改Zk服务配置。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps24.jpg) 

点击【下一步】，进行zk服务安装。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps25.jpg) 

## 1.3 添加HDFS

部署HDFS，其中JournalNode需部署三台，NameNode部署两台，ZKFC和NameNode部署在相同机器上。如下图：

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps26.jpg) 

选择DataNode部署节点。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps27.jpg) 

根据实际情况修改配置，例如修改DataNode数据存储目录：

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps28.jpg) 

点击【下一步】安装HDFS。

## 1.4 添加YARN

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps29.jpg) 

选择两台机器部署ResourceManager。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps30.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps31.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps32.jpg) 

默认值如下：

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps33.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps34.jpg) 

## 1.5 添加Hive

在数据库中创建Hive数据库。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps35.png)

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps36.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps37.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps38.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps39.jpg) 

安装HiveServer2时会执行sql创建Hive的表，在个别情况下会因mysql配置导致sql执行失败，可根据实际失败原因修改mysql配置。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps40.jpg) 

## 1.6 添加Hbase

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps41.jpg) 

 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps42.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps43.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps44.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps45.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps46.jpg) 

## 1.7 添加Spark3

与上述服务安装类似，详细过程略。

## 1.8 添加Flink

与上述服务安装类似，详细过程略。

## 1.9 添加Kafka

与上述服务安装类似，详细过程略。

## 1.10 添加Trino

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps47.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps48.jpg) 

Trino的worker节点不可与coordinator节点在同一台机器上。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps49.jpg) 

 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps50.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps51.jpg) 

## 1.11 添加Ranger

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps52.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps53.jpg) 

Ranger没有worker与client角色，可直接跳过。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps54.jpg) 

配置Ranger的数据库连接信息。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps55.jpg) 

安装成功后，点击服务配置，开启HDFS和Hive Ranger插件。开启后，点击保存。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps56.jpg) 

点击HDFS，打开配置，配置Ranger访问地址即Ranger实例的地址，端口默认为6080，

保存配置后，重启NameNode。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps57.jpg) 

点击Hive，打开配置，配置Ranger访问地址即Ranger实例的地址，端口默认为6080，

保存配置后重启HiveServer2。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps58.jpg) 

通过平台访问Ranger Web Ui添加hivedev

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps59.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps60.jpg) 测试连接hiveserver2

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps61.jpg) 

出现以下提示说明连接成功！

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps62.jpg) 

同理，添加hadoopdev，用于HDFS授权。

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps63.jpg) 

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps64.jpg) 

注意：Service Name配置固定为hadoopdev，NameNode高可用配置根据提示配置

![img](file:///C:\Users\诸葛余\AppData\Local\Temp\ksohtml19564\wps65.jpg) 

点击Add添加。