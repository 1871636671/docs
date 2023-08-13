# Koa项目实战

## 介绍

Koa 是下一代的 Node.js 的 Web 框架。由 Express 团队设计。旨在提供一个更小型、更富有表现力、更可靠的 Web 应用和 API 的开发基础。

## 初始化项目

```js
npm init
```

完成后安装项目依赖
```js
npm i koa koa-router koa-jwt mysql2 
```

- koa-router 路由中间件
- mysql2 连接/操作数据库
- jsonwebtoken   JSON Web Token的生成和验证,用于登录鉴权
- koa-jwt 验证jwt的中间件,插件包含了`jsonwebtoken`,项目内可以直接引入,无需安装