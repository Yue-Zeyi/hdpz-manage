import Mock from 'mockjs';
export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body);
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 'house',
              url: 'Home/Home',
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'User/User',
            },
            {
              path: '/sort',
              name: 'sort',
              label: '分类管理',
              icon: 'Menu',
              url: 'Sort/Sort',
            },
            {
              path: '/goods',
              name: 'goods',
              label: '商品管理',
              icon: 'Goods',
              url: 'Goods/Goods',
            },
            {
              path: '/order',
              name: 'order',
              label: '订单管理',
              icon: 'List',
              url: 'Order/Order',
            },
            {
              path: '/article',
              name: 'article',
              label: '文章管理',
              icon: 'List',
              url: 'Article/Article',
            },
            {
              label: '系统设置',
              icon: 'location',
              path: '/system',
              url: 'System',
              children: [
                {
                  path: '/system/base',
                  name: 'base',
                  label: '基础配置',
                  icon: 'setting',
                  url: 'System/Pay',
                },
                {
                  path: '/system/pay',
                  name: 'pay',
                  label: '支付配置',
                  icon: 'setting',
                  url: 'System/Base',
                },
              ],
            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功',
        },
      };
    } else if (username !== 'admin') {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 'house',
              url: 'Home/Home',
            },
            {
              path: '/goods',
              name: 'goods',
              label: '商品管理',
              icon: 'Goods',
              url: 'Goods/Goods',
            },
            {
              path: '/order',
              name: 'order',
              label: '订单管理',
              icon: 'List',
              url: 'Order/Order',
            },
            {
              path: '/article',
              name: 'article',
              label: '文章管理',
              icon: 'List',
              url: 'Article/Article',
            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功',
        },
      };
    } else {
      return {
        code: 999,
        data: {
          message: '密码错误',
        },
      };
    }
  },
};
