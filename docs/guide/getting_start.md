---
title: 安装框架到项目工程
---

# 安装

:::danger 注意
请在使用前确认自己的Visual Studio已经安装了.Net 6或以上版本的SDK

[Dotnet SDK](https://dotnet.microsoft.com/en-us/download)
:::

## 新建一个工程

新建一个.Net Core控制台工程，新建工程后请到工程属性里进行一些修改

在应用程序选项卡里，修改工程的目标框架为`.NET 6.0`或更高的版本

![TargetFramework](https://raw.githubusercontent.com/Yukari316Shadow/SoraDocs/image/SDK_Ver.png)

## 安装Nuget包到工程

再右键你的工程，选择`管理 Nuget 程序包`打开Nuget包管理器

在搜索栏中搜索`Sora`并在搜索结果中找到本框架的Nuget包，并将包安装你的工程

![Nuget](https://raw.githubusercontent.com/Yukari316Shadow/SoraDocs/image/SoraNuget.png)