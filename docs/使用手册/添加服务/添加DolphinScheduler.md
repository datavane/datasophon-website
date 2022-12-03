---
sidebar_position: 11
sidebar_label: 添加DolphinScheduler
---

# 添加DolphinScheduler

初始化DolphinScheduler数据库。

```
CREATE DATABASE dolphinscheduler DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
GRANT ALL PRIVILEGES ON dolphinscheduler.* TO 'dolphinscheduler'@'%' IDENTIFIED BY 'dolphinscheduler';
GRANT ALL PRIVILEGES ON dolphinscheduler.* TO 'dolphinscheduler'@'localhost' IDENTIFIED BY 'dolphinscheduler';
flush privileges;
```

执行/opt/datasophon/DDP/packages目录下**dolphinscheduler_mysql.sql**创建dolphinscheduler数据库表。

添加DolphinScheduler。

![image-20221128175432778](../img/image-20221128175432778.png)

![image-20221128175519219](../img/image-20221128175519219.png)

![image-20221128175551807](../img/image-20221128175551807.png)

根据实际情况，修改DolphinScheduler配置。

![image-20221128175644449](../img/image-20221128175644449.png)

开始安装DolphinScheduler，安装成功后可以看到DolphinScheduler总览页面，可以通过WebUi打开DolphinScheduler页面。

![image-20221128180511535](../img/image-20221128180511535.png)

![image-20221128180038155](../img/image-20221128180038155.png)
