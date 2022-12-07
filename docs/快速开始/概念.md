---
sidebar_position: 1
sidebar_label: concept
---


* Cluster

A large data storage and computing system composed of a group of services and hosts.

* Service

A software system deployed on a cluster, such as distributed storage HDFS and distributed computing SPARK.

* Service role

The components of a service. for example HDFS have NameNode，DataNode，SecondryNameNode service role and so on.

* Service Role Instance

A service role instance is a stably running instance process.

* Role Category

There are three types of service roles: Master roles,Worker roles,Client roles.

* Management Node

Deploy DataSophon a group of hosts on the management end.

* Worker Nodes

Deploy DataSophon a group of hosts at the working end.

* DataSophon platform management end

DataSophon Platform management end，provide Web Ui，Responsible for communication with the working end of DataSophon platform，Send service management operation instructions.

* DataSophon platform working end

A service for which the DataSophon platform executes instructions，Execute the operation instructions sent by the management end.

