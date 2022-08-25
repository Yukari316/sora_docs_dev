# SoraApi class

Sora API类

```csharp
public sealed class SoraApi
```

## Public Members

| name | description |
| --- | --- |
| [AddSuperUser](SoraApi/AddSuperUser.md)(…) | 添加机器人管理员 |
| [BlockUser](SoraApi/BlockUser.md)(…) | 屏蔽用户 在当前服务实例内不再处理其消息 |
| [CanSendImage](SoraApi/CanSendImage.md)() | 检查是否可以发送图片 |
| [CanSendRecord](SoraApi/CanSendRecord.md)() | 检查是否可以发送语音 |
| [CheckUrlSafely](SoraApi/CheckUrlSafely.md)(…) | 使用腾讯API检查链接安全性 |
| [CreateGroupFileRootFolder](SoraApi/CreateGroupFileRootFolder.md)(…) | 在群根目录创建文件夹 |
| [DelEssenceMessage](SoraApi/DelEssenceMessage.md)(…) | 删除精华消息 |
| [DeleteFriend](SoraApi/DeleteFriend.md)(…) | 删除好友 |
| [DeleteGroupFile](SoraApi/DeleteGroupFile.md)(…) | 删除群文件文件夹 |
| [DeleteGroupFolder](SoraApi/DeleteGroupFolder.md)(…) | 删除群文件文件夹 |
| [DeleteUnidirectionalFriend](SoraApi/DeleteUnidirectionalFriend.md)(…) | 删除单向好友 |
| [DisableGroupAdmin](SoraApi/DisableGroupAdmin.md)(…) | 取消群管理员 |
| [DisableGroupMemberMute](SoraApi/DisableGroupMemberMute.md)(…) | 解除群组成员禁言 |
| [DisableGroupMute](SoraApi/DisableGroupMute.md)(…) | 解除群组全员禁言 |
| [DismissGroup](SoraApi/DismissGroup.md)(…) | 解散群 |
| [DownloadFile](SoraApi/DownloadFile.md)(…) | 下载文件到缓存目录 |
| [EnableGroupAdmin](SoraApi/EnableGroupAdmin.md)(…) | 设置群管理员 |
| [EnableGroupAnonymousMute](SoraApi/EnableGroupAnonymousMute.md)(…) | 群组匿名用户禁言 (2 methods) |
| [EnableGroupMemberMute](SoraApi/EnableGroupMemberMute.md)(…) | 设置群组成员禁言 |
| [EnableGroupMute](SoraApi/EnableGroupMute.md)(…) | 群组全员禁言 |
| override [Equals](SoraApi/Equals.md)(…) | 比较重载 |
| [GetClientInfo](SoraApi/GetClientInfo.md)() | 获取连接客户端版本信息 |
| [GetEssenceMsgList](SoraApi/GetEssenceMsgList.md)(…) | 获取群精华消息列表 |
| [GetForwardMessage](SoraApi/GetForwardMessage.md)(…) | 获取合并转发消息 |
| [GetFriendList](SoraApi/GetFriendList.md)() | 获取好友列表 |
| [GetGroup](SoraApi/GetGroup.md)(…) | 获取群实例 |
| [GetGroupAtAllRemain](SoraApi/GetGroupAtAllRemain.md)(…) | 获取群@全体成员剩余次数 |
| [GetGroupFilesByFolder](SoraApi/GetGroupFilesByFolder.md)(…) | 获取群子目录文件列表 |
| [GetGroupFileSysInfo](SoraApi/GetGroupFileSysInfo.md)(…) | 获取群文件系统信息 |
| [GetGroupFileUrl](SoraApi/GetGroupFileUrl.md)(…) | 获取群文件资源链接 |
| [GetGroupInfo](SoraApi/GetGroupInfo.md)(…) | 获取群信息 |
| [GetGroupList](SoraApi/GetGroupList.md)(…) | 获取群组列表 |
| [GetGroupMemberInfo](SoraApi/GetGroupMemberInfo.md)(…) | 获取群成员信息 |
| [GetGroupMemberList](SoraApi/GetGroupMemberList.md)(…) | 获取群成员列表 |
| [GetGroupMessageHistory](SoraApi/GetGroupMessageHistory.md)(…) | 获取群消息历史记录 |
| [GetGroupNotice](SoraApi/GetGroupNotice.md)(…) | 获取群公告 |
| [GetGroupRootFiles](SoraApi/GetGroupRootFiles.md)(…) | 获取群根目录文件列表 |
| [GetGroupSystemMsg](SoraApi/GetGroupSystemMsg.md)() | 获取群组系统消息 |
| override [GetHashCode](SoraApi/GetHashCode.md)() | GetHashCode |
| [GetImage](SoraApi/GetImage.md)(…) | 获取图片信息 |
| [GetLoginInfo](SoraApi/GetLoginInfo.md)() | 获取登陆QQ的名字 |
| [GetLoginUserId](SoraApi/GetLoginUserId.md)() | 获取登录账号的id |
| [GetMessage](SoraApi/GetMessage.md)(…) | 获取群消息 |
| [GetModelShow](SoraApi/GetModelShow.md)(…) | 获取在线机型 |
| [GetOnlineClients](SoraApi/GetOnlineClients.md)(…) | 获取当前账号在线客户端列表 |
| [GetQidianAccountInfo](SoraApi/GetQidianAccountInfo.md)() | 获取企点账号信息 |
| [GetStatus](SoraApi/GetStatus.md)() | 获取客户端状态 |
| [GetUnidirectionalFriendList](SoraApi/GetUnidirectionalFriendList.md)() | 获取单向好友列表 |
| [GetUser](SoraApi/GetUser.md)(…) | 获取用户实例 |
| [GetUserInfo](SoraApi/GetUserInfo.md)(…) | 获取用户信息 |
| [GetWordSlices](SoraApi/GetWordSlices.md)(…) | 获取中文分词 |
| [KickGroupMember](SoraApi/KickGroupMember.md)(…) | 群组踢人 |
| [LeaveGroup](SoraApi/LeaveGroup.md)(…) | 退出群 |
| [MarkMessageRead](SoraApi/MarkMessageRead.md)(…) | 标记消息已读 |
| [OcrImage](SoraApi/OcrImage.md)(…) | OCR图片 |
| [RebootClient](SoraApi/RebootClient.md)(…) | 重启客户端 |
| [RecallMessage](SoraApi/RecallMessage.md)(…) | 撤回消息 |
| [ReloadEventFilter](SoraApi/ReloadEventFilter.md)() | 重载事件过滤器 |
| [RemoveBlock](SoraApi/RemoveBlock.md)(…) | 对用户解除屏蔽 |
| [RemoveSuperUser](SoraApi/RemoveSuperUser.md)(…) | 解除机器人管理员 |
| [SendGroupForwardMsg](SoraApi/SendGroupForwardMsg.md)(…) | 发送合并转发(群) |
| [SendGroupMessage](SoraApi/SendGroupMessage.md)(…) | 发送群聊消息 |
| [SendGroupNotice](SoraApi/SendGroupNotice.md)(…) | 发送群公告 |
| [SendPrivateForwardMsg](SoraApi/SendPrivateForwardMsg.md)(…) | 发送合并转发(私聊) |
| [SendPrivateMessage](SoraApi/SendPrivateMessage.md)(…) | 发送私聊消息 |
| [SendTemporaryMessage](SoraApi/SendTemporaryMessage.md)(…) | 发起群临时会话（私聊） |
| [SetEssenceMessage](SoraApi/SetEssenceMessage.md)(…) | 设置精华消息 |
| [SetFriendAddRequest](SoraApi/SetFriendAddRequest.md)(…) | 处理加好友请求 |
| [SetGroupAddRequest](SoraApi/SetGroupAddRequest.md)(…) | 处理加群请求/邀请 |
| [SetGroupCard](SoraApi/SetGroupCard.md)(…) | 设置群名片 |
| [SetGroupMemberSpecialTitle](SoraApi/SetGroupMemberSpecialTitle.md)(…) | 设置群成员专属头衔 |
| [SetGroupName](SoraApi/SetGroupName.md)(…) | 设置群名 |
| [SetGroupPortrait](SoraApi/SetGroupPortrait.md)(…) | 设置群头像 |
| [SetModelShow](SoraApi/SetModelShow.md)(…) | 设置在线机型 |
| [SetQQProfile](SoraApi/SetQQProfile.md)(…) | 设置 QQ 个人资料 |
| [UploadGroupFile](SoraApi/UploadGroupFile.md)(…) | 上传群文件 |
| [UploadPrivateFile](SoraApi/UploadPrivateFile.md)(…) | 上传私聊文件 |
| [operator ==](SoraApi/op_Equality.md) | 等于重载 |
| [operator !=](SoraApi/op_Inequality.md) | 不等于重载 |

## See Also

* namespace [Sora.Entities.Base](../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
