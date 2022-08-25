---
title: 创建自定义消息
---

# 自定义消息

当你希望bot不仅仅局限于只能发送文本的时候，你需要创建一个`自定义消息体`。
正如正常聊天时一样，自定义消息允许你发送图文并茂的信息，其中可以包括At、表情、图片等，你甚至还可以直接从`CQ码`转换为自定义消息体。

# 背景知识

首先需要了解用于定义消息体的类：

```csharp
Sora.Entities.MessageBody
```
该类用来定义需要发送的消息。
一个消息体可以包含多个消息段（每个消息段可以是不同种类的消息），在客户端显示的时候会显示在一个消息中。

```csharp
/// <summary>
/// 发送群聊消息
/// </summary>
/// <param name="groupId">发送目标群id</param>
/// <param name="message">消息内容</param>                 ←这个就是要发送的消息内容
/// <param name="timeout">覆盖原有超时</param>
/// <returns>
/// <para><see cref="ApiStatusType"/> API执行状态</para>
/// <para><see langword="messageId"/> 消息ID</para>
/// </returns>
public async ValueTask<(ApiStatus apiStatus, int messageId)> SendGroupMessage(
    long groupId, MessageBody message, TimeSpan? timeout = null)
```

它的内部使用一个List来按顺序存储所有消息段：

```csharp
private readonly List<SoraSegment> _message = new();
```

# 我们该怎么做

那么我们可以通过手动初始化的办法构建自定义消息体：

```csharp
MessageBody messageBody = new MessageBody(new List<SoraSegment>()
	{
        SoraSegment.Text("Hello World!"), // 生成文字消息段
		SoraSegment.Image("图片名"), // 生成图片消息段
        ...
	});
```

它还可以更简单：

```csharp
MessageBody messageBody = SoraSegment.At(114514) +
    SoraSegment.Text(" 早上好 ") + SoraSegment.Face(123) + ...;
```

需要将`CQ码`变成对应的消息体?

直接用就行了：

```csharp
MessageBody messageBody = "[CQ:at,qq=114514] 早上好 [CQ:face,id=123] ...";
```

::: tip 提示

只有从 `string` 变成 `MessageBody` 时会解析CQ码；

而使用 `SoraSegment.Text();` 则不会。

:::

更多的消息段类型可以在这个类里面找到：

```csharp
Sora.Entities.Segment.SoraSegment
```

