# ISoraConfig interface

Sora 配置文件

```csharp
public interface ISoraConfig
```

## Members

| name | description |
| --- | --- |
| [AccessToken](ISoraConfig/AccessToken.md) { get; set; } | 鉴权Token |
| [ApiTimeOut](ISoraConfig/ApiTimeOut.md) { get; set; } | 客户端API调用超时设置(毫秒) |
| [AutoMarkMessageRead](ISoraConfig/AutoMarkMessageRead.md) { get; set; } | 在触发事件后自动向ob端标记消息已读 |
| [BlockUsers](ISoraConfig/BlockUsers.md) { get; set; } | 不处理来自数组中UID的消息(群聊/私聊) |
| [CommandExceptionHandle](ISoraConfig/CommandExceptionHandle.md) { get; set; } | 全局指令执行错误回调 |
| [EnableSocketMessage](ISoraConfig/EnableSocketMessage.md) { get; set; } | 是否显示websocket接收到的源消息 |
| [EnableSoraCommandManager](ISoraConfig/EnableSoraCommandManager.md) { get; set; } | 是否启用Sora自带的指令系统 |
| [HeartBeatTimeOut](ISoraConfig/HeartBeatTimeOut.md) { get; set; } | 心跳包超时设置(秒) |
| [Host](ISoraConfig/Host.md) { get; set; } | 服务器地址 |
| [Port](ISoraConfig/Port.md) { get; set; } | 服务器端口 |
| [SendCommandErrMsg](ISoraConfig/SendCommandErrMsg.md) { get; set; } | 在指令出错时向发送源发送报错消息 |
| [SuperUsers](ISoraConfig/SuperUsers.md) { get; set; } | 机器人管理员UID |
| [ThrowCommandException](ISoraConfig/ThrowCommandException.md) { get; set; } | 是否抛出指令执行时的错误 |
| [UniversalPath](ISoraConfig/UniversalPath.md) { get; set; } | Universal请求路径 |

## See Also

* namespace [Sora.Interfaces](../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
