# SoraApi.SetGroupMemberSpecialTitle method

设置群成员专属头衔

```csharp
public ValueTask<ApiStatus> SetGroupMemberSpecialTitle(long groupId, long userId, 
    string specialTitle)
```

| parameter | description |
| --- | --- |
| groupId | 群号 |
| userId | 用户id |
| specialTitle | 专属头衔(为空时清空) |

## See Also

* struct [ApiStatus](../../Sora.Entities/ApiStatus.md)
* class [SoraApi](../SoraApi.md)
* namespace [Sora.Entities.Base](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
