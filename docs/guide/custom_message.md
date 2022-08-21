---
title: 创建自定义消息
---

# 我们应该做什么

首先需要了解用于定义消息的类

```csharp
Sora.Entities.MessageBody
```
该类用来定义需要发送的消息

```csharp
/// <summary>
/// 发送群聊消息
/// </summary>
/// <param name="groupId">发送目标群id</param>
/// <param name="message">消息内容</param>                 ←就是这个
/// <param name="timeout">覆盖原有超时</param>
/// <returns>
/// <para><see cref="ApiStatusType"/> API执行状态</para>
/// <para><see langword="messageId"/> 消息ID</para>
/// </returns>
public async ValueTask<(ApiStatus apiStatus, int messageId)> SendGroupMessage(
    long groupId, MessageBody message, TimeSpan? timeout = null)
```

内部使用一个List来按顺序存储所有消息段

```csharp
private readonly List<SoraSegment> _message = new();
```

# 我们该怎么做

那么我们可以通过手动初始化的办法构建

```csharp
MessageBody messageBody = new MessageBody(new List<SoraSegment>()
	{
        SoraSegment.Text("Hello World!"), // 生成文字消息段
		SoraSegment.Image("图片名"), // 生成图片消息段
        ...
	});
```

还可以更简单

```csharp
MessageBody messageBody = SoraSegment.At(114514) +
    SoraSegment.Text(" 早上好 ") + SoraSegment.Face(123) + ...;
```

需要将`CQ码`变成对应的消息体?

直接用就行了

```csharp
MessageBody messageBody = "[CQ:at,qq=114514] 早上好 [CQ:face,id=123] ...";
```

::: tip 提示

只有从 `string` 变成 `MessageBody` 时会解析CQ码

而使用 `SoraSegment.Text();` 则不会

:::

更多的消息段可以在这个类里面找到

```csharp
Sora.Entities.Segment.SoraSegment
```

