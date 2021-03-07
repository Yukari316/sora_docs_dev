---
title: 使用特性指令
---

# 特性指令

这是一个简单易用的指令分发服务扩展

实现了和 [Discord.Net](https://github.com/discord-net/Discord.Net) 框架类似的特性指令服务

使用特性 [`CommandGroup`](../../API/Sora.Command.Attributes/CommandGroup.md) 来标识需要注册指令的类（没有将不会被识别）

通过特性 [`GroupCommand`](../../API/Sora.Command.Attributes/GroupCommand.md) 和 [`PrivateCommand`](../../API/Sora.Command.Attributes/PrivateCommand.md) 来分发群聊和私聊指令

但是并没有实现自动的参数转换和注入（个人觉得这样做会限制很大的开发空间就不做实现了）,该指令服务只会传递框架中的 [`GroupMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md) 和 [`PrivateMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) 的事件参数，其余的响应逻辑和参数处理需要自己完成

所以特性和方法的参数有如下的对应关系，并且只能有一个对应的参数，否则将不会被识别

[`GroupCommand`](../../API/Sora.Command.Attributes/GroupCommand.md) -> [`GroupMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md)

[`PrivateCommand`](../../API/Sora.Command.Attributes/PrivateCommand.md) -> [`PrivateMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md)

## 使用方法

编写以下指令

### 群聊指令

```csharp
[CommandGroup("test group")]
public class Commands
{
    [GroupCommand(CommandExpression = "好耶")]
    public async ValueTask TestCommand(GroupMessageEventArgs eventArgs)
    {
        await eventArgs.Reply("坏耶");
    }
}
```

### 私聊指令

```csharp
[CommandGroup("test group")]
public class Commands
{
    [PrivateCommand(CommandExpression = "在")]
    public async ValueTask TestCommand(PrivateMessageEventArgs eventArgs)
    {
        await eventArgs.Reply("不在");
    }
}
```

启动服务器后指令服务就会自动注册有[`CommandGroup`](../../API/Sora.Command.Attributes/CommandGroup.md)特性的类下的所有指令

**没有[`CommandGroup`](../../API/Sora.Command.Attributes/CommandGroup.md)特性的类将会被忽略**