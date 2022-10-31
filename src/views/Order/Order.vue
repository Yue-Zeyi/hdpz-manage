<template>
  <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
    <el-table-column
      prop="date"
      label="下单时间"
      sortable
      width="180"
      column-key="date"
      :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ]"
      :filter-method="filterHandler"
    />
    <el-table-column prop="name" label="商品名称" width="180" />
    <el-table-column prop="address" label="收货地址" :formatter="formatter" />

    <el-table-column
      prop="tag"
      label="状态"
      width="100"
      :filters="[
        { text: '已发货', value: '已发货' },
        { text: '待发货', value: '待发货' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag :type="scope.row.tag === '已发货' ? '' : 'success'" disable-transitions>{{
          scope.row.tag
        }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElTable } from 'element-plus';
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';

interface User {
  date: string;
  name: string;
  address: string;
  tag: string;
}

const tableRef = ref<InstanceType<typeof ElTable>>();

const resetDateFilter = () => {
  tableRef.value!.clearFilter(['date']);
};
// TODO: improvement typing when refactor table
const clearFilter = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  tableRef.value!.clearFilter();
};
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address;
};
const filterTag = (value: string, row: User) => {
  return row.tag === value;
};
const filterHandler = (value: string, row: User, column: TableColumnCtx<User>) => {
  const property = column['property'];
  return row[property] === value;
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: '小米12',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '待发货',
  },
  {
    date: '2016-05-02',
    name: '苹果16',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '待发货',
  },
  {
    date: '2016-05-04',
    name: '荣耀',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '待发货',
  },
  {
    date: '2016-05-01',
    name: 'OnePlus',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '待发货',
  },
  {
    date: '2016-05-03',
    name: '小米12',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '待发货',
  },
  {
    date: '2016-05-01',
    name: 'OnePlus',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '已发货',
  },
  {
    date: '2016-05-01',
    name: 'OnePlus',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '已发货',
  },
  {
    date: '2016-05-02',
    name: '苹果16',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '已发货',
  },
  {
    date: '2016-05-01',
    name: 'OnePlus',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '已发货',
  },
  {
    date: '2016-05-01',
    name: 'OnePlus',
    address: '江苏省-南京市-江宁区-汤山街道888号',
    tag: '已发货',
  },
];
</script>
