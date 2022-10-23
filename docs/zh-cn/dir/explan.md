---
title: 名词解释
keywords: 集群,服务, 角色
description: some description
---

## 集群

通过一组服务和主机共同构成的大数据存储与计算系统。

## 服务

用于部署到集群上的一套软件系统，例如分布式存储HDFS，分布式计算SPARK。

## 服务角色

一个服务的各个组成部分。例如HDFS有NameNode，DataNode，SecondryNameNode等服务角色。

## 角色类别

服务角色可分为Master角色，Worker角色和Client角色。

## 服务角色实例

服务角色是一个可稳定运行的实例进程。

## 主机

用于部署服务角色的单个服务器。

## 管理节点

部署大数据基础平台管理组件的一组主机，根据集群规模不同选择3台或5台。

## 工作节点

部署大数据基础平台工作组件的一组主机，如部署DataNode，NodeManager的一组主机。

## DataSophon管理端

DataSophon管理服务，提供Web Ui，负责与DataSophon工作端通信，发送服务操作指令，如启动、停止DataNode。

## DataSophon工作端

DataSophon是负责执行指令的服务，负责执行管理端发送的操作指令，如启动、停止DataNode。

## 集群管理员

集群管理员，具有操作DataSophon平台权限，可执行服务启动，停止等操作指令。