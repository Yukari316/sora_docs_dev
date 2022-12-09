---
prev: false
next: ./getting_start
---

# 注意事项

:::danger 注意
本框架只支持Universal连接方式的Array上报格式

请将onebot端的数据上报格式修改为Array格式
:::

:::warning Log控制台输出将默认禁用
`1.0.0-rc28`版本之后的log将会默认关闭控制台的输出

如果需要启用请使用以下代码

```csharp
//设置log
Log.LogConfiguration
   .EnableConsoleOutput() //启用控制台输出
   .SetLogLevel(LogLevel.Debug); //设置log等级
```
:::

::: warning 注意
本框架是在[Go-Cqhttp](https://github.com/Mrs4s/go-cqhttp)(版本:[1.0.0-rc3](https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.0.0-rc3))下进行调试的

如使用其他平台可能会出现兼容性的问题
:::

:::warning 安全性警告
字符串转换的功能已经被评估为不安全的

该功能可能会在onebot v12时废弃

请提前做好迁移准备

如果需要持久化的消息段功能，将会在后续版本添加 `json` 的持久化方式
:::