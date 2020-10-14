# Sora

## Sora

| public type | description |
| --- | --- |
| class [ServerConfig](Sora/ServerConfig.md) | 服务器配置类 |
| class [SoraWSServer](Sora/SoraWSServer.md) | Sora服务器实例 |

## Sora.CQCodes

| public type | description |
| --- | --- |
| class [CQCode](Sora.CQCodes/CQCode.md) | CQ码类 |

## Sora.CQCodes.CQCodeModel

| public type | description |
| --- | --- |
| struct [At](Sora.CQCodes.CQCodeModel/At.md) | At某人 |
| struct [CardImage](Sora.CQCodes.CQCodeModel/CardImage.md) | 装逼大图 仅支持Go |
| struct [Code](Sora.CQCodes.CQCodeModel/Code.md) | Xml与Json集合 |
| struct [Face](Sora.CQCodes.CQCodeModel/Face.md) | QQ 表情 |
| struct [Forward](Sora.CQCodes.CQCodeModel/Forward.md) | 合并转发/合并转发节点 |
| struct [Gift](Sora.CQCodes.CQCodeModel/Gift.md) | 礼物 仅支持Go |
| struct [Image](Sora.CQCodes.CQCodeModel/Image.md) | 图片 |
| struct [Music](Sora.CQCodes.CQCodeModel/Music.md) | 音乐分享 仅发送 |
| struct [Node](Sora.CQCodes.CQCodeModel/Node.md) | 自定义合并转发节点 |
| class [NodeArray](Sora.CQCodes.CQCodeModel/NodeArray.md) | 转发消息的列表 |
| struct [Poke](Sora.CQCodes.CQCodeModel/Poke.md) | 群成员戳一戳 |
| struct [Record](Sora.CQCodes.CQCodeModel/Record.md) | 语音消息 |
| struct [Redbag](Sora.CQCodes.CQCodeModel/Redbag.md) | 接收红包 仅支持Go |
| struct [Reply](Sora.CQCodes.CQCodeModel/Reply.md) | 回复 |
| struct [Share](Sora.CQCodes.CQCodeModel/Share.md) | 链接分享 |
| struct [Text](Sora.CQCodes.CQCodeModel/Text.md) | 纯文本 |

## Sora.Enumeration

| public type | description |
| --- | --- |
| enum [CQFunction](Sora.Enumeration/CQFunction.md) | 消息段类型 |
| enum [MemberRoleType](Sora.Enumeration/MemberRoleType.md) | 成员权限等级 |
| enum [MessageType](Sora.Enumeration/MessageType.md) | 消息类型 |
| enum [MusicShareType](Sora.Enumeration/MusicShareType.md) | 音乐分享类型 |

## Sora.Enumeration.ApiEnum

| public type | description |
| --- | --- |
| enum [AdminChangeType](Sora.Enumeration.ApiEnum/AdminChangeType.md) | 管理员变动类型 |
| enum [APIStatusType](Sora.Enumeration.ApiEnum/APIStatusType.md) | API返回值 |
| enum [ClientType](Sora.Enumeration.ApiEnum/ClientType.md) | 客户端类型 |
| enum [GroupRequestType](Sora.Enumeration.ApiEnum/GroupRequestType.md) | 群申请类型 |
| enum [HonorType](Sora.Enumeration.ApiEnum/HonorType.md) | 荣誉类型 |
| enum [MemberChangeType](Sora.Enumeration.ApiEnum/MemberChangeType.md) | 群成员变动类型 |
| enum [MuteActionType](Sora.Enumeration.ApiEnum/MuteActionType.md) | 禁言操作类型 |
| enum [RequestType](Sora.Enumeration.ApiEnum/RequestType.md) | 请求类型 |

## Sora.EventArgs.SoraEvent

