---
sidebar_position: 9
sidebar_label: 添加Trino
---

# 添加Trino

点击【添加服务】，选择Trino。

![image-20221106215738313](../img/image-20221106215738313.png)

选择TrinoCoordinator。

![image-20221119151941388](../img/image-20221119151941388.png)

选择TrinoWorker。注意：TrinoCoordinator和TrinoWorker不要部署在同一台机器上。

![image-20221119152019651](../img/image-20221119152019651.png)

注意"Trino最大堆内存"，"每个查询在单个节点可使用最大内存"这两个配置，其中"每个查询在单个节点可使用最大内存"不可超过"Trino最大堆内存"的80%，"总共可使用最大内存"为"每个查询在单个节点可使用最大内存"* TrinoWorker数。

![image-20221119152223782](../img/image-20221119152223782.png)

点击【下一步】，开始安装Trino。

![image-20221119154755609](../img/image-20221119154755609.png)

![image-20221119155148205](../img/image-20221119155148205.png)
