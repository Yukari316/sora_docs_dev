---
title: 安装框架到项目工程
---

# 安装

:::danger 注意
请在使用前确认自己的Visual Studio已经安装了最新的.Net 6 SDK
:::

## 新建一个工程

新建一个.Net Core控制台工程，新建工程后请到工程属性里进行一些修改

在应用程序选项卡里，修改工程的目标框架为`.NET 6.0`

![TargetFramework](https://i.loli.net/2021/11/16/SNpMw4hI7PWHvVR.png)

## 安装Nuget包到工程

再右键你的工程，选择`管理 Nuget 程序包`打开Nuget包管理器

在搜索栏中搜索`Sora`并在搜索结果中找到本框架的Nuget包，并将包安装你的工程

![Nuget](https://i.loli.net/2021/11/16/h8SEersmiz2MU6f.png)