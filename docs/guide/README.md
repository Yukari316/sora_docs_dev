---
prev: false
next: ./gettingstart/
---

# 前言

:::tip 小提示

如果觉得太无聊就跳过这一节吧！

~~反正就是介绍框架的，也没人会看就是了~~

:::

::: warning 注意
本框架是在[Go-Cqhttp](https://github.com/Mrs4s/go-cqhttp)(版本:[0.9.38](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.38))下进行调试的

如使用其他平台可能会出现兼容性的问题
:::

## 简介

这是一个基于[OneBot](https://github.com/howmanybots/onebot)协议的 [C#/.Net 5](https://dotnet.microsoft.com/download/dotnet/5.0) 异步机器人开发框架

需要一定的.Net开发知识 [C# 编程指南](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/)

使用本框架可以快捷的开发一个跨平台的聊天机器人

只要是支持[OneBot](https://github.com/howmanybots/onebot)通讯协议的插件，都可以使用此框架进行交互

并且框架使用了异步调用来获得更快的消息处理