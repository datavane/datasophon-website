---
sidebar_position: 10
sidebar_label: 添加Ranger
---

# 添加Ranger

创建Ranger数据库。

```
CREATE DATABASE IF NOT EXISTS ranger DEFAULT CHARACTER SET utf8;
grant all privileges on *.* to ranger@"%" identified by 'ranger' with grant option;
GRANT ALL PRIVILEGES ON *.* TO 'ranger'@'%';
FLUSH PRIVILEGES;
```

点击【添加服务】，选择Ranger。

![image-20221106215738313](../img/image-20221106215738313.png)

选择RangerAdmin部署节点。

![image-20221119155422545](../img/image-20221119155422545.png)

输入数据库root用户密码，数据库地址，Ranger数据用户密码等配置信息。

![image-20221119155539287](../img/image-20221119155539287.png)

点击【下一步】，开始安装Ranger，**Ranger在安装过程中会执行sql语句，可能因mysql配置问题导致sql执行失败，从而导致Ranger安装失败，可查看日志查找sql执行失败原因，解决后重新添加实例安装。**

![image-20221119155902639](../img/image-20221119155902639.png)

安装成功后可查看Ranger总览页面。

![image-20221122162748841](../img/image-20221122162748841.png)
