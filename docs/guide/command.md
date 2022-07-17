---
title: 使用指令完成聊天事件处理
---

# 特性指令

这是一个简单易用的指令分发服务扩展

::: tip 小提示
自带的指令系统是一个十分简单且轻量的指令系统，只有触发指令的功能

如果想要使用支持IOC/参数注入或者更加复杂的指令管理系统，这里推荐使用由[Eric_Lian](https://github.com/ExerciseBook)编写的指令框架[OneBot-Framework](https://github.com/ParaParty/OneBot-Framework)
:::

实现了和 [Discord.Net](https://github.com/discord-net/Discord.Net) 框架类似的特性指令服务

使用特性 [`CommandGroup`](../../API/Sora.Command.Attributes/CommandGroup.md) 来标识需要注册指令的类（没有将不会被识别）

通过特性 [`SoraCommand`](../../API/Sora.Command.Attributes/SoraCommand.md) 来分标记需要注册的指令

但是并没有实现自动的参数转换和注入（个人觉得这样做会让框架变得很重所以就不搞了~~摸了~~）

该指令服务只会传递框架中的 [`GroupMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md) 和 [`PrivateMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) 的事件参数，其余的响应逻辑和参数处理需要自己完成

启动服务器后指令服务就会自动注册有[`CommandGroup`](../../API/Sora.Command.Attributes/CommandGroup.md)特性的类下的所有指令

**没有[`CommandGroup`](../../API/Sora.Command.Attributes/CommandGroup.md)特性的类将会被忽略**

::: warning 注意
`SourceType` 的值必须为 `SourceFlag.Group` 或 `SourceFlag.Private`
:::

[`SoraCommand`](../../API/Sora.Command.Attributes/SoraCommand.md) 必须设置 `CommandExpressions` 和 `SourceType` 的值才能被识别为合法指令

所以方法的参数类型和 `SourceType` 的值有着一一对应的关系，如果类型不对应的话也不会被识别为合法指令

`SourceFlag.Group` -> [`GroupMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md)

`SourceFlag.Private` -> [`PrivateMessageEventArgs`](../../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md)

::: tip 小提示
指令的匹配模式可以通过修改 `MatchType` 来改变

一共有三种匹配模式

`MatchType.Full` -> 全字匹配

`MatchType.Regex` -> 正则匹配

`MatchType.KeyWord` -> 关键字匹配

:::

## 使用方法

::: tip 小提示
如果注册指令的方法为非静态方法，则执行实例将会在初始化时由框架创建并保存

这意味着在多次调用指令时，负责执行的指令的实例将一直都会是初始化时所创建的实例，其中的属性值将会是上次执行结束后的值
:::

::: tip 小提示
如果在指令触发后不想再触发其他的指令或者事件的话，请将事件参数中的 `IsContinueEventChain` 设置为 `false`

在下方的实例中将示范如何使用
:::

::: tip 小提示
当指令的表达式和优先级一致时指令的执行顺序为随机的顺序
:::

### 群聊指令

```csharp
using System.Threading.Tasks;
using Sora.Attributes.Command;
using Sora.Enumeration;
using Sora.EventArgs.SoraEvent;

namespace Sora_Test;

[CommandGroup]
public static class Commands
{
    [SoraCommand(
        CommandExpressions = new[] {"坏耶"},
        SourceType = SourceFlag.Group)]
    public static async ValueTask TestCommand1(GroupMessageEventArgs eventArgs)
    {
        eventArgs.IsContinueEventChain = false;
        await eventArgs.Reply("好耶");
    }
}
```

### 私聊指令

```csharp
using System.Threading.Tasks;
using Sora.Attributes.Command;
using Sora.Enumeration;
using Sora.EventArgs.SoraEvent;

namespace Sora_Test;

[CommandGroup]
public static class Commands
{
    [SoraCommand(
        CommandExpressions = new[] {"坏耶"},
        SourceType = SourceFlag.Private)]
    public static async ValueTask TestCommand1(PrivateMessageEventArgs eventArgs)
    {
        eventArgs.IsContinueEventChain = false;
        await eventArgs.Reply("好耶");
    }
}
```

## 动态注册指令

动态指令的注册由下面两种方法完成：

### ① 字符串表达式指令

和普通的特性指令没有较大的区别设置表达式后可以设置匹配模式

注册示例代码：

```csharp
service.Event.CommandManager.RegisterGroupDynamicCommand(
    new[] {"好耶"},
    async eventArgs =>
    {
        eventArgs.IsContinueEventChain = false;
        await eventArgs.Reply("坏耶");
    });
```

### ② 自定义匹配表达式指令

使用自定义的匹配方法来扩展指令的匹配方式

注册示例代码：

```csharp
service.Event.CommandManager.RegisterGroupDynamicCommand(
    eventArgs => eventArgs.IsSuperUser,
    async e =>
    {
        await e.Reply("哇是超管");
    });
```

## 指令的异常处理

在[ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) 中配置 [CommandExceptionHandle](../API/Sora.Interfaces/ISoraConfig/CommandExceptionHandle.md) 属性完成指令的异常处理

在配置完成异常处理后，指令出错时不会抛出错误，并调用配置好的异常处理方法

示例代码：

```csharp
//实例化Sora服务
ISoraService service = SoraServiceFactory.CreateService(new ServerConfig
{
    CommandExceptionHandle = CommandExceptionHandle,
});

//exception 为指令执行抛出的异常
//eventArgs 是本次消息的事件上下文
//log 为框架自动生成的错误日志
async void CommandExceptionHandle(Exception exception, BaseMessageEventArgs eventArgs, string log)
{
    string msg = $"死了啦都你害的啦\r\n{log}\r\n{exception.Message}";
    switch (eventArgs)
    {
        case GroupMessageEventArgs g:
            await g.Reply(msg);
            break;
        case PrivateMessageEventArgs p:
            await p.Reply(msg);
            break;
    }
}
```