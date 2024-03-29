# MessageContext class

消息类

```csharp
public sealed class MessageContext : BaseModel
```

## Public Members

| name | description |
| --- | --- |
| [Font](MessageContext/Font.md) { get; } | 消息字体id |
| [Item](MessageContext/Item.md) { get; } | 索引器 |
| [MessageBody](MessageContext/MessageBody.md) { get; } | 消息段列表 |
| [MessageId](MessageContext/MessageId.md) { get; } | 消息ID |
| [MessageSequence](MessageContext/MessageSequence.md) { get; } | 消息序号 |
| [RawText](MessageContext/RawText.md) { get; } | Gocq提供的纯文本信息 |
| [Time](MessageContext/Time.md) { get; } | 消息时间戳 |
| override [Equals](MessageContext/Equals.md)(…) | 比较重载 |
| [GetAllAtList](MessageContext/GetAllAtList.md)() | 获取所有At的UID Notice:at全体不会被转换 |
| [GetAllImage](MessageContext/GetAllImage.md)() | 获取所有图片信息 |
| [GetForwardMsgId](MessageContext/GetForwardMsgId.md)() | 获取合并转发的ID |
| override [GetHashCode](MessageContext/GetHashCode.md)() | GetHashCode |
| [GetRecordUrl](MessageContext/GetRecordUrl.md)() | 获取语音URL 仅在消息为语音时有效 |
| [GetText](MessageContext/GetText.md)() | 截取消息中的文字部分 |
| [IsCodeCard](MessageContext/IsCodeCard.md)() | QQ小程序判断（Xml与Json类型消息） |
| [IsForwardMessage](MessageContext/IsForwardMessage.md)() | 是否是转发消息 |
| [IsMultiImageMessage](MessageContext/IsMultiImageMessage.md)() | 是否为纯图片消息 |
| [IsSingleImageMessage](MessageContext/IsSingleImageMessage.md)() | 是否为单图片消息 |
| [MarkMessageRead](MessageContext/MarkMessageRead.md)() | 标记此消息已读 |
| [MessageEquals](MessageContext/MessageEquals.md)(…) | 判定消息段相等 (2 methods) |
| [RecallMessage](MessageContext/RecallMessage.md)() | 撤回本条消息 |
| override [ToString](MessageContext/ToString.md)() | 转纯文本信息 |
| [operator ==](MessageContext/op_Equality.md) | 等于重载 |
| [operator !=](MessageContext/op_Inequality.md) | 不等于重载 |

## See Also

* class [BaseModel](../Sora.Entities.Base/BaseModel.md)
* namespace [Sora.Entities](../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
