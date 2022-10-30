# 好店铺子管理系统

## 项目简介

基于 vue3 和 element-plus 开发的电商后台管理系统。

![image-20221030202430634](https://pic.zeyiwl.cn/yunimg/20221030202431.png)

![image-20221030202508898](https://pic.zeyiwl.cn/yunimg/20221030202509.png)

![image-20221030202533913](https://pic.zeyiwl.cn/yunimg/20221030202534.png)

![image-20221030202620594](https://pic.zeyiwl.cn/yunimg/20221030202620.png)

## 功能特性

技术栈：**vue3 全家桶**+**element-plus**+**mockjs**+**axios**+**eChart5**

- 脱离后端自主开发测试
- **axios**深度封装
- 动态路由配置
- mockJS 模拟数据

## 环境依赖

- Node.js：v16.15.0
- Vue：3.2.37
- vie：3.1.0
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

```bash
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
│        └─ User.vue
└─ vite.config.js
```
