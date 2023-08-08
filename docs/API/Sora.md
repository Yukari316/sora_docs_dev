# Sora assembly

## Sora namespace

| public type | description |
| --- | --- |
| static class [SoraServiceFactory](./Sora/SoraServiceFactory.md) | Sora 实例工厂 |
| static class [VersionCode](./Sora/VersionCode.md) | 版本代号 |

## Sora.Attributes namespace

| public type | description |
| --- | --- |
| class [NeedReview](./Sora.Attributes/NeedReview.md) | 需要审查特性类 |
| class [Reviewed](./Sora.Attributes/Reviewed.md) | 代码审核特性类 |

## Sora.Attributes.Command namespace

| public type | description |
| --- | --- |
| class [CommandSeries](./Sora.Attributes.Command/CommandSeries.md) | 指令组 |
| class [SoraCommand](./Sora.Attributes.Command/SoraCommand.md) | 指令 |

## Sora.Command namespace

| public type | description |
| --- | --- |
| class [CommandManager](./Sora.Command/CommandManager.md) | 特性指令管理器 |

## Sora.Entities namespace

| public type | description |
| --- | --- |
| class [Anonymous](./Sora.Entities/Anonymous.md) | 匿名用户类 |
| struct [ApiStatus](./Sora.Entities/ApiStatus.md) | API执行状态 |
| class [Group](./Sora.Entities/Group.md) | 群组类 |
| class [MessageBody](./Sora.Entities/MessageBody.md) | 消息段 |
| class [MessageContext](./Sora.Entities/MessageContext.md) | 消息类 |
| struct [TextDetection](./Sora.Entities/TextDetection.md) | OCR识别结果 |
| class [User](./Sora.Entities/User.md) | 用户类 |
| struct [Vector2](./Sora.Entities/Vector2.md) | 二维向量 |

## Sora.Entities.Base namespace

| public type | description |
| --- | --- |
| abstract class [BaseModel](./Sora.Entities.Base/BaseModel.md) | 数据模型基类 |
| class [SoraApi](./Sora.Entities.Base/SoraApi.md) | Sora API类 |

## Sora.Entities.Info namespace

| public type | description |
| --- | --- |
| struct [ClientInfo](./Sora.Entities.Info/ClientInfo.md) | 设备信息 |
| struct [EssenceInfo](./Sora.Entities.Info/EssenceInfo.md) | 精华消息信息 |
| record [FriendInfo](./Sora.Entities.Info/FriendInfo.md) | 好友信息 |
| struct [GroupFileInfo](./Sora.Entities.Info/GroupFileInfo.md) | 群文件信息 |
| struct [GroupFileSysInfo](./Sora.Entities.Info/GroupFileSysInfo.md) | 群文件系统信息 |
| struct [GroupFolderInfo](./Sora.Entities.Info/GroupFolderInfo.md) | 群文件夹信息 |
| struct [GroupInfo](./Sora.Entities.Info/GroupInfo.md) | 群信息 |
| record [GroupMemberInfo](./Sora.Entities.Info/GroupMemberInfo.md) | 群成员信息 |
| struct [GroupNoticeInfo](./Sora.Entities.Info/GroupNoticeInfo.md) | 群公告 |
| struct [GroupRequestInfo](./Sora.Entities.Info/GroupRequestInfo.md) | 群组请求信息 |
| struct [GroupSenderInfo](./Sora.Entities.Info/GroupSenderInfo.md) | 群组消息发送者 |
| struct [ModelInfo](./Sora.Entities.Info/ModelInfo.md) | 型号信息 |
| struct [NoticeImage](./Sora.Entities.Info/NoticeImage.md) | 公告图片 |
| struct [NoticeMessage](./Sora.Entities.Info/NoticeMessage.md) | 公告消息 |
| struct [OfflineFileInfo](./Sora.Entities.Info/OfflineFileInfo.md) | 离线文件信息 |
| struct [PrivateSenderInfo](./Sora.Entities.Info/PrivateSenderInfo.md) | 私聊消息发送者 |
| struct [ProfileDetail](./Sora.Entities.Info/ProfileDetail.md) | 个人资料 |
| struct [QidianAccountInfo](./Sora.Entities.Info/QidianAccountInfo.md) | 企点账号信息 |
| struct [UnidirectionalFriendInfo](./Sora.Entities.Info/UnidirectionalFriendInfo.md) | 单向好友信息 |
| struct [UploadFileInfo](./Sora.Entities.Info/UploadFileInfo.md) | 上传文件的信息 |
| struct [UserInfo](./Sora.Entities.Info/UserInfo.md) | 用户信息 |

