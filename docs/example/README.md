---
title: 示例
---

:::tip 提示
实例对应框架版本和当前文档版本一致

并且会随文档更新同步更新
:::

> 这些实例代码整理自自用bot和更新日志
>
> 且不分先后

## 常用bot模板（反向ws）

```csharp
using System.Threading.Tasks;
using Sora;
using Sora.Interfaces;
using Sora.Net.Config;
using Sora.Util;
using YukariToolBox.LightLog;

//设置log等级
Log.LogConfiguration
   .EnableConsoleOutput()
   .SetLogLevel(LogLevel.Info);

//实例化Sora服务
ISoraService service = SoraServiceFactory.CreateService(new ServerConfig());

//启动服务并捕捉错误
await service.StartService()
             .RunCatch(e => Log.Error("Sora Service", Log.ErrorLogBuilder(e)));
await Task.Delay(-1);
```

## 启用Console的日志输出

```csharp
//设置log等级
Log.LogConfiguration
   .EnableConsoleOutput()
   .SetLogLevel(LogLevel.Info);
```

## 构建消息

```csharp
MessageBody message1 = "好耶";
MessageBody message2 = "坏耶" + 100000.At() + SoraSegment.Face(1);
```

## 原CQ与Sora消息段互转

### CQ码消息反序列化

```csharp
MessageBody m = CQCodeUtil.DeserializeMessage(@"[CQ:at,qq=123456]好耶");
SoraSegment s = CQCodeUtil.DeserializeCqCode(@"[CQ:at,qq=123456]");
```

### CQ码消息序列化

```csharp
MessageBody msg = new MessageBody();
string      m   = msg.SerializeMessage();
string      cq  = SoraSegment.At(123456).SerializeSegment();
```

## 注册指令(群)

```csharp
[SoraCommand(
    CommandExpressions = new[] {"1"},
    Description = "死了啦都你害的啦",
    SourceType = SourceFlag.Group)]
public static async ValueTask TestCommand1(GroupMessageEventArgs eventArgs)
{
    eventArgs.IsContinueEventChain = false;
    await eventArgs.Reply(SoraSegment.Record(@"好耶"));
}
```

## 动态向管理器注册指令(群)

```csharp
ISoraService service = SoraServiceFactory.CreateService(new ServerConfig());
service.Event.CommandManager.RegisterGroupDynamicCommand(
    new[] {"2"},
    async eventArgs =>
    {
        eventArgs.IsContinueEventChain = false;
        await eventArgs.Reply("shit");
    });
```