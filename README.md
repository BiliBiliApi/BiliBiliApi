本项目会尽快重写
<h1 align="center">BiliBiliApi</h1>

<p align="center">哔哩哔哩 NodeJS 版 API</p>

<p align="center"><Badge type="tip" text="版本号：^1.0.0-alpha.02" /> <Badge type="info" text="更新时间：2023.05.14" /> <Badge type="warning" text="版本类型：Alpha" /></p>

<p align="center" style="display: flex;justify-content: center;">
<a href="https://github.com/BiliBiliApi/BiliBiliApi/issues" style="text-decoration:none">
        <img src="https://img.shields.io/github/issues/BiliBiliApi/BiliBiliApi.svg" alt="GitHub issues"/>
</a>
&nbsp;
<a href="https://github.com/BiliBiliApi/BiliBiliApi/stargazers" style="text-decoration:none" >
        <img src="https://img.shields.io/github/stars/BiliBiliApi/BiliBiliApi.svg" alt="GitHub stars"/>
</a>
&nbsp;
<a href="https://github.com/BiliBiliApi/BiliBiliApi/network" style="text-decoration:none" >
        <img src="https://img.shields.io/github/forks/BiliBiliApi/BiliBiliApi.svg" alt="GitHub forks"/>
</a>
&nbsp;
<a href="https://github.com/BiliBiliApi/BiliBiliApi/blob/master/LICENSE" style="text-decoration:none" >
        <img src="https://img.shields.io/badge/License-MIT-lightgrey.svg" alt="GitHub license"/>
</a>
</p>

这是一个基于 Express + Axios 的 Nodejs 项目，一切仅供学习参考，该支持的还是要支持的，不然杰伦喝不起奶茶了。

`哔哩哔哩` NodeJS 版 API，全部接口已升级到最新，具备完善的文档，目前有 `哔哩哔哩` 大部分接口并且在维护更新，没有的 `哔哩哔哩` 接口正在使用特殊手段(黑箱法、控制变量法、代码逆向分析、拆包及反编译法、网络抓包法)进行新增并更新！

文档及其 Api 持续更新中...

> BiliBiliApi 尚未开发完成并尚未发布正式版。

> 为使用方便，降低门槛，数据传输安全，本项目仅支持 POST 方法。

# 部署

## 环境要求

需要 NodeJS 12+ 环境

## 安装

```shell
$ git clone git@github.com:BiliBiliApi/BiliBiliApi.git
$ cd BiliBiliApi
$ npm install
```

或者

```shell
$ git clone https://github.com/BiliBiliApi/BiliBiliApi.git
$ cd BiliBiliApi
$ npm install
```

## 运行
调用前务必阅读文档的`调用前须知`

```shell
$ node app.js
```

服务器启动默认端口为 3000

## Vercel 部署

v1.0.0-alpha.02 加入了 Vercel 配置文件,可以直接在 Vercel 下部署了,不需要自己的服务器

### 操作方法

1. fork 此项目
2. 在 Vercel 官网点击 `New Project`
3. 点击 `Import Git Repository` 并选择你 fork 的此项目并点击`import`
4. 点击 `PERSONAL ACCOUNT` 的 `select`
5. 直接点`Continue`
6. `PROJECT NAME`自己填,`FRAMEWORK PRESET` 选 `Other` 然后直接点 `Deploy` 接着等部署完成即可  

# 鸣谢

你们的存在，让社区更美好！

[![contributors](https://opencollective.com/bilibiliapi/contributors.svg?width=860&button=false)](https://github.com/BiliBiliApi/BiliBiliApi/graphs/contributors)

# 更新日志

[changelog](https://github.com/BiliBiliApi/BiliBiliApi/blob/master/CHANGELOG.md)

# License

[The MIT License (MIT)](https://github.com/BiliBiliApi/BiliBiliApi/blob/master/LICENSE)
