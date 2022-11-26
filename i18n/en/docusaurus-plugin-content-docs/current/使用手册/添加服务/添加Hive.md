---
sidebar_position: 6
sidebar_label: 添加Hive
---
## 添加Hive

在数据库中创建Hive数据库。

```
CREATE DATABASE IF NOT EXISTS hive DEFAULT CHARACTER SET utf8;
grant all privileges on *.* to hive@"%" identified by 'hive' with grant option;
GRANT ALL PRIVILEGES ON *.* TO 'hive'@'%';
FLUSH PRIVILEGES;
```

![image-20221108211816745](../img/image-20221108211816745.png)

安装HiveServer2时会执行sql创建Hive的表，在个别情况下会因mysql配置导致sql执行失败，可根据实际失败原因修改mysql配置。
