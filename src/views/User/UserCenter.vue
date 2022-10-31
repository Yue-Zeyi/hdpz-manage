<template>
  <el-form ref="resetFormData" :model="formInline">
    <el-form-item label="头像" prop="image">
      <el-avatar :src="getImgSrc('user')" />
      <div class="updateimg">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"> <Plus /></el-icon><span>上传新头像</span>
        </el-upload>
      </div></el-form-item
    >
    <el-form-item label="账号" prop="name">
      <el-input v-model="formInline.name" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="昵称" prop="username">
      <el-input v-model="formInline.username" placeholder="请输入昵称"></el-input>
    </el-form-item>
    <el-form-item
      label="原密码"
      prop="oldpassword"
      :rules="[{ required: true, message: '原密码是必填项' }]"
    >
      <el-input v-model="formInline.oldpassword" placeholder="请输入原密码"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="password">
      <el-input
        v-model="formInline.password"
        placeholder="请输入新密码，如不修改留空即可"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">修改</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const getImgSrc = (user) => {
      return new URL(`../../assets/images/${user}.png`, import.meta.url).href;
    };
    const resetFormData = ref(null);
    const store = useStore();
    const formInline = reactive({
      name: store.state.username,
      username: '',
      oldpassword: '',
      password: '',
    });

    const resetForm = () => {
      resetFormData.value.resetFields();
    };
    return {
      getImgSrc,
      resetForm,
      resetFormData,
      formInline,
    };
  },
});
</script>

<style lang="less" scoped>
.updateimg {
  padding-left: 10px;
  padding-top: 10px;
}
</style>
