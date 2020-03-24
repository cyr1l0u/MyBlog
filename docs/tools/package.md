---
sidebar: auto
---
# 包管理器

::: tip 目录：
[[toc]]
:::

## NPM

> 官网：[ https://www.npmjs.com/ ]( https://www.npmjs.com/ )

```bash
# 设置淘宝镜像
npm config set registry http://registry.npm.taobao.org
npm install #安装模块
npm uninstall #卸载模块
# 安装依赖
npm i [package] -s # 在项目中安装指依赖
npm i [package] -D # 在项目中安装开发依赖
npm i [package] -g # 全局安装
#运行脚本指令
npm run [script]
#查看npm配置
npm config list
#npm配置淘宝镜像
npm config set registry https://registry.npmjs.org/
```

>NPM发布自己的组件包
>
>参考：[手把手教你如何用npm发布包]( https://juejin.im/post/5d2708e26fb9a07f06559812 )

## YARN（推荐）

> 官网：[ https://yarn.bootcss.com/ ]( https://yarn.bootcss.com/ )

```bash
# 初始化项目
yarn init 
# 安装依赖
yarn add [package] # 在项目中安装指依赖
yarn add [package] -D # 在项目中安装开发依赖
yarn global add [package] # 全局安装
# 删除依赖
yarn remove [package] 
# 安装所有依赖
yarn install 
# 设置淘宝镜像
yarn config set registry http://registry.npm.taobao.org
#运行脚本指令
yarn [script]
#查看yarn配置
yarn config list
#yarn配置淘宝镜像
yarn config set registry https://registry.npmjs.org/
```
