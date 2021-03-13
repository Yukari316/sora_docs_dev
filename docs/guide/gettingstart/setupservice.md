---
title: 创建一个最简单的Bot
---

# 创建一个最简单的Bot

:::danger 注意
本框架只支持Universal连接方式的Array上报格式

请将onebot端的数据上报格式修改为Array格式
:::

## 在Main.cs中添加必要的引用

添加以下代码的引用

```csharp
using Sora.Interfaces;
using Sora.Net;
using Sora.OnebotModel;
```



## 创建一个服务端实例

```csharp
//初始化Sora服务实例
//默认端口为8080
ISoraService service = new SoraWebsocketServer(new ServerConfig());
```

这个时候你还需要启动服务器才能让服务器跑起来

在Main函数中添加以下代码来启动服务器

```csharp
await service.StartService();
```

## 跑起来试试看

按下`F5`开始运行自己刚写好最简单的bot吧！

如果出现图片中的结果，那么bot已经成功运行了

![SoraRun.png](https://i.loli.net/2021/03/13/RXhsuQTP6mOF12c.png)