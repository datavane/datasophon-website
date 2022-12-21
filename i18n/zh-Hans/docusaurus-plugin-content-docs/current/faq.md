---
sidebar_position: 14
id: faq
title: FAQ
---

## 1、主机环境校验-主机连接失败

![image-20221219230742616](./faq/image-20221219230742616.png)

**解决办法：**

一、检查环境配置

- 使用该命令创建免密登录

```
 ssh-keygen -m PEM -t rsa
```

- 第一步输入的主机名与hostnamectl set-hostname 主机名保持一致。

二、查询操作系统OpenSSH版本。

   DataSophon使用jsch进行远程主机连接，jsch与openssh版本存在兼容问题，会导致主机连接失败。若出现因OpenSsh版本过高，可通过手动部署DataSophon Worker的方式规避主机连接校验。

