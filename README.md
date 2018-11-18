# myblog

[![Build Status](https://travis-ci.com/PlusLius/myblog.svg?branch=master)](https://travis-ci.com/PlusLius/myblog)

## 敏捷开发实践

1. 明确需求，设计原型图

> 第一版先实现环境搭建，快速上线为主

   ![原型图](./protoImg/1.jpg)
   
2. 开发环境搭建

   - [x] 版本管理工具：git,
   - [x] 代码托管平台：github,
   - [x] 持续集成平台：travis,
   - [x] 代码编辑器：vscode,
   - [x] 风格检查工具：ESLint,
   - [x] 测试工具: Karma,istanbul,chai,mocha
   - [x] 开发框架(暂定): vue,vuex,vue-rout,axios,koa2
   - [x] 数据库: redis, mongoDB 
   - [x] 开发语言: javascript
   - [x] 打包工具webpack
   - [x] 语言编译工具typescript

## 架构设计

```
1. 目录结构搭建
├── .gitignore //忽略文件
├── README.md //项目简介
├── assets //静态资源存放目录
├── build //打包工具配置目录
│   └── webpack.config.js
├── package.json //包管理配置文件
├── protoImg //原型图目录
│   └── 1.jpg
├── src //开发目录
│   ├── common //存放公共组件
│   └── components //组件
└── util //存放工具库
└── test //测试目录

2. tasking拆解
 (1). UI界面无特殊要求，先上线
 (2). 真正需要的环境
     1. 打包环境 webpack
     2. 测试环境 ui功能测试
     3. 集成环境 travis平台
     4. 可以先无后台数据

3. 在gh-pages分支上开发

4. 安装环境
 cnpm i -D nightmare webpack webpack-cli//先完成ui功能测试,打包工具配置
 cnpm i -D //安装测试框架和断言库
 cnpm i -D html-webpack-plugin//安装打包webpack打包html代码
 cnpm i -D webpack-dev-server //起服务器用来ui测试

5. travis测试
language: node_js
node_js:
 - "node"
script:
  - "npm test"
branches:
  only:
  - gh-pages

   
```

## 第2版需求

> 对博客添加分类功能

！[原型图](./protoImg/2.png)

1. 明确需求
   - [ ] 完成分类功能前后台数据交互

2. 需要解决的问题
   - [ ] 静态文件服务
   - [ ] 路由设计
   - [ ] 数据存储
   - [ ] 页面渲染(使用服务端渲染)


## 技术选型
 - [x] 开发语言： Node
 - [x] 后台开发框架： Koa
 - [x] 数据存储：MongoDN
 - [x] Session存储：Redis
 - [x] 页面模版：vue

## 路由设计

```
/ 默认根目录
/blogList 获取全部博客列表
/kind/:kindName 获取某个分类下的博客列表
/kindList 获取分类列表
/blog/:blogId 根据id获取博客内容
/modify/blog/:blogId/:kindName 修改一篇博客的分类
/modify/kind/:kindName 修改分类的名称
/new/kind/:kindName 新增分类
/delete/blog/:blogId 删除一篇博客
/delete/kind/:kindName 删除一个分类
```
