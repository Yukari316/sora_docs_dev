# ConnectionManager.ServerAsyncCallBackHandler&lt;TEventArgs&gt; delegate

服务器事件回调

```csharp
public delegate ValueTask ServerAsyncCallBackHandler<in TEventArgs>(Guid sender, 
    TEventArgs eventArgs)
    where TEventArgs : EventArgs;
```

| parameter | description |
| --- | --- |
| TEventArgs | 事件参数 |
| sender | Bot Id |
| eventArgs | 事件参数 |

## See Also

* class [ConnectionManager](ConnectionManager.md)
* namespace [Sora.Net](../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->
