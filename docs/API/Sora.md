# Sora assembly

## Sora.Entities namespace

| public type | description |
| --- | --- |
| class [Anonymous](Sora.Entities/Anonymous.md) | 匿名用户类 |
| class [Group](Sora.Entities/Group.md) | 群组类 |
| class [Message](Sora.Entities/Message.md) | 消息类 |
| struct [TextDetection](Sora.Entities/TextDetection.md) | OCR识别结果 |
| class [User](Sora.Entities/User.md) | 用户类 |
| class [Vector2](Sora.Entities/Vector2.md) | 二维向量 |

## Sora.Entities.Base namespace

| public type | description |
| --- | --- |
| abstract class [BaseModel](Sora.Entities.Base/BaseModel.md) | 数据模型基类 |
| class [SoraApi](Sora.Entities.Base/SoraApi.md) | Sora API类 |

## Sora.Entities.CQCodes namespace

| public type | description |
| --- | --- |
| class [CQCode](Sora.Entities.CQCodes/CQCode.md) | CQ码类 |

## Sora.Entities.CQCodes.CQCodeModel namespace

| public type | description |
| --- | --- |
| struct [At](Sora.Entities.CQCodes.CQCodeModel/At.md) | At某人 |
| struct [CardImage](Sora.Entities.CQCodes.CQCodeModel/CardImage.md) | 装逼大图 仅支持Go |
| struct [Code](Sora.Entities.CQCodes.CQCodeModel/Code.md) | Xml与Json集合 |
| struct [CustomMusic](Sora.Entities.CQCodes.CQCodeModel/CustomMusic.md) | 自定义音乐分享 |
| class [CustomNode](Sora.Entities.CQCodes.CQCodeModel/CustomNode.md) | 自定义转发节点 |
| struct [Face](Sora.Entities.CQCodes.CQCodeModel/Face.md) | QQ 表情 |
| struct [Forward](Sora.Entities.CQCodes.CQCodeModel/Forward.md) | 合并转发/合并转发节点 |
| struct [Gift](Sora.Entities.CQCodes.CQCodeModel/Gift.md) | 礼物 仅支持Go |
| struct [Image](Sora.Entities.CQCodes.CQCodeModel/Image.md) | 图片 |
| struct [Music](Sora.Entities.CQCodes.CQCodeModel/Music.md) | 音乐分享 仅发送 |
| struct [Node](Sora.Entities.CQCodes.CQCodeModel/Node.md) | 自定义合并转发节点 |
| class [NodeArray](Sora.Entities.CQCodes.CQCodeModel/NodeArray.md) | 转发消息的列表 |
| struct [Poke](Sora.Entities.CQCodes.CQCodeModel/Poke.md) | 群成员戳一戳 |
| struct [Record](Sora.Entities.CQCodes.CQCodeModel/Record.md) | 语音消息 |
| struct [Redbag](Sora.Entities.CQCodes.CQCodeModel/Redbag.md) | 接收红包 仅支持Go |
| struct [Reply](Sora.Entities.CQCodes.CQCodeModel/Reply.md) | 回复 |
| struct [Share](Sora.Entities.CQCodes.CQCodeModel/Share.md) | 链接分享 |
| struct [Text](Sora.Entities.CQCodes.CQCodeModel/Text.md) | 纯文本 |
| struct [Video](Sora.Entities.CQCodes.CQCodeModel/Video.md) | 短视频 |

## Sora.Entities.Info namespace

| public type | description |
| --- | --- |
| struct [ClientInfo](Sora.Entities.Info/ClientInfo.md) | 设备信息 |
| struct [EssenceInfo](Sora.Entities.Info/EssenceInfo.md) | 精华消息信息 |
| struct [FriendInfo](Sora.Entities.Info/FriendInfo.md) | 好友信息 |
| struct [GroupFileInfo](Sora.Entities.Info/GroupFileInfo.md) | 群文件信息 |
| struct [GroupFileSysInfo](Sora.Entities.Info/GroupFileSysInfo.md) | 群文件系统信息 |
| struct [GroupFolderInfo](Sora.Entities.Info/GroupFolderInfo.md) | 群文件夹信息 |
| struct [GroupInfo](Sora.Entities.Info/GroupInfo.md) | 群信息 |
| struct [GroupMemberInfo](Sora.Entities.Info/GroupMemberInfo.md) | 群成员信息 |
| class [GroupRequestInfo](Sora.Entities.Info/GroupRequestInfo.md) | 群组请求信息 |
| struct [GroupSenderInfo](Sora.Entities.Info/GroupSenderInfo.md) | 群组消息发送者 |
| class [OfflineFileInfo](Sora.Entities.Info/OfflineFileInfo.md) | 离线文件信息 |
| struct [PrivateSenderInfo](Sora.Entities.Info/PrivateSenderInfo.md) | 私聊消息发送者 |
| struct [UploadFileInfo](Sora.Entities.Info/UploadFileInfo.md) | 上传文件的信息 |
| struct [UserInfo](Sora.Entities.Info/UserInfo.md) | 用户信息 |

