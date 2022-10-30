<template>
  <el-aside :width="$store.state.isCollapse ? '200px' : '64px'">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#303133"
      text-color="#fff"
      :collapse="!$store.state.isCollapse"
      :collapse-transition="false"
    >
      <span v-show="$store.state.isCollapse">
        <img src="../assets/images/logo.png" alt="" srcset="" />
      </span>
      <h3 v-show="!$store.state.isCollapse">
        <el-icon><Monitor /></el-icon>
      </h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren()"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <component class="icons" :is="item.icon"></component>&nbsp;
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
        <template #title>
          <component class="icons" :is="item.icon"></component>&nbsp;
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subItem)"
        >
          <component class="icons" :is="subItem.icon"></component>&nbsp;
          <span>{{ subItem.label }}</span></el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const list = [
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'UserManage/UserManage',
      },
      {
        path: '/sort',
        name: 'sort',
        label: '分类管理',
        icon: 'Menu',
        url: 'SortManage/SortManage',
      },
      {
        path: '/goods',
        name: 'goods',
        label: '商品管理',
        icon: 'Goods',
        url: 'GoodsManage/GoodsManage',
      },
      {
        path: '/order',
        name: 'order',
        label: '订单管理',
        icon: 'List',
        url: 'OrderManage/OrderManage',
      },
      {
        path: '/article',
        name: 'article',
        label: '文章管理',
        icon: 'List',
        url: 'ArticleManage/ArticleManage',
      },
      {
        label: '系统设置',
        icon: 'location',
        path: '/other',
        icon: 'Tools',
        children: [
          {
            path: '/system/base',
            name: 'base',
            label: '基础配置',
            icon: 'setting',
            url: 'System/PayManage',
          },
          {
            path: '/system/pay',
            name: 'pay',
            label: '支付配置',
            icon: 'setting',
            url: 'System/BaseManage',
          },
        ],
      },
    ];
    const router = useRouter();
    const noChildren = () => {
      return asyncList.filter((item) => !item.children);
    };
    const hasChildren = () => {
      return asyncList.filter((item) => item.children);
    };
    const asyncList = store.state.menu;
    const clickMenu = (item) => {
      router.push({
        name: item.name,
      });
      // vuex来管理
      store.commit('selectMenu', item);
    };
    return {
      noChildren,
      hasChildren,
      clickMenu,
    };
  },
};
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}
.el-menu {
  border-right: none;
  span {
    height: 56px;
  }
  h3 {
    line-height: 56px;
    color: #fff;
    text-align: center;
  }
}
</style>
