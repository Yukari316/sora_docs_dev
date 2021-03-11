# 更新日志

## v0.8.0

调整 命名空间 Sora.EventArgs.WSServerEvent → Sora.EventArgs.WebsocketEvent

## v0.7.1

正向Websocket客户端取消占用检查

优化 指令匹配方式 by  [XiaoHe321](https://github.com/xh321)

## v0.7.0

:::danger 注意
此版本修改了大量的命名空间，请谨慎更新
:::

支持正向Websocket连接方式

调整命名空间

## v0.6.6

增加 `API` [SendTemporaryMessage](../API/Sora.Entities.Base/SoraApi/SendTemporaryMessage.md)

[PrivateSenderInfo](../API/Sora.Entities.Info/PrivateSenderInfo.md) 增加  `GroupId` 属性（此属性在由群聊发起的临时会话消息中有效）

[PrivateMessageEventArgs](../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) 增加 `IsTemporaryMessage` 属性

优化 指令构造方式

## v0.6.5

优化框架API层

## v0.6.4

增加 简单的路由指令服务 [使用说明](../guide/command/README.md)

增加 路由指令服务的使能选项 by [Kengxxiao](https://github.com/Kengxxiao)

优化 转发消息的 [CustomNode](../API/Sora.Entities.CQCodes.CQCodeModel/CustomNode.md) 兼容字符串格式和自定义时间 by [Kengxxiao](https://github.com/Kengxxiao)

## v0.6.3

:::danger 注意
此版本的依赖更新了Log的实现和命名空间

如果使用到了原Log的方法，请谨慎更新
:::

更新 框架依赖[YukariToolBox](https://github.com/Yukari316/YukariToolBox)到`1.1.1`

## v0.6.2

优化 底层API请求管理

## v0.6.1

增加 自身消息接收事件 [OnSelfMessage](../API/Sora.Server.ServerInterface/EventInterface/OnSelfMessage.md)

增加 `API` [SendGroupNotice](../API/Sora.Entities.Base/SoraApi/SendGroupNotice.md)

优化 在[Group](../API/Sora.Entities/Group.md)和[User](../API/Sora.Entities/User.md)中加入一系列快捷方法

优化 消息解析速度

优化 框架Log信息

## v0.6.0

增加 必要的实例运算重载

增加 在上报格式为`string`时的错误提示 by [XiaoHe321](https://github.com/xh321)

修复 XML注释中的错误 by [XiaoHe321](https://github.com/xh321)

优化 `API`接口的调用方式

优化 `Test`示例中的代码

移动 `AsyncExtensions`至 [YukariToolBox](https://github.com/Yukari316/YukariToolBox)

升级`Workflow`的SDK版本至`5.0.103`

## v0.5.3.1

修复重载中的错误逻辑

## V0.5.3

增加大部分实例的运算重载

## v0.5.2.1

修复命名错误

## v0.5.2

增加API [UploadGroupFile](../API/Sora.Entities.Base/SoraApi/UploadGroupFile.md)

增加API [SetEssenceMessage](../API/Sora.Entities.Base/SoraApi/SetEssenceMessage.md)

增加API [DelEssenceMessage](../API/Sora.Entities.Base/SoraApi/DelEssenceMessage.md)

增加API [GetEssenceMsgList](../API/Sora.Entities.Base/SoraApi/GetEssenceMsgList.md)

增加API [CheckUrlSafely](../API/Sora.Entities.Base/SoraApi/CheckUrlSafely.md)

增加API [ReloadEventFilter](../API/Sora.Entities.Base/SoraApi/ReloadEventFilter.md)

增加Event [OnEssenceChange](../API/Sora.Server.ServerInterface/EventInterface/OnEssenceChange.md)

音乐分享类型删除 `虾米音乐` by [Kengxxiao](https://github.com/Kengxxiao)

go-cqhttp版本:[go-cqhttp-v0.9.40](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.40)

## v0.5.1.1

修复部分CQ码失效的问题

## v0.5.1

增加API [GetGroupMessageHistory](../API/Sora.Entities.Base/SoraApi/GetGroupMessageHistory.md)

增加API [GetOnlineClients](../API/Sora.Entities.Base/SoraApi/GetOnlineClients.md)

增加Event [OnClientStatusChangeEvent](../API/Sora.Server.ServerInterface/EventInterface/OnClientStatusChangeEvent.md)

go-cqhttp版本:[go-cqhttp-v0.9.39](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.39)

## v0.5.0

:::danger 注意
此版本后删除了Tool命名空间
:::

删除Tool命名空间，移动工具集到单独的合集中[YukariToolBox](https://github.com/Yukari316/YukariToolBox)

API [GetMessages](../API/Sora.Entities.Base/SoraApi/GetMessages.md) 增加消息列处理

## v0.4.19

稳定性更新

优化服务器连接管理逻辑

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