## Sora.Entities.Segment namespace

| public type | description |
| --- | --- |
| static class [SegmentHelper](./Sora.Entities.Segment/SegmentHelper.md) | 消息段扩展 |
| class [SoraSegment](./Sora.Entities.Segment/SoraSegment.md) | 消息段结构体 |

## Sora.Entities.Segment.DataModel namespace

| public type | description |
| --- | --- |
| record [AtSegment](./Sora.Entities.Segment.DataModel/AtSegment.md) | At某人 |
| record [BaseSegment](./Sora.Entities.Segment.DataModel/BaseSegment.md) | 空数据消息段 |
| record [CardImageSegment](./Sora.Entities.Segment.DataModel/CardImageSegment.md) | 装逼大图 仅支持GoCQ |
| record [CodeSegment](./Sora.Entities.Segment.DataModel/CodeSegment.md) | Xml与Json集合 |
| record [CustomMusicSegment](./Sora.Entities.Segment.DataModel/CustomMusicSegment.md) | 自定义音乐分享 |
| record [CustomNode](./Sora.Entities.Segment.DataModel/CustomNode.md) | 自定义转发节点 |
| record [CustomReplySegment](./Sora.Entities.Segment.DataModel/CustomReplySegment.md) | 自定义回复 |
| record [FaceSegment](./Sora.Entities.Segment.DataModel/FaceSegment.md) | QQ 表情 |
| record [ForwardSegment](./Sora.Entities.Segment.DataModel/ForwardSegment.md) | 合并转发/合并转发节点 |
| record [ImageSegment](./Sora.Entities.Segment.DataModel/ImageSegment.md) | 图片 |
| record [MusicSegment](./Sora.Entities.Segment.DataModel/MusicSegment.md) | 音乐分享 仅发送 |
| record [Node](./Sora.Entities.Segment.DataModel/Node.md) | 自定义合并转发节点 |
| record [PokeSegment](./Sora.Entities.Segment.DataModel/PokeSegment.md) | 群成员戳一戳 |
| record [RecordSegment](./Sora.Entities.Segment.DataModel/RecordSegment.md) | 语音消息 |
| record [RedbagSegment](./Sora.Entities.Segment.DataModel/RedbagSegment.md) | 接收红包 仅支持GoCQ |
| record [ReplySegment](./Sora.Entities.Segment.DataModel/ReplySegment.md) | 回复 |
| record [ShareSegment](./Sora.Entities.Segment.DataModel/ShareSegment.md) | 链接分享 |
| record [TextSegment](./Sora.Entities.Segment.DataModel/TextSegment.md) | 纯文本 |
| record [TtsSegment](./Sora.Entities.Segment.DataModel/TtsSegment.md) | 语音转文字（TTS） |
| record [UnknownSegment](./Sora.Entities.Segment.DataModel/UnknownSegment.md) | 未知消息段 |
| record [VideoSegment](./Sora.Entities.Segment.DataModel/VideoSegment.md) | 短视频 |

## Sora.Enumeration namespace

| public type | description |
| --- | --- |
| enum [MatchType](./Sora.Enumeration/MatchType.md) | 匹配类型 |
| enum [MessageSourceMatchFlag](./Sora.Enumeration/MessageSourceMatchFlag.md) | 指令匹配的消息来源 |
| enum [SegmentType](./Sora.Enumeration/SegmentType.md) | 消息段类型 |
| enum [Sex](./Sora.Enumeration/Sex.md) | 性别 |
| enum [SourceFlag](./Sora.Enumeration/SourceFlag.md) | 事件来源类型 |

