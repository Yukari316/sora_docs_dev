# SoraApi.GetForwardMessage method

获取合并转发消息

```csharp
public ValueTask<(ApiStatus apiStatus, List<Node> nodeArray)> GetForwardMessage(string forwardId)
```

| parameter | description |
| --- | --- |
| forwardId |  |

## Return Value

[`ApiStatusType`](../../Sora.Enumeration.ApiType/ApiStatusType.md) API执行状态

`nodeArray` 消息节点列表

## See Also

* struct [ApiStatus](../../Sora.Entities.Info/ApiStatus.md)
* struct [Node](../../Sora.Entities.MessageElement.CQModel/Node.md)
* class [SoraApi](../SoraApi.md)
* namespace [Sora.Entities.Base](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
