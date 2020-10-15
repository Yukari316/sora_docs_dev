---
title: 我想加点简单好玩的功能
---

# 给Bot添加一些逻辑

接下来的向导将会示范如何让自己的bot拥有复读的功能 

~~最简单的复读，最极致的享受~~

::: tip 小提示
请不要在公共的群内测试此功能

~~会被群友围殴的~~
:::

## 添加事件回调函数

在bot服务器实例和延时函数中添加一个收到消息事件的回调处理代码

```csharp
server.Event.OnGroupMessage += async (sender, eventArgs) =>
                                           {
                                               
                                           };
```

::: tip 小提示
接下来的代码需要调用`eventArgs`中的方法或者`Group`实例来和群友进行互动
::: 

## 使用快捷接口进行复读

~~为什么我要专门写这种功能~~

在事件处理代码中添加以下代码

```
await eventArgs.Repeat();
```

复读功能就实现好了 ~~怎么样，很简单吧！~~

### 完成后的代码总览

```csharp
static async Task Main(string[] args)
        {
            SoraWSServer server = new SoraWSServer(new ServerConfig{Port = 9200});

            server.Event.OnGroupMessage += async (sender, eventArgs) =>
                                           {
                                               await eventArgs.Repeat();
                                           };
            await Task.Delay(-1);
        }
```

## 使用群聊接口进行复读

> 调用`Group`中的`SendGroupMessage()`函数发送群聊消息

在事件处理代码中添加以下代码

```csharp
await eventArgs.SourceGroup.SendGroupMessage(eventArgs.Message.MessageList);
```

另一种的复读功能也就实现好了

### 完成后的代码总览

```csharp
static async Task Main(string[] args)
        {
            SoraWSServer server = new SoraWSServer(new ServerConfig{Port = 9200});

            server.Event.OnGroupMessage += async (sender, eventArgs) =>
                                           {
                                               await eventArgs.SourceGroup.SendGroupMessage(eventArgs.Message.MessageList);
                                           };
            await Task.Delay(-1);
        }
```

## 简单的向导结束了哦

~~其实这向导就教会了一个复读~~

Sora框架的快速使用指南到这里就结束了，阅读到这里相信你对框架的使用有了一定初步的了解

~~相信你已经可以写出优秀的机器人了，我们来做更复杂的bot吧!~~

框架的更多使用方法将在后续的文档进行介绍~~在做了在做了~~



~~就这？~~