# 更新日志

:::tip 标识提示
候选发布版 <Badge text="Release Candidate" type="warning"/>

破坏性更新 <Badge text="Breaking Change" type="error"/>

框架所适配的`gocq`版本 <Badge text="gocq v----"/>
:::

::: warning 注意
每一版日志的示例只适用于日志对应版本

在文档更新后可能会出现连接404或者示例失效的问题

如需要查看最新的示例请前往 [示例](../example/README.md)
:::

## v1.0.0-rc73<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-rc2"/>

:::danger 注意
删除了所有指令自带的异常处理，请使用 [ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) 中的 [CommandExceptionHandle](../API/Sora.Interfaces/ISoraConfig/CommandExceptionHandle.md) 作为异常处理

**详细的使用说明请参照指南(快速上手)中的指令说明文档**
:::

删除 [SoraCommand](../API/Sora.Attributes.Command/SoraCommand.md) 的 `ExceptionHandle` 属性 <Badge text="Breaking Change" type="error"/>

删除 [RegisterPrivateDynamicCommand](../API/Sora.Command/CommandManager/RegisterPrivateDynamicCommand.md)/[RegisterGroupDynamicCommand](../API/Sora.Command/CommandManager/RegisterGroupDynamicCommand.md) 的 `ExceptionHandle` 参数 <Badge text="Breaking Change" type="error"/>

TYPO 修正部分注释

## v1.0.0-rc71/72<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

