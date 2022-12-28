---
sidebar_position: 2
sidebar_label: Prepare the environment
---

## Network Requirements
The following network port configurations are required for the normal operation of each machine component：

| **components**                | **default port**     |                         **description **                          |
| ----------------------- | ---------------- | :-------------------------------------------------------: |
| DDHApplicationServer    | 8081、2551、8586 |  8081 indicates the http server port，2551 indicates rpc communication port，8586 is a jmx port  |
| WorkerApplicationServer | 2552、9100、8585 |  2552 indicates rpc communication port，8585 is a jmx port，9100 Indicates the port of the host data collector |
| nginx                   | 8888             |                    provide client ui communication port                     |

## Client browser requirements
```
Chrome and newer versions of the Chrome kernel are recommended for accessing the front-end visual interface.
```
## Disabling the Firewall

Disable the firewall on each host.

## Configuring Hosts

Hosts must be configured for all machines in a big data cluster.

Configuring the Host Name： hostnamectl set-hostname  host name

configuration /etc/hosts file

## The password - free login is configured
Deployment machine，No secret login is required between the DataSophon node and the primary and secondary nodes of the big data service.

Generate an ssh key： ssh-keygen -m PEM -t rsa ，Press enter all the way.

Run the ssh-copy-id command to the destination host.

## Environmental requirement
Jdk Environment Required Installation.You are advised to set the mysql version to 5.7.X and disable ssl.

## Component Description

DDHApplicationServer is the API interface layer that is the web backend,responsible for handling front-end UI layer requests.The service provides RESTful apis to provide external request services.

WorkerApplicationServer executes the instructions sent by DDHApplicationServer，Commands for installing, starting, stopping, and restarting services are included.