## Sora.Enumeration namespace

| public type | description |
| --- | --- |
| enum [CQFunction](Sora.Enumeration/CQFunction.md) | 消息段类型 |

## Sora.Enumeration.ApiType namespace

| public type | description |
| --- | --- |
| enum [APIStatusType](Sora.Enumeration.ApiType/APIStatusType.md) | API返回值 |
| enum [SecurityLevelType](Sora.Enumeration.ApiType/SecurityLevelType.md) | 链接安全性 |

## Sora.Enumeration.EventParamsType namespace

| public type | description |
| --- | --- |
| enum [AdminChangeType](Sora.Enumeration.EventParamsType/AdminChangeType.md) | 管理员变动类型 |
| enum [EssenceChangeType](Sora.Enumeration.EventParamsType/EssenceChangeType.md) | 精华信息变动类型 |
| enum [GroupRequestType](Sora.Enumeration.EventParamsType/GroupRequestType.md) | 群申请类型 |
| enum [HonorType](Sora.Enumeration.EventParamsType/HonorType.md) | 荣誉类型 |
| enum [MemberChangeType](Sora.Enumeration.EventParamsType/MemberChangeType.md) | 群成员变动类型 |
| enum [MemberRoleType](Sora.Enumeration.EventParamsType/MemberRoleType.md) | 成员权限等级 |
| enum [MessageType](Sora.Enumeration.EventParamsType/MessageType.md) | 消息类型 |
| enum [MusicShareType](Sora.Enumeration.EventParamsType/MusicShareType.md) | 音乐分享类型 |
| enum [MuteActionType](Sora.Enumeration.EventParamsType/MuteActionType.md) | 禁言操作类型 |
| enum [RequestType](Sora.Enumeration.EventParamsType/RequestType.md) | 请求类型 |

## Sora.EventArgs.SoraEvent namespace

| public type | description |
| --- | --- |
| class [AddGroupRequestEventArgs](Sora.EventArgs.SoraEvent/AddGroupRequestEventArgs.md) | 入群申请 |
| abstract class [BaseSoraEventArgs](Sora.EventArgs.SoraEvent/BaseSoraEventArgs.md) | 框架事件基类 |
| class [ClientStatusChangeEventArgs](Sora.EventArgs.SoraEvent/ClientStatusChangeEventArgs.md) | 其他客户端在线状态变更事件参数 |
| class [ConnectEventArgs](Sora.EventArgs.SoraEvent/ConnectEventArgs.md) | 客户端连接事件参数 |
| class [EssenceChangeEventArgs](Sora.EventArgs.SoraEvent/EssenceChangeEventArgs.md) | 精华消息变动事件参数 |
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
| class [OfflineFileEventArgs](Sora.EventArgs.SoraEvent/OfflineFileEventArgs.md) | 接收到离线文件事件参数 |
| class [PrivateMessageEventArgs](Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) | 私聊消息事件参数 |

## Sora.EventArgs.WSSeverEvent namespace

| public type | description |
| --- | --- |
| class [ConnectionEventArgs](Sora.EventArgs.WSSeverEvent/ConnectionEventArgs.md) | 服务器连接事件 |

## Sora.Exceptions namespace

| public type | description |
| --- | --- |
| class [SoraServerIsRuningException](Sora.Exceptions/SoraServerIsRuningException.md) | 服务器已经在运行错误 |

## Sora.Extensions namespace

| public type | description |
| --- | --- |
| static class [AsyncExtensions](Sora.Extensions/AsyncExtensions.md) | 用于异步执行的简易化错误处理 |

## Sora.Server namespace

| public type | description |
| --- | --- |
| class [ConnectionManager](Sora.Server/ConnectionManager.md) | 服务器连接管理器 管理服务器链接和心跳包 |
| class [ServerConfig](Sora.Server/ServerConfig.md) | 服务器配置类 |
| class [SoraWSServer](Sora.Server/SoraWSServer.md) | Sora服务器实例 |

## Sora.Server.ServerInterface namespace

| public type | description |
| --- | --- |
| class [EventInterface](Sora.Server.ServerInterface/EventInterface.md) | Onebot事件接口 判断和分发基类事件 |

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
