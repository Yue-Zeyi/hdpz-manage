<template>
  <div class="loginbody">
    <el-form :model="loginForm" class="login-container">
      <h3>
        <img src="../assets/images/alogo.png" alt="" />
      </h3>
      <el-form-item>
        <el-input type="input" placeholder="请输入账号" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCurrentInstance, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup() {
    const loginForm = reactive({
      username: 'admin',
      password: 'admin',
    });
    const { proxy } = getCurrentInstance();
    const store = useStore();
    const router = useRouter();
    const login = async () => {
      const res = await proxy.$api.getMenu(loginForm);
      // console.log(res);
      store.commit('setMenu', res.menu);
      store.commit('addMenu', router);
      store.commit('setToken', res.token);
      // 获取登录的用户名并保存到vuex
      store.commit('getusername', loginForm.username);
      router.push({
        name: 'home',
      });
      ElMessage({
        message: '登录成功',
        type: 'success',
      });
    };
    return { loginForm, login };
  },
};
</script>

<style lang="less" scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url('../assets/images/login.jpg');
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
}
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 180px auto;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>