## Sora.Enumeration.ApiType namespace

| public type | description |
| --- | --- |
| enum [ApiStatusType](./Sora.Enumeration.ApiType/ApiStatusType.md) | API返回值 |
| enum [SecurityLevelType](./Sora.Enumeration.ApiType/SecurityLevelType.md) | 链接安全性 |

## Sora.Enumeration.EventParamsType namespace

| public type | description |
| --- | --- |
| enum [AdminChangeType](./Sora.Enumeration.EventParamsType/AdminChangeType.md) | 管理员变动类型 |
| enum [EssenceChangeType](./Sora.Enumeration.EventParamsType/EssenceChangeType.md) | 精华信息变动类型 |
| enum [GroupRequestType](./Sora.Enumeration.EventParamsType/GroupRequestType.md) | 群申请类型 |
| enum [HonorType](./Sora.Enumeration.EventParamsType/HonorType.md) | 荣誉类型 |
| enum [MemberChangeType](./Sora.Enumeration.EventParamsType/MemberChangeType.md) | 群成员变动类型 |
| enum [MemberRoleType](./Sora.Enumeration.EventParamsType/MemberRoleType.md) | 成员权限等级 |
| enum [MessageType](./Sora.Enumeration.EventParamsType/MessageType.md) | 消息类型 |
| enum [MusicShareType](./Sora.Enumeration.EventParamsType/MusicShareType.md) | 音乐分享类型 |
| enum [MuteActionType](./Sora.Enumeration.EventParamsType/MuteActionType.md) | 禁言操作类型 |
| enum [RequestType](./Sora.Enumeration.EventParamsType/RequestType.md) | 请求类型 |

## Sora.EventArgs.SoraEvent namespace

| public type | description |
| --- | --- |
| class [AddGroupRequestEventArgs](./Sora.EventArgs.SoraEvent/AddGroupRequestEventArgs.md) | 入群申请 |
| abstract class [BaseMessageEventArgs](./Sora.EventArgs.SoraEvent/BaseMessageEventArgs.md) | 用于存储消息和发送者的基类 |
| abstract class [BaseSoraEventArgs](./Sora.EventArgs.SoraEvent/BaseSoraEventArgs.md) | 框架事件基类 |
| class [ClientStatusChangeEventArgs](./Sora.EventArgs.SoraEvent/ClientStatusChangeEventArgs.md) | 其他客户端在线状态变更事件参数 |
| class [ConnectEventArgs](./Sora.EventArgs.SoraEvent/ConnectEventArgs.md) | 客户端连接事件参数 |
| class [EssenceChangeEventArgs](./Sora.EventArgs.SoraEvent/EssenceChangeEventArgs.md) | 精华消息变动事件参数 |
| class [FileUploadEventArgs](./Sora.EventArgs.SoraEvent/FileUploadEventArgs.md) | 群文件上传事件参数 |
| class [FriendAddEventArgs](./Sora.EventArgs.SoraEvent/FriendAddEventArgs.md) | 好友添加事件参数 |
| class [FriendRecallEventArgs](./Sora.EventArgs.SoraEvent/FriendRecallEventArgs.md) | 好友消息撤回事件 |
| class [FriendRequestEventArgs](./Sora.EventArgs.SoraEvent/FriendRequestEventArgs.md) | 好友请求事件参数 |
| class [GroupAdminChangeEventArgs](./Sora.EventArgs.SoraEvent/GroupAdminChangeEventArgs.md) | 管理员变动事件参数 |
| class [GroupCardUpdateEventArgs](./Sora.EventArgs.SoraEvent/GroupCardUpdateEventArgs.md) | 成员名片变更事件参数 |
| class [GroupMemberChangeEventArgs](./Sora.EventArgs.SoraEvent/GroupMemberChangeEventArgs.md) | 群成员数量变更事件参数 |
| class [GroupMessageEventArgs](./Sora.EventArgs.SoraEvent/GroupMessageEventArgs.md) | 群消息事件参数 |
| class [GroupMuteEventArgs](./Sora.EventArgs.SoraEvent/GroupMuteEventArgs.md) | 群禁言事件参数 |
| class [GroupPokeEventArgs](./Sora.EventArgs.SoraEvent/GroupPokeEventArgs.md) | 群戳一戳事件参数 |
| class [GroupRecallEventArgs](./Sora.EventArgs.SoraEvent/GroupRecallEventArgs.md) | 群消息撤回事件参数 |
| class [HonorEventArgs](./Sora.EventArgs.SoraEvent/HonorEventArgs.md) | 授予荣誉事件参数 |
| class [LuckyKingEventArgs](./Sora.EventArgs.SoraEvent/LuckyKingEventArgs.md) | 红包运气王事件参数 |
| class [OfflineFileEventArgs](./Sora.EventArgs.SoraEvent/OfflineFileEventArgs.md) | 接收到离线文件事件参数 |
| class [PrivateMessageEventArgs](./Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) | 私聊消息事件参数 |
| class [TitleUpdateEventArgs](./Sora.EventArgs.SoraEvent/TitleUpdateEventArgs.md) | 群成员头衔更新事件 |

