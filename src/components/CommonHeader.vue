<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" plain @click="handleCollapse">
        <el-icon size="20"> <Fold /></el-icon> </el-button
      >&nbsp;
      <el-breadcrumb separator="/" class="bread">
        <!-- 首页是一定存在的，所以直接写死 -->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{
          current.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="getImgSrc('user')" alt="" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goCenter">个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import CommonTab from '../components/CommonTab.vue';
export default defineComponent({
  setup() {
    let store = useStore();
    // const imgSrc = require('../assets/images/user-default.png');
    const getImgSrc = (user) => {
      return new URL(`../assets/images/${user}.png`, import.meta.url).href;
    };
    let handleCollapse = () => {
      store.commit('updataIsCollapse');
    };
    // 计算属性
    const current = computed(() => {
      return store.state.currentMenu;
    });
    const router = useRouter();
    const handleLoginOut = () => {
      store.commit('cleanMenu');
      router.push({
        name: 'login',
      });
      ElMessage({
        message: '你已成功退出登录.',
        type: 'warning',
      });
    };
    const goCenter = () => {
      router.push({
        name: 'usercenter',
      });
    };
    return {
      getImgSrc,
      handleCollapse,
      current,
      handleLoginOut,
      goCenter,
    };
  },
  components: {
    CommonTab,
  },
});
</script>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #333;
  }
}
:deep(.bread span) {
  color: #333 !important;
  cursor: pointer !important;
}
</style>
