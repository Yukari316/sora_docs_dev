# Image structure

图片

```csharp
public struct Image
```

## Public Members

| name | description |
| --- | --- |
| [Id](Image/Id.md) { get; } | 发送秀图时的特效id，默认为40000 |
| [ImgFile](Image/ImgFile.md) { get; } | 文件名/绝对路径/URL/base64 |
| [ImgType](Image/ImgType.md) { get; } | 图片类型 |
| [ThreadCount](Image/ThreadCount.md) { get; } | 通过网络下载图片时的线程数，默认单线程。 |
| [Url](Image/Url.md) { get; } | 图片链接 |
| [UseCache](Image/UseCache.md) { get; } | 只在通过网络 URL 发送时有效，表示是否使用已缓存的文件 |

## See Also

* namespace [Sora.Entities.MessageElement.CQModel](../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
