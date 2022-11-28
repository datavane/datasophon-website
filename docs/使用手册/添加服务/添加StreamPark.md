---
sidebar_position: 12
sidebar_label: 添加StreamPark
---

# 添加StreamPark

初始化StreamPark数据库。

```
CREATE DATABASE streampark DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
GRANT ALL PRIVILEGES ON streampark.* TO 'streampark'@'%' IDENTIFIED BY 'streampark';
GRANT ALL PRIVILEGES ON streampark.* TO 'streampark'@'localhost' IDENTIFIED BY 'streampark';
flush privileges;
```

执行/opt/datasophon/DDP/packages目录下**streampark.sql**创建streampark数据库表。

添加StreamPark。

![image-20221128213117639](../img/image-20221128213117639.png)

根据实际情况修改配置。

![image-20221128213202009](../img/image-20221128213202009.png)

安装成功后可查看StreamPark总览页面，可通过WebUi跳转到StreamPark用户页面。

![image-20221128213744193](../img/image-20221128213744193.png)

![image-20221128213402376](../img/image-20221128213402376.png)
