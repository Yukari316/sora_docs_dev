# SoraServiceFactory.CreateService method

创建一个Sora服务

```csharp
public static ISoraService CreateService(ISoraConfig config, Action<Exception> crashAction = null)
```

| parameter | description |
| --- | --- |
| config | 配置文件 |
| crashAction | 发生未处理异常时的回调 |

## Exceptions

| exception | condition |
| --- | --- |
| DataException | 数据初始化错误 |
| ArgumentNullException | 空配置文件错误 |
| ArgumentOutOfRangeException | 参数错误 |
| ArgumentException | 配置文件类型错误 |

## See Also

* interface [ISoraService](../../Sora.Interfaces/ISoraService.md)
* interface [ISoraConfig](../../Sora.Interfaces/ISoraConfig.md)
* class [SoraServiceFactory](../SoraServiceFactory.md)
* namespace [Sora](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
