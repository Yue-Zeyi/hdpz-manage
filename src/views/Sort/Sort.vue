<template>
  <div class="addbtn">
    <el-button type="primary" @click="dialogVisible = true">新增分类</el-button>
  </div>
  <div class="table">
    <el-table :data="goodsData" style="width: 100%">
      <el-table-column prop="id" sortable label="序号" />
      <el-table-column prop="sortname" label="分类名称" />
      <el-table-column prop="sortdes" label="分类描述" min-width="180" />
      <el-table-column prop="sortimg" label="商品数量" />
      <el-table-column prop="addtime" label="添加时间" />
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog v-model="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :inline="true" :model="formSort" ref="sortForm">
      <el-row style="justify-content: center">
        <el-form-item
          label="分类名称"
          prop="sortname"
          :rules="[{ required: true, message: '分类名称是必填项' }]"
        >
          <el-input v-model="formSort.sortname" placeholder="请输入分类名称" />
        </el-form-item>
        <el-form-item
          label="分类描述"
          prop="sortdes"
          :rules="[{ required: true, message: '分类描述是必填项' }]"
        >
          <el-input v-model="formSort.sortdes" placeholder="请输入分类描述" /> </el-form-item
      ></el-row>
      <el-row style="justify-content: center">
        <el-form-item>
          <el-button type="primary" @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    let goodsData = ref([]);
    const getGoodsData = async () => {
      let res = await proxy.$api.getGoodsData();
      // console.log(res);
      goodsData.value = res;
    };
    const handleSerach = () => {
      config.name = formInline.keyword;
      getUserData(config);
    };
    // 控制模态框的显示隐藏
    const dialogVisible = ref(false);
    const handleClose = (done) => {
      ElMessageBox.confirm('确定关闭吗？')
        .then(() => {
          proxy.$refs.sortForm.resetFields();
          done();
        })
        .catch(() => {
          // catch error
        });
    };
    // 添加分类的form数据
    const formSort = reactive({
      sortname: '', //添加用户的用户名
      sortdes: '',
    });
    // 添加分类/修改分类
    // 区分编辑和新增

    // 编辑用户
    const handleEdit = (row) => {
      // console.log(row);
      // 浅拷贝

      dialogVisible.value = true;
      // 异步
      proxy.$nextTick(() => {
        Object.assign(formSort, row);
      });
    };
    const handleCancel = () => {
      dialogVisible.value = false;
      proxy.$refs.sortForm.resetFields();
    };
    onMounted(() => {
      getGoodsData();
    });
    return {
      goodsData,
      handleSerach,
      handleClose,
      dialogVisible,
      handleEdit,
      formSort,
      handleCancel,
    };
  },
});
</script>

<style lang="less" scoped>
.table {
  position: relative;
}
.addbtn {
  border-bottom: 1px solid var(--el-border-color);
  button {
    margin-bottom: 10px;
  }
}
</style>
