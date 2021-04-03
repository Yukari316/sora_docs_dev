# MessageBody indexer

索引器

```csharp
public CQCode this[int index] { get; set; }
```

| parameter | description |
| --- | --- |
| index | 索引 |

## Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | 索引超出范围 |
| NullReferenceException | 读取到了空消息段 |

## See Also

* struct [CQCode](../../Sora.Entities.MessageElement/CQCode.md)
* class [MessageBody](../MessageBody.md)
* namespace [Sora.Entities](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->