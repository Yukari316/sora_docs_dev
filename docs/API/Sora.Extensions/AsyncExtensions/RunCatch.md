# AsyncExtensions.RunCatch method (1 of 4)

运行并检查错误

```csharp
public static Task RunCatch(this Task @this, Action<Exception> block = null)
```

| parameter | description |
| --- | --- |
| this | run method |
| block | error info out method |

## See Also

* class [AsyncExtensions](../AsyncExtensions.md)
* namespace [Sora.Extensions](../../Sora.md)

---

# AsyncExtensions.RunCatch method (2 of 4)

运行并检查错误

```csharp
public static ValueTask RunCatch(this ValueTask @this, Action<Exception> block = null)
```

| parameter | description |
| --- | --- |
| this | run method |
| block | error info out method |

## See Also

* class [AsyncExtensions](../AsyncExtensions.md)
* namespace [Sora.Extensions](../../Sora.md)

---

# AsyncExtensions.RunCatch&lt;T&gt; method (3 of 4)

运行并检查错误

```csharp
public static Task<T> RunCatch<T>(this Task<T> @this, Func<Exception, T> block = null)
```

| parameter | description |
| --- | --- |
| T | out type |
| this | run method |
| block | error info out method |

## Return Value

T

## See Also

* class [AsyncExtensions](../AsyncExtensions.md)
* namespace [Sora.Extensions](../../Sora.md)

---

# AsyncExtensions.RunCatch&lt;T&gt; method (4 of 4)

运行并检查错误

```csharp
public static ValueTask<T> RunCatch<T>(this ValueTask<T> @this, Func<Exception, T> block = null)
```

| parameter | description |
| --- | --- |
| T | out type |
| this | run method |
| block | error info out method |

## Return Value

T

## See Also

* class [AsyncExtensions](../AsyncExtensions.md)
* namespace [Sora.Extensions](../../Sora.md)

<!-- DO NOT EDIT: generated by xmldocmd for Sora.dll -->