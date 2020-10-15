---
title: 修改Main函数
---

:::warning 注意
之后的章节都有可能使用到C#9的新特性(比如这一节的异步Main函数)

请确认自己已经充分了解C#9新的语法特性再继续阅读

C#9 新特性介绍文档:[C# Language Version History](https://github.com/dotnet/csharplang/blob/master/Language-Version-History.md)
:::

# 修改Main函数

## 修改为异步执行

由于原Main函数是一个同步函数，比如这样的Main函数

```csharp
static void Main(string[] args)
        {
        
        }
```

所以在开始编写bot代码前，我们需要将Mian函数修改为异步函数

将Main函数修改为以下代码：

```csharp
static async Task Main(string[] args)
        {
            
        }
```
