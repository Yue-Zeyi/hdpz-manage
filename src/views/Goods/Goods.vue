<template>
  <div class="addbtn">
    <el-button type="primary" @click="dialogVisible = true">添加商品</el-button>
  </div>
  <el-table
    :data="tableData"
    row-key="id"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
  >
    <el-table-column type="selection" />
    <el-table-column prop="id" label="id" />
    <el-table-column prop="fruit" label="商品名称" show-overflow-tooltip />
    <el-table-column prop="pic" label="缩略图">
      <template #default="scope"> <img :src="scope.row.pic" alt="" class="goodsimg" /> </template>
    </el-table-column>

    <el-table-column prop="price" label="商品价格">
      <template #default="scope"> {{ scope.row.price }} 元</template>
    </el-table-column>

    <el-table-column prop="adddate" label="添加时间"> </el-table-column>
    <el-table-column label="上架" prop="state">
      <template #default="scope"> <el-switch v-model="scope.row.state" /></template>
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue';
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    let tableData = ref([]);
    let value1 = ref();
    const getGoodsData = async () => {
      let res = await proxy.$api.getGoodsData();
      // console.log(res);
      // tableData.value = res;
      let arr = [];
      res.forEach((item, index) => {
        if (item.chilren !== null) {
          if (item.children === undefined) {
            return null;
          }
          let newarr = item.children;
          // console.log(newarr);
          arr.push(...newarr);
        } else {
          return false;
        }
        // console.log(arr);
        tableData.value = arr;
        value1.value = arr.state;
      });
    };

    onMounted(() => {
      getGoodsData();
    });
    return {
      tableData,
      value1,
    };
  },
});
</script>

<style lang="less" scoped>
.goodsimg {
  width: 50px;
  height: 50px;
}
.addbtn {
  border-bottom: 1px solid var(--el-border-color);
  button {
    margin-bottom: 10px;
  }
}
</style>
