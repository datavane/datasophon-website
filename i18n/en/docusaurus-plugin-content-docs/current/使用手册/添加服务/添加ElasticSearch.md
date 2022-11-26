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

DolphinScheduler导入数据库表详见：https://dolphinscheduler.apache.org/zh-cn/docs/latest/user_doc/guide/howto/datasource-setting.html

