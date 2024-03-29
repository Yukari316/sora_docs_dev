# SoraApi.GetGroupRootFiles method

获取群根目录文件列表

```csharp
public ValueTask<(ApiStatus apiStatus, List<GroupFileInfo> groupFiles, List<GroupFolderInfo> groupFolders)> 
    GetGroupRootFiles(long groupId)
```

| parameter | description |
| --- | --- |
| groupId | 群号 |

## Return Value

[`ApiStatusType`](../../Sora.Enumeration.ApiType/ApiStatusType.md) API执行状态

`groupFiles` 文件列表

`groupFolders` 文件夹列表

## See Also

* struct [ApiStatus](../../Sora.Entities/ApiStatus.md)
* struct [GroupFileInfo](../../Sora.Entities.Info/GroupFileInfo.md)
* struct [GroupFolderInfo](../../Sora.Entities.Info/GroupFolderInfo.md)
* class [SoraApi](../SoraApi.md)
* namespace [Sora.Entities.Base](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