修复 关键词匹配的正则表达式错误 [#65](https://github.com/DeepOceanSoft/Sora/discussions/65)

## v1.0.0-rc70<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

修复 在其他平台上可能产生的错误log

## v1.0.0-rc69<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

增加 增加全局指令错误回调 [CommandExceptionHandle](../API/Sora.Interfaces/ISoraConfig/CommandExceptionHandle.md)

## v1.0.0-rc68<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

优化 动态指令错误回调上下文增加消息事件参数

## v1.0.0-rc67<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

TYPO 修改部分错误的log文本

优化 部分私聊合并消息转发支持覆盖超时时间

修复 错误的反向ws事件判断

优化 反向ws的性能

## v1.0.0-rc66<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-rc2"/> 

调整 'StaticVariable' 改名为 [VersionCode](../API/Sora/VersionCode.md)<Badge text="Breaking Change" type="error"/>

修复 某些奇怪的情况下在服务销毁时报错的问题 [#62](https://github.com/DeepOceanSoft/Sora/issues/62)

优化 ws连接/服务/连续对话的性能和稳定性

## v1.0.0-rc65<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

优化 启动逻辑

## v1.0.0-rc64<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

新增 触发指令时更多的上下文支持 [CommandName](../API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/CommandName.md)

修复 指令匹配时的逻辑错误

## v1.0.0-rc63<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

优化 websocket连接管理器

## v1.0.0-rc62<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

修复 某些情况下动态指令不按指定群触发

## v1.0.0-rc61<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

增加 指令的优先级支持自动设置

修复 自定义匹配表达式(Fnuc)的优先级错误

## v1.0.0-rc60<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

增加 新的[MessageEquals](../API/Sora.Entities/MessageContext/MessageEquals.md)重载

## v1.0.0-rc59<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

增加 图片消息的检测方式 [IsSingleImageMessage](../API/Sora.Entities/MessageContext/IsSingleImageMessage.md) [IsMultiImageMessage](../API/Sora.Entities/MessageContext/IsMultiImageMessage.md)

## v1.0.0-rc58<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

增加 动态指令\连续对话增加使用 `Func` 自定义的消息匹配方式

修复 错的异常处理逻辑

## v1.0.0-rc57<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc2"/>

新增/优化 适配 `gocq v1.0.0-rc2` (东西太多了不写了，直接去看官方文档吧)

## v1.0.0-rc56<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

增加 在[SegmentHelper](../API/Sora.Entities.Segment/SegmentHelper.md)中添加将 `Stream` 转换为 `base64` 字符串的方法 [StreamToBase64](../API/Sora.Entities.Segment/SegmentHelper/StreamToBase64.md) by [Alex1911](https://github.com/Alex1911-Jiang) [#61](https://github.com/DeepOceanSoft/Sora/pull/61)

增加 在[SoraSegment](../API/Sora.Entities.Segment/SoraSegment.md)中添加使用 `Stream` 构造 `Image` 消息段的方法 [Image](../API/Sora.Entities.Segment/SoraSegment/Image.md) by [Alex1911](https://github.com/Alex1911-Jiang) [#61](https://github.com/DeepOceanSoft/Sora/pull/61)

TYPO 修复错误log

## v1.0.0-rc55<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

修复 多线程错误[#60](https://github.com/DeepOceanSoft/Sora/issues/60)

## v1.0.0-rc53/54<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

修复 错误的指上下文 [#59](https://github.com/DeepOceanSoft/Sora/issues/59)

## v1.0.0-rc52<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

增加 在[ISoraService](../API/Sora.Interfaces/ISoraService.md)中增加停止服务的方法 by [Ragnarokkr.Xia](https://github.com/Ragnarokkr-Xia) [#57](https://github.com/DeepOceanSoft/Sora/pull/57)

## v1.0.0-rc51<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

增加 [SoraServiceFactory](../API/Sora/SoraServiceFactory.md) 增加API `TryGetApi` 允许使用登录账号ID来获取API实例

优化 [SendGroupFoewardMsg](../API/Sora.Entities.Base/SoraApi/SendGroupForwardMsg.md) 增加超时覆盖选项

优化 [SoraApi](../API/Sora.Entities.Base/SoraApi.md)改为单例模式

## v1.0.0-rc50<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-rc1"/>

调整 `SoraServiceFactoryExtension` 合并入 [SoraServiceFactory](../API/Sora/SoraServiceFactory.md)<Badge text="Breaking Change" type="error"/>

增加 [ISoraService](../API/Sora.Interfaces/ISoraService.md) 增加API `GetApi` 用于从服务中获取[SoraApi](../API/Sora.Entities.Base/SoraApi.md)

## v1.0.0-rc49<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

优化 指令组相关的逻辑

优化 部分log的信息

## v1.0.0-rc48<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

增加 在[CommandGroup](../API/Sora.Attributes.Command/CommandGroup.md) 中添加指令组相关属性，支持组名和指令组前缀

增加 [CommandManager](../API/Sora.Command/CommandManager.md) 增加启用和禁用指令组的API

## v1.0.0-rc47<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

优化 服务在调用 `Dispose` 产生的部分逻辑问题

优化 优化[MessageBody](../API/Sora.Entities/MessageBody.md)中 `DebuggerDisplay` 的属性

## v1.0.0-rc46<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-rc1"/>

增加 从 `IEnumerable<SoraSegment>` 转换为 [MessageBody](../API/Sora.Entities/MessageBody.md)的方法 [ToMessageBody](../API/Sora.Entities.Segment/SegmentHelper/ToMessageBody.md)

## v1.0.0-rc45<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

增加 [MessageBody](../API/Sora.Entities/MessageBody.md) 方法 [IndexOfById](../API/Sora.Entities/MessageBody/IndexOfById.md) 用于通过ID查找某一消息段

## v1.0.0-rc44<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

增加 [SoraSegment](../API/Sora.Entities.Segment/SoraSegment.md) 增加属性 `Id` 作为消息段的ID

增加 [ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) 设置项 `SendCommandErrMsg` [#53](https://github.com/DeepOceanSoft/Sora/issues/53)

优化 报错日志

优化 错误抛出机制

优化 改进消息段反序列化时的方法

删除 [SoraSegment](../API/Sora.Entities.Segment/SoraSegment.md) 的 `DataType` 属性及相关方法<Badge text="Breaking Change" type="error"/>

优化 修改 [MessageContext](../API/Sora.Entities/MessageContext.md) 的判等条件

增加 [MessageContext](../API/Sora.Entities/MessageContext.md) 中添加 `MessageEquals` 方法

## v1.0.0-rc43<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

优化/增加 在 [p](../API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs.md) 中添加属性 `CommandRegex` `CommandId` , 在匹配到指令时会设置这两个属性

优化 指令匹配机制

调整 修改 [Sex](../API/Sora.Enumeration/Sex.md) 为枚举类型<Badge text="Breaking Change" type="error"/>

## v1.0.0-rc42<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

修复 错误的指令匹配机制 [#52](https://github.com/DeepOceanSoft/Sora/issues/52)

## v1.0.0-rc41<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

修复 错误的权限判断

## v1.0.0-rc40<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

修复 CQ码序列化时的错误

增加 对消息段中CodeSegment的判断方法 [SourceFlag](../API/Sora.Entities/MessageContext/IsCodeCard.md)

## v1.0.0-rc39<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

修复 错误的标识符

## v1.0.0-rc38<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

调整 [SourceFlag](../API/Sora.Enumeration/SourceFlag.md) 添加值 `System` `None`

调整 [BaseSoraEventArgs](../API/Sora.EventArgs.SoraEvent/BaseSoraEventArgs.md) 添加属性 [SourceFlag](../API/Sora.Enumeration/SourceFlag.md)

调整 命名 `Model` -> [ModelInfo](../API/Sora.Entities.Info/ModelInfo.md)

调整 命名 `Message` -> [MessageContext](../API/Sora.Entities/MessageContext.md)

增加 添加 [BaseMessageEventArgs](../API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs.md) 类用于存放消息内容和发送者

增加 特性 [SoraCommand](../API/Sora.Attributes.Command/SoraCommand.md)

删除 特性 `GroupCommand` , `PrivateCommand`

调整 [IsSelfMessage](../API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/IsSelfMessage.md) 移入 [BaseMessageEventArgs](../API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs.md)

修复 [IsSelfMessage](../API/Sora.EventArgs.SoraEvent/BaseMessageEventArgs/IsSelfMessage.md) 的判断逻辑

增加 [ThrowCommandException](../API/Sora.Interfaces/ISoraConfig/ThrowCommandException.md) 配置选项

增加 自身聊天信息事件(私聊) [OnSelfPrivateMessage](../API/Sora.OnebotAdapter/EventAdapter/OnSelfPrivateMessage.md)

调整 命名 `OnSelfMessage` -> [OnSelfGroupMessage](../API/Sora.OnebotAdapter/EventAdapter/OnSelfGroupMessage.md)

调整 修改 [Vector2](../API/Sora.Entities/Vector2.md) 为结构体

调整 [ApiStatus](../API/Sora.Entities/ApiStatus.md) 移动至 `Sora.Entities` 命名空间

重构 特性指令
- 删除群组指令特性和私聊特性指令，合并为同一个特性指令
- 特性指令增加SourceType设置属性，用于指定匹配源
- 重构指令自动注册，并在注册阶段跳过不合法的指令并使用log警告
- 优化连续对话的匹配逻辑/上下文判定
- 分离特性指令和动态指令（动态指令在之后进行重构）
- CommandManager结构优化
- 优化指令触发/判定
- 优化错误触发机制和抛出机制
- 优化初始化流程
- 指令权限增加单独的SuperUser的判定（在MemberRoleType之后）
- 优化部分注释
- 动态注册的指令支持删除

调整 权限相关
- 将SuperUser从MemberRoleType中移除，使用IsSuperUser属性替代，分离ob和框架自身的权限
- 在User中添加IsSuperUser属性

## v1.0.0-rc37<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

调整 将CQ码反序列化移动至 [CQCodeUtil](../API/Sora.Util/CQCodeUtil.md)

调整 版本号常量命名修改 `Version` → [`VERSION`](../API/Sora/StaticVariable.md)

增加 [ONEBOT_PROTOCOL](../API/Sora/StaticVariable.md) 常量

增加 [EnableSocketMessage](../API/Sora.Interfaces/ISoraConfig/EnableSocketMessage.md) 配置选项

## v1.0.0-rc36<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

优化 链接管理和初始化

优化 `SlefId` 更新逻辑

优化 [AutoMarkMessageRead](../API/Sora.Interfaces/ISoraConfig/AutoMarkMessageRead.md) 逻辑

增加 [CQCodeUtil](../API/Sora.Util/CQCodeUtil.md) 用于旧版CQ码转换(将在V12禁用)

## v1.0.0-rc35<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta8-fix2"/>

增加 `string` → `SoraSegment`的隐式转换 by [轻雨](https://github.com/qingyu-sama) [#47](https://github.com/DeepOceanSoft/Sora/pull/47)

调整 `string` 转换为 `MessageBody` 时忽略空字符串 by [轻雨](https://github.com/qingyu-sama) [#47](https://github.com/DeepOceanSoft/Sora/pull/47)

## v1.0.0-rc34<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta8-fix1"/>

调整 移除对Gift的支持

## v1.0.0-rc33<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

:::warning 安全性警告
字符串转换的功能已经被评估为不安全的

请勿滥用于消息的收发而只作为序列化并存储的方式
:::

增加 原字符串CQ码的转换（不支持自动转换，需要自己调用转换方法） by [轻雨](https://github.com/qingyu-sama) [#46](https://github.com/DeepOceanSoft/Sora/pull/46)
使用方法

```csharp
MessageBody messageBody = MessageBody.GetMessageBody(@"[CQ:at,qq=1470078125]");
```

修正 错误的注释 by [轻雨](https://github.com/qingyu-sama) [#46](https://github.com/DeepOceanSoft/Sora/pull/46)

## v1.0.0-rc30/31/32<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

都在优化log

## v1.0.0-rc29<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

修正 错误的Log

## v1.0.0-rc28<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

:::warning Log控制台输出将默认禁用
28版本之后的log将会默认关闭控制台的输出

如果需要启用请使用以下代码

```csharp
//设置log
Log.LogConfiguration
   .EnableConsoleOutput() //启用控制台输出
   .SetLogLevel(LogLevel.Debug); //设置log等级
```

:::

**调整 Log输出，并增加`ILogService`的方法种类，重写大部分的Log处理逻辑**

**调整 拆分YukariToolBox，去除不必要的部分，并将部分工具集成进框架内(外部依旧可以调用)**

更新 实例项目代码（文档的教程会在之后更新）

## v1.0.0-rc27<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

:::danger .Net版本升级警告
对.Net5的支持在1.0.0-rc26之后的版本将会停止，1.0将会发布单独的.Net5版本

之后的开发将会转为.Net6，由于.Net6为LTS的.Net版本，之后将会在.Net6的生命周期内使用.Net6进行开发
:::

**.Net版本升级 6.0**

**调整 [SoraServiceFactory](../API/Sora/SoraServiceFactory.md) 移动至 `Sora` 命名空间**

调整 消息段的数据结构类型调整为`sealed record`

优化 指令异常提示的消息增加异常捕捉

## v1.0.0-rc26<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

增加 指令/动态指令在执行中有异常时的处理参数

## v1.0.0-rc25<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

> RC25 之后的版本中破坏性更新的条目将会被加粗

增加 更多的消息段构建的隐式转换和运算重载

修正 [SoraSegment](../API/Sora.Entities.Segment/SoraSegment.md) 在部分情况下转换错误的问题

修正 错误的注释

**调整 消息段构建时有错误参数将直接抛出异常**

## v1.0.0-rc24<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

修正 [GetGroupFilesByFolder](../API/Sora.Entities.Base/SoraApi/GetGroupFilesByFolder.md) 的错误注释 [#43](https://github.com/DeepOceanSoft/Sora/pull/43) by [Ge](https://github.com/gehongyan)

优化 [MessageBody](../API/Sora.Entities/MessageBody.md) 添加更多的运算重载，优化消息的构造方式

修正 [AtSegment](../API/Sora.Entities.Segment.DataModel/AtSegment.md) 的错误注释

修正 获取单向好友列表时，列表元素为空的问题 [#42](https://github.com/DeepOceanSoft/Sora/issues/42)

## v1.0.0-rc23<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

优化 [Message](../API/Sora.Entities/Message.md)增加索引器，可以通过索引直接获取消息段，如`Message[0]`

调整 [Node](../API/Sora.Entities.Segment.DataModel/Node.md)类型 `struct` → `class`

修正 部分错误的注释

调整 Segment的构造函数为不可见

## v1.0.0-rc22<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

修正 错误的log

## v1.0.0-rc21<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

增加 类`BaseSegment`作为所有消息段数据的基类

增加 `SoraSegment` 中的属性 `DataType` 用于获取数据类型

优化 消息段的序列化/反序列化

优化 `Debug`模式下会向log直接输出接收到的json内容

优化 指令的数据处理

调整 命名 `CQCode` → `SoraSegment`

调整 命名 `CQCodes` → `SegmentBuilder`

调整 命名 `SoraSegment` 属性 `DataObject` → `Data`

调整 `SoraSegment` 属性类型 `object` → `BaseSegment`

调整 命名空间 `Sora.Entities.MessageElement` → `Sora.Entities.Segment`

调整 命名空间 `Sora.Entities.MessageElement.CQModel` → `Sora.Entities.Segment.DataModel`

调整 所有的消息段数据结构命名

删除 `RegexBuilder`类

## v1.0.0-rc20<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta7-fix2"/>

增加 单向好友相关API [GetUnidirectionalFriendList](../API/Sora.Entities.Base/SoraApi/GetUnidirectionalFriendList.md) | [DeleteUnidirectionalFriend](../API/Sora.Entities.Base/SoraApi/DeleteUnidirectionalFriend.md)

增加 [Image](../API/Sora.Entities.MessageElement.CQModel/Image.md) 添加 `SubType` 字段

优化 连续对话

## v1.0.0-rc19<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta6"/>

修复 长时间运行偶尔崩溃的问题 [#41](https://github.com/DeepOceanSoft/Sora/issues/41)

## v1.0.0-rc18<Badge text="Release Candidate" type="warning"/> <Badge text="Breaking Change" type="error"/> <Badge text="gocq v1.0.0-beta6"/>

调整 [ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) `Port` 参数类型 `uint` → `ushort`

优化 心跳包超时处理逻辑

优化 消息段处理

优化 ws连接管理，删除部分反射

优化 删除了一些历史冗余

## v1.0.0-rc17<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta6"/>

优化 指令服务的使能逻辑

## v1.0.0-rc16<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta6"/>

增加 API 标记消息已读 [MarkMessageRead](../API/Sora.Entities.Base/SoraApi/MarkMessageRead.md)

增加 配置项 自动标记消息已读 [AutoMarkMessageRead](../API/Sora.Interfaces/ISoraConfig/AutoMarkMessageRead.md)

增加 事件 [OnTitleUpdate](../API/Sora.OnebotInterface/EventInterface/OnTitleUpdate.md)

增加 [GroupMemberInfo](../API/Sora.Entities.Info/GroupMemberInfo.md) 增加字段 `ShutUpTime`

优化 部分API增加 `useCache` 参数(默认为`true`)

优化 事件处理逻辑，数据存储结构

## v1.0.0-rc15<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta5"/>

删除 [DeleteGroupFile](../API/Sora.Entities.Base/SoraApi/DeleteGroupFile.md) 的参数 `floderId`

BUG 修复在获取AT列表时如果有AT全体时的转换错误

## v1.0.0-rc14<Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta4"/>

增加 API 对用户的动态屏蔽和接触屏蔽 [BlockUser](../API/Sora.Entities.Base/SoraApi/BlockUser.md) | [RemoveBlock](../API/Sora.Entities.Base/SoraApi/RemoveBlock.md)

增加 API 机器人管理员的动态增加和减少 [AddSuperUser](../API/Sora.Entities.Base/SoraApi/AddSuperUser.md) | [RemoveSuperUser](../API/Sora.Entities.Base/SoraApi/RemoveSuperUser.md)

增加 `string` → `MessageBody` 的隐式转换（用于单字符串参数转换为消息数据）

调整 消息发送增加超时覆盖参数（用于发送耗时长消息）

删除 发送消息时会产生二义性的方法

## v1.0.0-rc13<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta4"/>

TYPO 修正错误Log

## v1.0.0-rc12<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta4"/>

增加 指令连续对话的超时重载

优化 API超时时的Log

## v1.0.0-rc.11<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta4"/>

调整 开源许可证为`Apache-2.0`

## v1.0.0-rc.10<Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta4"/>

> [GetModelShow](../API/Sora.Entities.Base/SoraApi/GetModelShow.md) | [SetModelShow](../API/Sora.Entities.Base/SoraApi/SetModelShow.md) 的使用参数请参照 [gocqhttp#872](https://github.com/Mrs4s/go-cqhttp/pull/872)

增加 API [GetQidianAccountInfo](../API/Sora.Entities.Base/SoraApi/GetQidianAccountInfo.md) | [DeleteFriend](../API/Sora.Entities.Base/SoraApi/DeleteFriend.md) | [GetModelShow](../API/Sora.Entities.Base/SoraApi/GetModelShow.md) | [SetModelShow](../API/Sora.Entities.Base/SoraApi/SetModelShow.md) | [GetModelShow](../API/Sora.Entities.Base/SoraApi/GetModelShow.md) | [CreateGroupFileRootFolder](../API/Sora.Entities.Base/SoraApi/CreateGroupFileRootFolder.md) | [DeleteGroupFile](../API/Sora.Entities.Base/SoraApi/DeleteGroupFile.md) | [DeleteGroupFolder](../API/Sora.Entities.Base/SoraApi/DeleteGroupFolder.md)

增加 枚举 [Sex](../API/Sora.Enumeration/Sex.md)

调整 API [SendGroupNotice](../API/Sora.Entities.Base/SoraApi/SendGroupNotice.md) 增加 `image` 图片可选参数

TYPO 修正错误的注释

## v1.0.0-rc.9 <Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta3"/>

调整 默认配置下的超时从 `1s` 改为 `5s`

依赖更新 Fleck `1.1.0` → `1.2.0`

## v1.0.0-rc.8 <Badge text="Release Candidate" type="warning"/>  <Badge text="gocq v1.0.0-beta3"/>

增加 动态的指令注册 [RegisterGroupCommand](../API/Sora.Command/CommandManager/RegisterGroupCommand.md) | [RegisterPrivateCommand](../API/Sora.Command/CommandManager/RegisterPrivateCommand.md)

增加 部分CQ码匹配正则 [RegexBuilder](../API/Sora.Command/RegexBuilder.md)

优化 优化消息段的运算符重载，优化消息的构建方式

## v1.0.0-rc.7 <Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta3"/>

增加 [ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) 增加 `BlockUsers` 设置项

增加 更多的API状态 [ApiStatusType](../API/Sora.Enumeration.ApiType/ApiStatusType.md)

优化/增加 `WaitForNextMessageAsync` 增加单表达式重载

优化 API执行的异常判断

优化 指令/等待连续指令处理的上下文处理

优化 修正部分XML注释

优化 Sora服务的析构流程

优化 [ISoraService](../API/Sora.Interfaces/ISoraService.md) 添加 `IDisposable` 继承

优化/调整 部分数据的时间字段从时间戳改为 `DateTime` 同时修改了参数命名

## v1.0.0-rc.6 <Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta2"/>

增加 CQ码 [CustomReply](../API/Sora.Entities.MessageElement.CQModel/CustomReply.md) 用于自定义回复

增加 [GroupInfo](../API/Sora.Entities.Info/GroupInfo.md) 增加更多字段的数据 `仅支持gocq 1.0.0-beta2以上版本`

增加 [CQAt](../API/Sora.Entities.MessageElement/CQCodes/CQAt.md) 添加构造重载以支持别名覆盖

增加 [CQReply](../API/Sora.Entities.MessageElement/CQCodes/CQReply.md) 添加构造重载以支持自定义回复内容

调整 `API` 命名 `GetMessages` → `GetMessage`

调整 `CQCode` 构造函数命名 `At` → `ToAt`

调整 `API` `GetGroupMessageHistory` 的 `messageSequence` 参数类型改为 `long?`

调整 [GroupSenderInfo](../API/Sora.Entities.Info/GroupSenderInfo.md) [PrivateSenderInfo](../API/Sora.Entities.Info/PrivateSenderInfo.md) 从 `class` 改为 `struct` (又改回去了)

## v1.0.0-rc.5 <Badge text="Release Candidate" type="warning"/>   <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta1"/>

增加 权限等级增加 `SuperUser` 服务管理员

增加 [ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) 增加 `SuperUsers` 设置项

增加 服务创建扩展表达式 [SoraServiceFactoryExtension](../API/Sora.Net/SoraServiceFactoryExtension.md) by [XiaoHe321](https://github.com/xh321)

增加 多服务创建方式 by [XiaoHe321](https://github.com/xh321)

增加 [FriendInfo](../API/Sora.Entities.Info/FriendInfo.md) [PrivateSenderInfo](../API/Sora.Entities.Info/PrivateSenderInfo.md) [UserInfo](../API/Sora.Entities.Info/UserInfo.md) 增加参数 `Role` 标识权限等级

优化 消息构建处理

优化 异步指令的调用和处理方式

优化 API调用处理，API消息处理

调整 [GroupMemberInfo](../API/Sora.Entities.Info/GroupMemberInfo.md) [GroupSenderInfo](../API/Sora.Entities.Info/GroupSenderInfo.md) [PrivateSenderInfo](../API/Sora.Entities.Info/PrivateSenderInfo.md) 从 `struct` 改为 `class`

调整 服务创建方法改名 `CreateInstancs` → `CreateService`

删除 服务器/客户端启动方法 `StartClient` 和 `StartServer` (请使用`StartService`来启动服务)

删除 异常 `SoraClientIsRunningExpecption` `SoraServerIsRunningExpecption`

## v1.0.0-rc.4 <Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta1"/>

增加 [ApiStatus](../API/Sora.Entities.Info/ApiStatus.md) 结构体用于存放API执行结果

增加 [MessageBody](../API/Sora.Entities/MessageBody.md) 方法 [AddRange](../API/Sora.Entities/MessageBody/AddRange.md)

调整 消息发送方法参数由 `List<CQCode>` 改为 [`MessageBody`](../API/Sora.Entities/MessageBody.md)

调整 API状态返回改为 [ApiStatus](../API/Sora.Entities.Info/ApiStatus.md)

调整 命名 `APIStatusType` → `ApiStatusType`

## v1.0.0-rc.3 <Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-beta1"/>

增加 消息段实例 [MessageBody](../API/Sora.Entities/MessageBody.md)

增加 [Command](../API/Sora.Attributes.Command/Command.md) 属性 [RegexOptions](../API/Sora.Attributes.Command/Command/RegexOptions.md)

增加 [MessageBody](../API/Sora.Entities/MessageBody.md) 和 [CQCode](../API/Sora.Entities.MessageElement/CQCode.md) 的运算重载/隐式转换/扩展方法，用于构建消息段

增加 `int`/`long` 扩展方法 [At](../API/Sora.Entities.MessageElement/CQCodes/At.md) 用于直接构造CQ码

```csharp
//示例
MessageBody message1 = "好耶";
MessageBody message2 = "坏耶" + 100000.At() + CQCodes.CQFace(1);
```

删除 `AddText` 方法

删除 [SoraWebsocketClient](../API/Sora.Net/SoraWebsocketClient.md) 和 [SoraWebsocketServer](../API/Sora.Net/SoraWebsocketServer.md) 的构造方法

优化 指令执行类型判断

调整 [Message](../API/Sora.Entities/Message.md) 消息实体从 `MessageList` 改为 `MessageBody`

调整 [CQCode](../API/Sora.Entities.MessageElement/CQCode.md) 从 `class` 改为 `struct`

调整 [CQCode](../API/Sora.Entities.MessageElement/CQCode.md) 的所有构建方法移动至 [CQCodes](../API/Sora.Entities.MessageElement/CQCodes.md)

调整 命名空间 `Sora.Entities.CQCodes` → `Sora.Entities.MessageElement`

调整 命名空间 `Sora.Entities.CQCodes.CQCodeModel` → `Sora.Entities.MessageElement.CQModel`

调整 命名 `CQFunction` → `CQType` , `CQData` → `DataObject`

go-cqhttp版本:[go-cqhttp-v1.0.0-beta1](https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.0.0-beta1)

## v1.0.0-rc.2 <Badge text="Release Candidate" type="warning"/>  <Badge text="Breaking Change" type="error"/>  <Badge text="gocq v1.0.0-alpha1"/>

增加 在`GroupMessageEventArgs`和`PrivateMessageEventArgs` 中添加方法 [WaitForNextMessageAsync](../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs/WaitForNextMessageAsync.md) 用于连续对话

增加 在`GroupMessageEventArgs`和`PrivateMessageEventArgs` 中添加属性 [IsContinueEventChain](../API/Sora.EventArgs.SoraEvent/BaseSoraEventArgs/IsContinueEventChain.md) 以代替指令特性中的 `TriggerEventAfterCommand`

增加 在`指令特性`中添加优先级字段(当指令同时被触发时生效) [Priority](../API/Sora.Attributes.Command/Command/Priority.md)

删除 `指令特性`的 `TriggerEventAfterCommand` 属性

优化 静态资源和连接管理

## v1.0.0-rc.1 <Badge text="Release Candidate" type="warning"/> <Badge text="gocq v1.0.0-alpha1"/>

::: tip 小提示
此版本为go-cqhttp同步更新的RC版本，和上一版本没有太大区别

同时该版本也将作为第一个LTS版本发布

此版本后的版本号命名规则改为 [SemVer](https://semver.org/lang/zh-CN/) 规范
:::

优化 部分debug日志 by [nidbCN](https://github.com/nidbCN)

依赖更新 [Newtonsoft.Json](https://www.newtonsoft.com/json) `12.0.3` → `13.0.1`

## v0.9.9 <Badge text="gocq v0.9.40-fix4"/>

修复 获取 `登录账号UID` 可能为-1的问题

优化 `账号UID` 处理

增加 `关键词` 的匹配方式

## v0.9.8 <Badge text="gocq v0.9.40-fix4"/>

优化 `指令管理器` 初始化方式

增加 [GetInstance](../API/Sora.Command/CommandManager/GetInstance.md) 方法用于取出由 `指令管理器` 创建后的实例

## v0.9.7 <Badge text="gocq v0.9.40-fix4"/>

 修复 静态方法无法被 `指令管理` 触发的问题

## v0.9.6 <Badge text="gocq v0.9.40-fix4"/>

增加 消息段 `List<CQCode>` 扩展方法 [AddText](../API/Sora/Helper/AddText.md) 用于快速添加纯文本消息

## v0.9.5 <Badge text="gocq v0.9.40-fix4"/>

优化 `正向Websocket` 的消息发送方式

## v0.9.4 <Badge text="gocq v0.9.40-fix4"/>

优化 指令触发后的处理逻辑 by [XiaoHe321](https://github.com/xh321)

优化 框架内可空类型的数据处理

## v0.9.3 <Badge text="gocq v0.9.40-fix4"/>

优化 `API层` 的响应和回调，加快了响应速度

## v0.9.2 <Badge text="gocq v0.9.40-fix4"/>

修复 指令在触发后不再触发 `Event` 的问题

## v0.9.1 <Badge text="gocq v0.9.40-fix4"/>

优化 API请求处理 by [b11p](https://github.com/b11p) [#22](https://github.com/Yukari316/Sora/pull/22)

优化 实例工厂

优化 [ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) 添加许多公共参数

优化 Websocket参数类型 将时间参数修改为`TimeSpan`

优化 Websocket连接管理

修复 `正向Websocket`路径请求

## v0.9.0 <Badge text="gocq v0.9.40-fix4"/> <Badge text="Breaking Change" type="error"/>

添加 Sora实例工厂 [SoraServiceFactory](../API/Sora.Net/SoraServiceFactory.md) by [ExerciseBook](https://github.com/ExerciseBook) [#18](https://github.com/Yukari316/Sora/pull/18)

添加 接口 [ISoraConfig](../API/Sora.Interfaces/ISoraConfig.md) [ISoraService](../API/Sora.Interfaces/ISoraService.md) 整合服务端/客户端 by [ExerciseBook](https://github.com/ExerciseBook) [#18](https://github.com/Yukari316/Sora/pull/18)

优化 [CommandManager](../API/Sora.Command/CommandManager.md) 改为公有 [#20](https://github.com/Yukari316/Sora/issues/20)

优化 指令的实例创建

优化 指令的初始化和匹配

优化 特性指令处理 by [XiaoHe321](https://github.com/xh321)

优化 指令触发时的Log [#19](https://github.com/Yukari316/Sora/issues/19)

调整 命名空间 `Sora.Command.Attributes` → `Sora.Attributes.Command`

## v0.8.0 <Badge text="gocq v0.9.40-fix4"/> <Badge text="Breaking Change" type="error"/>

调整 命名空间 `Sora.EventArgs.WSServerEvent` → `Sora.EventArgs.WebsocketEvent`

## v0.7.1 <Badge text="gocq v0.9.40-fix4"/>

优化 `正向Websocket`取消占用检查 [#17](https://github.com/Yukari316/Sora/issues/17)

优化 指令匹配方式 by [XiaoHe321](https://github.com/xh321)

## v0.7.0 <Badge text="gocq v0.9.40-fix4"/> <Badge text="Breaking Change" type="error"/>

增加 `正向Websocket`连接方式

调整 命名空间

## v0.6.6 <Badge text="gocq v0.9.40"/>

增加 `API` [SendTemporaryMessage](../API/Sora.Entities.Base/SoraApi/SendTemporaryMessage.md)

[PrivateSenderInfo](../API/Sora.Entities.Info/PrivateSenderInfo.md) 增加  `GroupId` 属性（此属性在由群聊发起的临时会话消息中有效）

[PrivateMessageEventArgs](../API/Sora.EventArgs.SoraEvent/PrivateMessageEventArgs.md) 增加 `IsTemporaryMessage` 属性

优化 指令构造方式

## v0.6.5 <Badge text="gocq v0.9.40"/>

优化框架API层

## v0.6.4 <Badge text="gocq v0.9.40"/>

增加 简单的路由指令服务 [使用说明](../guide/command/README.md)

增加 路由指令服务的使能选项 by [Kengxxiao](https://github.com/Kengxxiao) [#16](https://github.com/Yukari316/Sora/pull/16)

优化 转发消息的 [CustomNode](../API/Sora.Entities.CQCodes.CQCodeModel/CustomNode.md) 兼容字符串格式和自定义时间 by [Kengxxiao](https://github.com/Kengxxiao) [#15](https://github.com/Yukari316/Sora/pull/15)

## v0.6.3 <Badge text="gocq v0.9.40"/>

:::danger 注意
此版本的依赖更新了Log的实现和命名空间

如果使用到了原Log的方法，请谨慎更新
:::

更新 框架依赖[YukariToolBox](https://github.com/Yukari316/YukariToolBox)到`1.1.1`

## v0.6.2 <Badge text="gocq v0.9.40"/>

优化 底层API请求管理

## v0.6.1 <Badge text="gocq v0.9.40"/>

增加 自身消息接收事件 [OnSelfMessage](../API/Sora.Server.ServerInterface/EventInterface/OnSelfMessage.md)

增加 `API` [SendGroupNotice](../API/Sora.Entities.Base/SoraApi/SendGroupNotice.md)

优化 在[Group](../API/Sora.Entities/Group.md)和[User](../API/Sora.Entities/User.md)中加入一系列快捷方法

优化 消息解析速度

优化 框架Log信息

## v0.6.0 <Badge text="gocq v0.9.40"/>  <Badge text="Breaking Change" type="error"/>

增加 必要的实例运算重载

增加 在上报格式为`string`时的错误提示 by [XiaoHe321](https://github.com/xh321)

修复 XML注释中的错误 by [XiaoHe321](https://github.com/xh321)

优化 `API`接口的调用方式

优化 `Test`示例中的代码

移动 `AsyncExtensions`至 [YukariToolBox](https://github.com/Yukari316/YukariToolBox)

升级`Workflow`的SDK版本至`5.0.103`

## v0.5.3.1 <Badge text="gocq v0.9.40"/>

修复重载中的错误逻辑

## V0.5.3 <Badge text="gocq v0.9.40"/>

增加大部分实例的运算重载

## v0.5.2.1 <Badge text="gocq v0.9.40"/>

修复命名错误

## v0.5.2 <Badge text="gocq v0.9.40"/>

增加API [UploadGroupFile](../API/Sora.Entities.Base/SoraApi/UploadGroupFile.md)

增加API [SetEssenceMessage](../API/Sora.Entities.Base/SoraApi/SetEssenceMessage.md)

增加API [DelEssenceMessage](../API/Sora.Entities.Base/SoraApi/DelEssenceMessage.md)

增加API [GetEssenceMsgList](../API/Sora.Entities.Base/SoraApi/GetEssenceMsgList.md)

增加API [CheckUrlSafely](../API/Sora.Entities.Base/SoraApi/CheckUrlSafely.md)

增加API [ReloadEventFilter](../API/Sora.Entities.Base/SoraApi/ReloadEventFilter.md)

增加Event [OnEssenceChange](../API/Sora.Server.ServerInterface/EventInterface/OnEssenceChange.md)

音乐分享类型删除 `虾米音乐` by [Kengxxiao](https://github.com/Kengxxiao) [#11](https://github.com/Yukari316/Sora/pull/11)

## v0.5.1.1 <Badge text="gocq v0.9.39"/>

修复部分CQ码失效的问题

## v0.5.1 <Badge text="gocq v0.9.39"/>

增加API [GetGroupMessageHistory](../API/Sora.Entities.Base/SoraApi/GetGroupMessageHistory.md)

增加API [GetOnlineClients](../API/Sora.Entities.Base/SoraApi/GetOnlineClients.md)

增加Event [OnClientStatusChangeEvent](../API/Sora.Server.ServerInterface/EventInterface/OnClientStatusChangeEvent.md)

## v0.5.0 <Badge text="gocq v0.9.38"/>   <Badge text="Breaking Change" type="error"/>

删除Tool命名空间，移动工具集到单独的合集中[YukariToolBox](https://github.com/Yukari316/YukariToolBox)

API [GetMessages](../API/Sora.Entities.Base/SoraApi/GetMessages.md) 增加消息列处理

## v0.4.19 <Badge text="gocq v0.9.38"/>

稳定性更新

优化服务器连接管理逻辑

## v0.4.18 <Badge text="gocq v0.9.38"/>

优化框架底层通讯处理

## v0.4.17 <Badge text="gocq v0.9.38"/>

API [GetMessages](../API/Sora.Entities.Base/SoraApi/GetMessages.md) 增加 [Group](../API/Sora.Entities/Group.md) 实例返回

修正部分XML注释

优化框架错误处理

## v0.4.16 <Badge text="gocq v0.9.38"/>

增加API [DownloadFile](../API/Sora.Entities.Base/SoraApi/DownloadFile.md)

增加CQ码 [CQFlashImage](../API/Sora.Entities.CQCodes/CQCode/CQFlashImage.md) 用于发送闪照

增加 [LogLevel](../API/Sora.Enumeration/LogLevel.md) 枚举,并将控制台log等级控制改为此枚举

增加 [AsyncExtensions](../API/Sora.Extensions/AsyncExtensions.md) 类,用于扩展异步执行方法中的错误获取

[GetUserInfo](../API/Sora.Entities.Base/SoraApi/GetUserInfo.md) API支持用户QID的获取

删除CQ码 [CQImage](../API/Sora.Entities.CQCodes/CQCode/CQImage.md) 的闪照选项

修改事件参数 [GroupMemberChangeEventArgs](../API/Sora.EventArgs.SoraEvent/GroupMemberChangeEventArgs.md) 的SubType属性为公有属性 [#9](https://github.com/Yukari316/Sora/issues/9)

## v0.4.15 <Badge text="gocq v0.9.30"/>

修正不合理的权限分配

## v0.4.14 <Badge text="gocq v0.9.30"/>

添加交流群log

## v0.4.13 <Badge text="gocq v0.9.30"/>

增加消息类判断合并转发的方法 [IsForwardMessage](../API/Sora.Entities/Message/IsForwardMessage.md)

增加匿名用户禁言API [EnableGroupAnonymousMute](../API/Sora.Entities.Base/SoraApi/EnableGroupAnonymousMute.md)

增加匿名用户实例 [Anonymous](../API/Sora.Entities/Anonymous.md)

增加自定义消息节点实例 [CustomNode](../API/Sora.Entities.CQCodes.CQCodeModel/CustomNode.md)

修复消息事件参数的逻辑错误

重写合并转发的发送方式

## v0.4.12 <Badge text="gocq v0.9.30"/>

修复框架在部分情况下无法收到API返回的问题

## v0.4.11 <Badge text="gocq v0.9.30"/>

修改框架的连接请求路径检查

在此版本后将不再支持API/Event分路径的请求方式，只支持Universal的双向请求方式

## v0.4.10 <Badge text="gocq v0.9.30"/>

修复禁言时长为60s时产生的参数越界错误

## v0.4.9 <Badge text="gocq v0.9.30"/>   <Badge text="Breaking Change" type="error"/>

增加API [GetLoginUserId](../API/Sora.Entities.Base/SoraApi/GetLoginUserId.md)

移动命名空间 Sora.Enumeration.ApiEnum 到 [Sora.Enumeration.ApiType](../API/Sora.md#sora-enumeration-apitype-namespace)

## v0.4.8 <Badge text="gocq v0.9.30"/>

控制台Log增加无Log输出的选项

优化连接管理器

优化消息处理方式 by [wuyu8512](https://github.com/wuyu8512) [#4](https://github.com/Yukari316/Sora/pull/4)

## v0.4.7 <Badge text="gocq v0.9.30"/>

修正私聊API中的错误逻辑 by [wuyu8512](https://github.com/wuyu8512) [#3](https://github.com/Yukari316/Sora/pull/3)

## v0.4.6 <Badge text="gocq v0.9.30"/>

重写API回调机制

修复某些离谱的情况下API超时的问题

## v0.4.5 <Badge text="gocq v0.9.30"/>

优化多线程安全

优化服务器初始化逻辑

优化API逻辑

删除 ClientType 枚举类型

## v0.4.4 <Badge text="gocq v0.9.30"/>

在 [ConnectionEventArgs](../API/Sora.EventArgs.WSSeverEvent/ConnectionEventArgs.md) 中加入selfid字段

## v0.4.3 <Badge text="gocq v0.9.30"/>

修复了错误的注释

## v0.4.2 <Badge text="gocq v0.9.30"/>   <Badge text="Breaking Change" type="error"/>

重写服务器底层事件回调

删除回调 OnPongAsync

新增回调 [OnHeartBeatTimeOut](../API/Sora.Server/ConnectionManager/OnHeartBeatTimeOut.md)

移动回调 [OnOpenConnectionAsync](../API/Sora.Server/ConnectionManager/OnOpenConnectionAsync.md) 和 [OnCloseConnectionAsync](../API/Sora.Server/ConnectionManager/OnCloseConnectionAsync.md)

## v0.4.1 <Badge text="gocq v0.9.30"/>

修复在某些时候发送空消息导致崩溃的问题

## v0.4.0 <Badge text="gocq v0.9.30"/>   <Badge text="Breaking Change" type="error"/>

:::danger 注意
0.4.0版本之前的版本心跳包管理有严重bug

请尽快更新框架版本至0.4.0
:::

重写WebSocket服务器管理逻辑，增加框架稳定性

删除API 关闭WebSocket连接API

删除API WebSocket服务器API

## v0.3.3 <Badge text="gocq v0.9.30"/>

优化框架

## v0.3.2 <Badge text="gocq v0.9.30"/>

修复对windows之外平台支持的文件IO错误

## v0.3.1 <Badge text="gocq v0.9.30"/>

添加CQ码 [自定义音乐](../API/Sora.Entities.CQCodes/CQCode/CQCustomMusic.md)

## v0.3.0 <Badge text="gocq v0.9.30"/>

升级.Net SDK版本至 [5.0.100](https://dotnet.microsoft.com/download/dotnet/5.0)

## v0.2.4 <Badge text="gocq v0.9.30"/>

增加API [获取群文件系统信息](../API/Sora.Entities.Base/SoraApi/GetGroupFileSysInfo.md)

增加API [获取群根目录文件列表](../API/Sora.Entities.Base/SoraApi/GetGroupFilesByFolder.md)

增加API [获取群文件资源链接](../API/Sora.Entities.Base/SoraApi/GetGroupFileUrl.md)

修改框架部分Log

## v0.2.3 <Badge text="gocq v0.9.29-fix2"/>

新增API [获取群系统消息](../API/Sora.Entities.Base/SoraApi/GetGroupSystemMsg.md)

新增事件 [离线文件接收事件](../API/Sora.Server.ServerInterface/EventInterface/OnOfflineFileEvent.md)

## v0.2.2 <Badge text="gocq v0.9.29-fix2"/>

修改包logo

## v0.2.1 <Badge text="gocq v0.9.29-fix2"/>

增加发送消息的重载

## v0.2.0 <Badge text="未发布" type="warning"/>

调整框架结构

## v0.1.8 <Badge text="未发布" type="warning"/>

增加掉线回调

## ~~v0.1.7 不存在的版本号~~

## v0.1.6 <Badge text="未发布" type="warning"/>

更新API支持到gocq 0.9.29

## ~~v0.1.5 不存在的版本号~~

## v0.1.4 <Badge text="未发布" type="warning"/>

更新包信息

## v0.1.3 <Badge text="未发布" type="warning"/>

优化全局错误文本

优化全局异常处理

优化服务器启动方式

## v0.1.2 <Badge text="未发布" type="warning"/>

修正XML注释  by [XiaoHe321](https://github.com/xh321)

## v0.1.1 <Badge text="未发布" type="warning"/>

增加大部分常用CQ码

删除过时CQ码

添加CQ构建方法

添加API调用接口

添加多个API

结构调整

## v0.1.0 <Badge text="未发布" type="warning"/>

框架初版
