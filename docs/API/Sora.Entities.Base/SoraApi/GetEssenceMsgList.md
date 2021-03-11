# SoraApi.GetEssenceMsgList method

获取群精华消息列表

```csharp
public ValueTask<(APIStatusType apiStatus, List<EssenceInfo> essenceInfos)> GetEssenceMsgList(
    long gid)
```

| parameter | description |
| --- | --- |
| gid | 群号 |

## Return Value

精华消息列表

## See Also

* enum [APIStatusType](../../Sora.Enumeration.ApiType/APIStatusType.md)
* struct [EssenceInfo](../../Sora.Entities.Info/EssenceInfo.md)
* class [SoraApi](../SoraApi.md)
* namespace [Sora.Entities.Base](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->