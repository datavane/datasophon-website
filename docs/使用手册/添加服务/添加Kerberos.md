---
sidebar_position: 13
sidebar_label: 添加Kerberos
---

# 添加Kerberos

点击【添加服务】，选择Kerberos。

![image-20230425222444725](../img/image-20230425222444725.png)

分配Krb5Kdc和KAdmin服务角色部署节点。

![image-20230425222611938](../img/image-20230425222611938.png)

选择需要部署Krb5Client服务角色的节点。

![image-20230425222720582](../img/image-20230425222720582.png)

点击【下一步】，进行Kerberos服务配置页面，默认不需要修改，注意：**域名默认为HADOOP.COM，暂不支持修改。**

![image-20230425223138371](../img/image-20230425223138371.png)

点击【下一步】进行Kerbeross服务安装。**注意：Kerberos服务将通过yum方式安装，请保证各服务器上yum源可正常使用。**

![image-20230425223559650](../img/image-20230425223559650.png)

![image-20230425223626411](../img/image-20230425223626411.png)
