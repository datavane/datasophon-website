---
slug: aws-sealos-3
title: 快速创建k8s集群(sealos3 on aws)
authors: sea-wyq
tags: [sealos, aws]
---
## 1. 在aws上申请服务器资源

![img](aws.png)

## 2. 使用sealos部署k8s集群

#### 2.1. 关闭防火墙和selinux :All

```
systemctl stop firewalld 
systemctl disable firewalld 
setenforce 0
```

#### 2.2 创建虚拟机之后，配置主机名，配置内网解析:All

```
hostnamectl set-hostname master 
hostnamectl set-hostname node1
```

#### 2.3.配置hosts文件:Master

```
# 节点ip通过各节点ipconfig获取
cat <<EOF >> /etc/hosts  
172.31.1.36 master  
172.31.11.161 node1   
EOF
```

#### 2.4.配置master免密登录各节点：Master

```
ssh-keygen
ssh-copy-id root@master 
ssh-copy-id root@node1 
```

#### 2.5. 下载并安装sealos-3.9并部署一个一主一从的k8s集群

```
# 下载sealos
wget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos/latest/sealos && 
    chmod +x sealos && mv sealos /usr/bin

# 下载kubelete-1.22版本离线资源包
wget -c https://sealyun.oss-cn-beijing.aliyuncs.com/05a3db657821277f5f3b92d834bbaf98-v1.22.0/kube1.22.0.tar.gz

# 部署k8s集群
sealos init \
--passwd 123456 \
--master 172.31.1.36 \
--node 172.31.11.161 \
--pkg-url /home/ubuntu/kube1.22.0.tar.gz \
--version v1.22.0
```

#### 2.6. 安裝helm
- Download your desired version (wget  https://get.helm.sh/helm-v3.9.0-linux-amd64.tar.gz)
- Unpack it (tar -zxvf helm-v3.9.0-linux-amd64.tar.gz)
- Find the helm binary in the unpacked directory, and move it to its desireddestination (mv linux-amd64/helm /usr/local/bin/helm)

#### 2.7 helm安装本地持久化存储openebs服务

```
helm add repo openebs https://openebs.github.io/charts
helm pull openebs/openebs

# 修改服务对应的storageclass即可
#默认持久化数据地址：/var/openebs/local

# 安装openebs
helm install ebs openebs
```

#### 2.8. 通过helm安装athena服务

```
https://github.com/sea-wyq/Athena_deploy.git
cd Athena_deploy/chart/
helm install athena athenaserving
```

服务集群搭建成功。。。