## Sora.EventArgs.WebsocketEvent namespace

| public type | description |
| --- | --- |
| class [ConnectionEventArgs](./Sora.EventArgs.WebsocketEvent/ConnectionEventArgs.md) | 服务器连接事件 |

## Sora.Exceptions namespace

| public type | description |
| --- | --- |
| class [WebSocketClientException](./Sora.Exceptions/WebSocketClientException.md) | WebSocket客户端错误 |

## Sora.Interfaces namespace

| public type | description |
| --- | --- |
| interface [ISoraConfig](./Sora.Interfaces/ISoraConfig.md) | Sora 配置文件 |
| interface [ISoraService](./Sora.Interfaces/ISoraService.md) | Sora 连接服务 |

## Sora.Net namespace

| public type | description |
| --- | --- |
| class [ConnectionManager](./Sora.Net/ConnectionManager.md) | 服务器连接管理器 管理服务器链接和心跳包 |
| class [SoraWebsocketClient](./Sora.Net/SoraWebsocketClient.md) | Sora正向WS链接客户端 |
| class [SoraWebsocketServer](./Sora.Net/SoraWebsocketServer.md) | Sora服务器实例 |

## Sora.Net.Config namespace

| public type | description |
| --- | --- |
| class [ClientConfig](./Sora.Net.Config/ClientConfig.md) | 客户端配置类 |
| class [ServerConfig](./Sora.Net.Config/ServerConfig.md) | 服务器配置类 |

## Sora.OnebotAdapter namespace

| public type | description |
| --- | --- |
| class [EventAdapter](./Sora.OnebotAdapter/EventAdapter.md) | Onebot事件接口 判断和分发基类事件 |

## Sora.Serializer namespace

| public type | description |
| --- | --- |
| static class [CqCodeSerializer](./Sora.Serializer/CqCodeSerializer.md) | 消息段CQ码序列化 该方法由ExerciseBook(https://github.com/ExerciseBook)提供 |
| static class [JsonSerializer](./Sora.Serializer/JsonSerializer.md) | 消息段Json序列化 |
| static class [ProtoSerializer](./Sora.Serializer/ProtoSerializer.md) | 消息段ProtoBuf序列化 |

## Sora.Util namespace

| public type | description |
| --- | --- |
| static class [Extensions](./Sora.Util/Extensions.md) | 扩展方法 |
| static class [Helper](./Sora.Util/Helper.md) | 通用帮助类 |
| static class [TimeConvert](./Sora.Util/TimeConvert.md) | DateTime和时间戳的转换 |

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
