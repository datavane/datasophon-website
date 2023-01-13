---
sidebar_position: 1
sidebar_label: RoadMap
---

# RoadMap

## 愿景
致力于快速实现部署、管理、监控以及自动化运维大数据云原生平台，帮助您快速构建起稳定、高效、可弹性伸缩的大数据云原生平台。

## v1.1.0

支持系统租户管理。

主机管理支持机架管理。

YARN资源调度支持容量调度器。

YARN资源调度支持标签调度。

支持组件集成Kerberos，可自由开启和关闭kerberos认证集成。

## v1.2.0

集成数据湖组件。

支持Flink集成Hudi ， Flink集成Iceberg。

支持Spark集成Hudi， Spark集成Iceberg。

## v2.0.0

兼容云原生生态。

支持K8S集群管理，基于K8S调度，替换原YARN资源调度框架，实现大数据作业零运维，任务自动扩容和自愈。

基于JuiceFs+Minio实现存算分离和统一元数据，提升资源利用率。

支持Flink On K8S。

支持Spark On K8S。

支持集成Apache Pulsar云原生消息队列。
