---
sidebar_position: 2
sidebar_label: 版本
---

# 版本

## v1.0.0
支持多集群管理。

支持配置集群管理员，集群管理员具备集群操作管理权限，普通用户只有查看权限。

支持HDFS ，YARN，Hive , Kafka , ZooKeeper，Flink , Spark 等常用大数据组件。

支持集群总览监控。

支持各服务组件总览监控。

支持服务启动，停止，重启等操作。

支持服务角色启动，停止，重启，删除等操作。

支持Yarn公平调取器管理。

支持主机管理，支持实时监控主机Cpu使用率，内存使用率，磁盘使用率等常用指标。

支持告警管理，支持自定义告警指标。

支持服务配置文件修改。

支持配置文件修改后集群服务自动检测需要重启生效的依赖服务提示。

支持各大数据服务Web UIs便捷访问。

支持在线查看服务角色日志。

## v1.0.1

## 新特性

[新特性]支持集成Apache DolphinScheduler,默认已配置集成集群环境，助您快速玩转ETL调度。

[新特性]支持集成Apache StreamPark，默认已配置集成集群环境，助您快速玩转实时计算。

## Bug修复

[Bug] 修复session为null出现nullpointexception问题

[Bug] 修复Hdfs部分服务角色安装超时失败的问题

[Bug] 修复主机内存获取异常问题

[Bug] 修复es部署时，elastic用户没有权限的问题

## v1.0.2

## 新特性

[新特性]新增服务删除功能

[新特性]使用apache sshd替换原jsch实现的功能，避免因openssh版本过高导致的jsch主机链接失败问题

[新特性]新增服务安装依赖校验功能

[新特性]kafka新增低于最小isr分区个数，离线目录，未同步状态分区数指标

[新特性]kafka新增总览图表topic每秒写入message趋势图，topic每秒写入数据量趋势图，kafka borker 堆内存使用率趋势图

[新特性]新增yarn已用内存，yarn已用核数指标，nodemanager lost个数指标展示

## Bug修复

[Bug]修复yarn内存使用率，yarn内核使用率指标展示异常问题

[Bug]修复yarn虚拟核数，yarn总虚拟内存展示异常的问题