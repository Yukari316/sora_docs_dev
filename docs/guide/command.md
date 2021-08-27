---
title: 使用特性指令
---

# 特性指令

这是一个简单易用的指令分发服务扩展

::: tip 小提示
自带的指令系统是一个十分简单且轻量的指令系统，只有触发指令的功能

如果想要使用支持IOC/参数注入或者更加复杂的指令管理系统，这里推荐使用由[Eric_Lian](https://github.com/ExerciseBook)编写的指令框架[OneBot-Framework](https://github.com/ParaParty/OneBot-Framework)
:::

实现了和 [Discord.Net](https://github.com/discord-net/Discord.Net) 框架类似的特性指令服务

使用特性 [`CommandGroup`](../../API/Sora.Command.Attributes/CommandGroup.md) 来标识需要注册指令的类（没有将不会被识别）

通过特性 [`GroupCommand`](../../API/Sora.Command.Attributes/GroupCommand.md) 和 [`PrivateCommand`](../../API/Sora.Command.Attributes/PrivateCommand.md) 来分发群聊和私聊指令

但是并没有实现自动的参数转换和注入（个人觉得这样做会限制很大的开发空间就不做实现了）,该指令服务只会传递框架中的 [`GroupMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md) 和 [`PrivateMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) 的事件参数，其余的响应逻辑和参数处理需要自己完成

所以特性和方法的参数有如下的对应关系，并且只能有一个对应的参数，否则将不会被识别

[`GroupCommand`](../../API/Sora.Command.Attributes/GroupCommand.md) -> [`GroupMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md)

[`PrivateCommand`](../../API/Sora.Command.Attributes/PrivateCommand.md) -> [`PrivateMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md)

## 使用方法

::: tip 小提示
如果注册指令的方法为非静态方法，则执行实例将会在初始化时由框架创建并保存

这意味着在多次调用指令时，负责执行的指令的实例将一直都会是初始化时所创建的实例，其中的属性值将会是上次执行结束后的值
:::

编写以下指令

### 群聊指令

```csharp
[CommandGroup()]
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
[CommandGroup()]
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