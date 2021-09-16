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
using Sora.Net;
using Sora.OnebotModel;
using System.Threading.Tasks;
using YukariToolBox.Extensions;
using YukariToolBox.FormatLog;
```



## 创建一个服务端实例(反向WS)

> 框架同时还支持正向WS的连接方式
> 
> 将 `ServerConfig` 改为 `ClientConfig` 即可使用正向的连接方式

```csharp
//默认端口为8080
//实例化Sora服务器
var service = SoraServiceFactory.CreateInstance(new ServerConfig());
```

这个时候你还需要启动服务器才能让服务器跑起来

在Main函数中添加以下代码来启动服务器

```csharp
//启动服务并捕捉错误
await service.StartService().RunCatch(e => Log.Error("Sora Service", Log.ErrorLogBuilder(e)));
await Task.Delay(-1);
```

## 跑起来试试看

按下`F5`开始运行自己刚写好最简单的bot吧！

如果出现图片中的结果，那么bot已经成功运行了

![SoraRun.png](https://i.loli.net/2021/03/13/RXhsuQTP6mOF12c.png)