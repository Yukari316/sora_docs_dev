---
title: 创建一个最简单的Bot
---

# 创建一个最简单的Bot

## 在Main.cs中添加必要的引用

添加以下代码的引用

```csharp
using Sora;
```



## 创建一个服务端实例

在Main函数中添加以下代码创建一个服务器实例

```csharp
SoraWSServer server = new SoraWSServer(new ServerConfig());
```

这个时候你还需要添加一个无限的延时函数让bot一直运行下去  ~~不要停下来啊~~

在Main函数中添加以下代码

```csharp
await Task.Delay(-1);
```

## 跑起来试试看

按下`F5`开始运行自己刚写好最简单的bot吧！

如果出现图片中的结果，那么bot已经成功运行了

![Test](https://i.loli.net/2020/10/15/WMfKBZO3uCalHmS.png)