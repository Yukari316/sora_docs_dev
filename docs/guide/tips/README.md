---
title: 我不需要Main函数
---

::: warning 注意
以下文档涉及到C#9一个船新的特性

他可以让C#的入口点脚本化

如果没读过C#9新特性文档的话就不要看了

C#9 新特性介绍文档:[C# Language Version History](https://github.com/dotnet/csharplang/blob/master/Language-Version-History.md)
:::

# 去掉多余的Main

其实就是把整个程序入口点的Main给扬了

然后整段代码就变的像是脚本一样了

~~变了啊啊啊啊啊啊啊~~

示例代码：

```csharp
using System.Threading.Tasks;
using Sora;

//初始化服务器实例
SoraWSServer server = new SoraWSServer(new ServerConfig());
//群消息接收回调
server.Event.OnGroupMessage += async (sender, eventArgs) =>
{
	//最简单的复读（x
    await eventArgs.Repeat();
};
//启动服务器
await server.StartServerAsync();
```

仅此而已（挠头