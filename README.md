# 好店铺子管理系统

Vue3 + Vite + Vuex + Vue-Router + Element-Plus + Echarts + Axios + mockJs 后台管理系统。

本项目是一套基于 vue3 和 element-plus 开发的后台管理系统，包含数据面板、用户管理、分类管理、商品管理、订单管理、设置等模块。

## 项目预览

![](https://pic.zeyiwl.cn/yunimg/20221030202431.png)

![](https://pic.zeyiwl.cn/yunimg/20221030202509.png)

![](https://pic.zeyiwl.cn/yunimg/20221031225949.png)

![](https://pic.zeyiwl.cn/yunimg/20221030202534.png)

![](https://pic.zeyiwl.cn/yunimg/20221030202620.png)

![](https://pic.zeyiwl.cn/yunimg/20221031205604.png)

![](https://pic.zeyiwl.cn/yunimg/20221031225710.png)

![](https://pic.zeyiwl.cn/yunimg/20221031225849.png)

目前就这么多页面了，后续又空再加。

## 功能特性

- 脱离后端自主开发测试
- mockJS 数据模拟
- **axios**深度封装
- 动态路由配置
- 面包屑、标签栏
- 多用户权限登录
- 分类及商品分级

## 环境依赖

- Node.js：v16.15.0
- Vue：3.2.37
- vite：3.1.0
- vuex：4.1.0

## 部署步骤

```
git clone git@github.com:Yue-Zeyi/hdpz-manage.git
```

```
npm install
```

```
npm run dev
```

## 目录结构

```
hdpz-manage
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  ├─ api.js
│  │  ├─ mock.js
│  │  ├─ mockData
│  │  │  ├─ home.js
│  │  │  ├─ permission.js
│  │  │  └─ user.js
│  │  └─ request.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ alogo.png
│  │  │  ├─ login.jpg
│  │  │  ├─ logo.png
│  │  │  ├─ user-default.png
│  │  │  └─ user.png
│  │  ├─ less
│  │  │  ├─ index.less
│  │  │  └─ reset.less
│  │  └─ vue.svg
│  ├─ components
│  │  ├─ CommonAside.vue
│  │  ├─ CommonHeader.vue
│  │  └─ CommonTab.vue
│  ├─ config
│  │  └─ index.js
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  ├─ style.css
│  └─ views
│     ├─ Article
│     │  └─ Article.vue
│     ├─ Goods
│     │  └─ Goods.vue
│     ├─ Home
│     │  └─ Home.vue
│     ├─ Login.vue
│     ├─ Main.vue
│     ├─ Order
│     │  └─ Order.vue
│     ├─ Sort
│     │  └─ Sort.vue
│     ├─ System
│     │  ├─ Base.vue
│     │  └─ Pay.vue
│     └─ User
│        ├─ User.vue
│        └─ UserCenter.vue
└─ vite.config.js

```
