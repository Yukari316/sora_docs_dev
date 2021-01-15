# 更新日志

## v0.4.18

优化框架底层通讯处理

## v0.4.17

API [GetMessages](../API/Sora.Entities.Base/SoraApi/GetMessages.md) 增加 [Group](../API/Sora.Entities/Group.md) 实例返回

修正部分XML注释

优化框架错误处理

## v0.4.16

增加API [DownloadFile](../API/Sora.Entities.Base/SoraApi/DownloadFile.md)

增加CQ码 [CQFlashImage](../API/Sora.Entities.CQCodes/CQCode/CQFlashImage.md) 用于发送闪照

增加 [LogLevel](../API/Sora.Enumeration/LogLevel.md) 枚举,并将控制台log等级控制改为此枚举

增加 [AsyncExtensions](../API/Sora.Extensions/AsyncExtensions.md) 类,用于扩展异步执行方法中的错误获取

[GetUserInfo](../API/Sora.Entities.Base/SoraApi/GetUserInfo.md) API支持用户QID的获取

删除CQ码 [CQImage](../API/Sora.Entities.CQCodes/CQCode/CQImage.md) 的闪照选项

修改事件参数 [GroupMemberChangeEventArgs](../API/Sora.EventArgs.SoraEvent/GroupMemberChangeEventArgs.md) 的SubType属性为公有属性

go-cqhttp版本:[go-cqhttp-v0.9.38](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.38)

## v0.4.15

修正不合理的权限分配

## v0.4.14

添加交流群log

## v0.4.13

增加消息类判断合并转发的方法 [IsForwardMessage](../API/Sora.Entities/Message/IsForwardMessage.md)

增加匿名用户禁言API [EnableGroupAnonymousMute](../API/Sora.Entities.Base/SoraApi/EnableGroupAnonymousMute.md)

增加匿名用户实例 [Anonymous](../API/Sora.Entities/Anonymous.md)

增加自定义消息节点实例 [CustomNode](../API/Sora.Entities.CQCodes.CQCodeModel/CustomNode.md)

修复消息事件参数的逻辑错误

重写合并转发的发送方式

## v0.4.12

修复框架在部分情况下无法收到API返回的问题

## v0.4.11

修改框架的连接请求路径检查

在此版本后将不再支持API/Event分路径的请求方式，只支持Universal的双向请求方式

## v0.4.10

修复禁言时长为60s时产生的参数越界错误

## v0.4.9

增加API [GetLoginUserId](../API/Sora.Entities.Base/SoraApi/GetLoginUserId.md)

移动命名空间 Sora.Enumeration.ApiEnum 到 [Sora.Enumeration.ApiType](../API/Sora.md#sora-enumeration-apitype-namespace)

## v0.4.8

控制台Log增加无Log输出的选项

优化连接管理器

优化消息处理方式 by [wuyu8512](https://github.com/wuyu8512)

## v0.4.7

修正私聊API中的错误逻辑 by [wuyu8512](https://github.com/wuyu8512)

## v0.4.6

重写API回调机制

修复某些离谱的情况下API超时的问题

## v0.4.5

优化多线程安全

优化服务器初始化逻辑

优化API逻辑

删除 ClientType 枚举类型

## v0.4.4

在 [ConnectionEventArgs](../API/Sora.EventArgs.WSSeverEvent/ConnectionEventArgs.md) 中加入selfid字段

## v0.4.3

修复了错误的注释

## v0.4.2

:::warning 注意
0.4.2版本对服务器事件回调进行了改动

请谨慎更新
:::

重写服务器底层事件回调

删除回调 OnPongAsync

新增回调 [OnHeartBeatTimeOut](../API/Sora.Server/ConnectionManager/OnHeartBeatTimeOut.md)

移动回调 [OnOpenConnectionAsync](../API/Sora.Server/ConnectionManager/OnOpenConnectionAsync.md) 和 [OnCloseConnectionAsync](../API/Sora.Server/ConnectionManager/OnCloseConnectionAsync.md)

## v0.4.1

修复在某些时候发送空消息导致崩溃的问题

## v0.4.0

:::danger 注意
0.4.0版本之前的版本心跳包管理有严重bug

请尽快更新框架版本至0.4.0
:::

重写WebSocket服务器管理逻辑，增加框架稳定性

删除API 关闭WebSocket连接API

删除API WebSocket服务器API

## v0.3.3

优化框架

## v0.3.2

修复对windows之外平台支持的文件IO错误

## v0.3.1

添加CQ码 [自定义音乐](../API/Sora.Entities.CQCodes/CQCode/CQCustomMusic.md)

## v0.3.0

升级.Net SDK版本至 [5.0.100](https://dotnet.microsoft.com/download/dotnet/5.0)

## v0.2.4

增加API [获取群文件系统信息](../API/Sora.Entities.Base/SoraApi/GetGroupFileSysInfo.md)

增加API [获取群根目录文件列表](../API/Sora.Entities.Base/SoraApi/GetGroupFilesByFolder.md)

增加API [获取群文件资源链接](../API/Sora.Entities.Base/SoraApi/GetGroupFileUrl.md)

修改框架部分Log

go-cqhttp版本:[go-cqhttp-v0.9.30](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.30)

## v0.2.3

新增API [获取群系统消息](../API/Sora.Entities.Base/SoraApi/GetGroupSystemMsg.md)

新增事件 [离线文件接收事件](../API/Sora.Server.ServerInterface/EventInterface/OnOfflineFileEvent.md)

go-cqhttp版本:[go-cqhttp-v0.9.29-fix2](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.29-fix2)

## v0.2.2

修改包logo

## v0.2.1

框架初版