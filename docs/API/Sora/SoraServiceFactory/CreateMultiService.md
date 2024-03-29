# SoraServiceFactory.CreateMultiService method (1 of 2)

连续创建多个 Sora 服务实例

```csharp
public static List<ISoraService> CreateMultiService(IEnumerable<ISoraConfig> configList, 
    Action<Exception> crashAction = null)
```

| parameter | description |
| --- | --- |
| configList | 服务配置列表 |
| crashAction | 发生未处理异常时的统一回调 |

## Return Value

Sora 服务实例列表

## See Also

* interface [ISoraService](../../Sora.Interfaces/ISoraService.md)
* interface [ISoraConfig](../../Sora.Interfaces/ISoraConfig.md)
* class [SoraServiceFactory](../SoraServiceFactory.md)
* namespace [Sora](../../Sora.md)

---

# SoraServiceFactory.CreateMultiService method (2 of 2)

连续创建多个 Sora 服务实例

```csharp
public static List<ISoraService> CreateMultiService(ISoraConfig config, 
    Action<Exception> crashAction = null)
```

| parameter | description |
| --- | --- |
| config | 服务配置 |
| crashAction | 发生未处理异常时的统一回调 |

## Return Value

Sora 服务实例列表

## See Also

* interface [ISoraService](../../Sora.Interfaces/ISoraService.md)
* interface [ISoraConfig](../../Sora.Interfaces/ISoraConfig.md)
* class [SoraServiceFactory](../SoraServiceFactory.md)
* namespace [Sora](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