| public type | description |
| --- | --- |
| class [AddGroupRequestEventArgs](Sora.EventArgs.SoraEvent/AddGroupRequestEventArgs.md) | 入群申请 |
| abstract class [BaseSoraEventArgs](Sora.EventArgs.SoraEvent/BaseSoraEventArgs.md) | 框架事件基类 |
| class [ConnectEventArgs](Sora.EventArgs.SoraEvent/ConnectEventArgs.md) | 客户端连接事件参数 |
| class [FileUploadEventArgs](Sora.EventArgs.SoraEvent/FileUploadEventArgs.md) | 群文件上传事件参数 |
| class [FriendAddEventArgs](Sora.EventArgs.SoraEvent/FriendAddEventArgs.md) | 好友添加事件参数 |
| class [FriendRecallEventArgs](Sora.EventArgs.SoraEvent/FriendRecallEventArgs.md) | 好友消息撤回事件 |
| class [FriendRequestEventArgs](Sora.EventArgs.SoraEvent/FriendRequestEventArgs.md) | 好友请求事件参数 |
| class [GroupAdminChangeEventArgs](Sora.EventArgs.SoraEvent/GroupAdminChangeEventArgs.md) | 管理员变动事件参数 |
| class [GroupCardUpdateEventArgs](Sora.EventArgs.SoraEvent/GroupCardUpdateEventArgs.md) | 成员名片变更事件参数 |
| class [GroupMemberChangeEventArgs](Sora.EventArgs.SoraEvent/GroupMemberChangeEventArgs.md) | 群成员数量变更事件参数 |
| class [GroupMessageEventArgs](Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md) | 群消息事件参数 |
| class [GroupMuteEventArgs](Sora.EventArgs.SoraEvent/GroupMuteEventArgs.md) | 群禁言事件参数 |
| class [GroupPokeEventArgs](Sora.EventArgs.SoraEvent/GroupPokeEventArgs.md) | 群戳一戳事件参数 |
| class [GroupRecallEventArgs](Sora.EventArgs.SoraEvent/GroupRecallEventArgs.md) | 群消息撤回事件参数 |
| class [HonorEventArgs](Sora.EventArgs.SoraEvent/HonorEventArgs.md) | 授予荣誉事件参数 |
| class [LuckyKingEventArgs](Sora.EventArgs.SoraEvent/LuckyKingEventArgs.md) | 红包运气王事件参数 |
| class [PrivateMessageEventArgs](Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) | 私聊消息事件参数 |

## Sora.EventArgs.WSSeverEvent

| public type | description |
| --- | --- |
| abstract class [BaseServerEventArgs](Sora.EventArgs.WSSeverEvent/BaseServerEventArgs.md) | 服务器事件基类 |
| class [ConnectionEventArgs](Sora.EventArgs.WSSeverEvent/ConnectionEventArgs.md) | 服务器连接事件 |
| class [PongEventArgs](Sora.EventArgs.WSSeverEvent/PongEventArgs.md) | 服务器心跳包事件 |

## Sora.Module

| public type | description |
| --- | --- |
| class [Group](Sora.Module/Group.md) | 群组实例 |
| class [Message](Sora.Module/Message.md) | 消息实例 |
| class [User](Sora.Module/User.md) | 用户类 |

## Sora.Module.Base

| public type | description |
| --- | --- |
| abstract class [BaseModel](Sora.Module.Base/BaseModel.md) | 数据模型基类 |
| class [SoraApi](Sora.Module.Base/SoraApi.md) | Sora API执行实例 |

## Sora.Module.Info

| public type | description |
| --- | --- |
| struct [FriendInfo](Sora.Module.Info/FriendInfo.md) | 好友信息 |
| struct [GroupInfo](Sora.Module.Info/GroupInfo.md) | 群信息 |
| struct [GroupMemberInfo](Sora.Module.Info/GroupMemberInfo.md) | 群成员信息 |
| struct [GroupSenderInfo](Sora.Module.Info/GroupSenderInfo.md) | 群组消息发送者 |
| struct [PrivateSenderInfo](Sora.Module.Info/PrivateSenderInfo.md) | 私聊消息发送者 |
| struct [UploadFileInfo](Sora.Module.Info/UploadFileInfo.md) | 上传文件的信息 |
| struct [UserInfo](Sora.Module.Info/UserInfo.md) | 用户信息 |

## Sora.ServerInterface

| public type | description |
| --- | --- |
| class [EventInterface](Sora.ServerInterface/EventInterface.md) | Onebot事件接口 判断和分发基类事件 |

## Sora.Tool

| public type | description |
| --- | --- |
| static class [ConsoleLog](Sora.Tool/ConsoleLog.md) | 控制台格式化Log类 |
| static class [Utils](Sora.Tool/Utils.md) | 工具类 |

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
