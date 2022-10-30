<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/images/user.png" alt="" />
          <div class="user-info">
            <h3 class="name">Admin</h3>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-10-17</span></p>
          <p>上次登录地点：<span>171.24.23.12[北京]</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 10px; height: 430px">
        <el-table :data="tableData">
          <el-table-column prop="name" label="商品名称" />
          <el-table-column prop="todayBuy" label="当日购买" />
          <el-table-column prop="monthBuy" label="本月购买" />
          <el-table-column prop="totalBuy" label="总购买" />
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" class="right-num">
      <div class="num">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          v-for="item in countData"
          :key="item.name"
        >
          <el-icon class="icons" :style="{ background: item.color }"><Histogram /></el-icon>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div ref="echart" style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div ref="userechart" style="height: 240px"></div>
        </el-card>
        <el-card style="height: 260px">
          <div ref="videoechart" style="height: 240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    let tableData = ref([]);
    let countData = ref([]);
    const getTableList = async () => {
      let res = await proxy.$api.getTableData();
      // console.log(res);
      tableData.value = res;
    };
    // 获取首页count数据
    const getCountData = async () => {
      let res = await proxy.$api.getCountData();
      countData.value = res;
    };
    onMounted(() => {
      getTableList();
      // 获取count数据
      getCountData();
      // 获取echarts表格数据
      getChartData();
    });
    // 关于echarts 表格的渲染部分
    let xOptions = reactive({
      // 图例文字颜色
      textStyle: {
        color: '#333',
      },
      grid: {
        left: '20%',
      },
      // 提示框
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category', // 类目轴
        data: [],
        axisLine: {
          lineStyle: {
            color: '#17b3a3',
          },
        },
        axisLabel: {
          interval: 0,
          color: '#333',
        },
      },
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#17b3a3',
            },
          },
        },
      ],
      color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
      series: [],
    });
    let pieOptions = reactive({
      tooltip: {
        trigger: 'item',
      },
      color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
      series: [],
    });
    let orderData = reactive({
      xData: [],
      series: [],
    });
    let userData = reactive({
      xData: [],
      series: [],
    });
    let videoData = reactive({
      series: [],
    });

    // 获取数据

    const getChartData = async () => {
      let result = await proxy.$api.getChartData();
      // console.log(result);
      let res = result.orderData;
      let userRes = result.userData;
      let videoRes = result.videoData;
      orderData.xData = res.date;
      const keyArray = Object.keys(res.data[0]);
      const series = [];
      keyArray.forEach((key) => {
        series.push({
          name: key,
          data: res.data.map((item) => item[key]),
          type: 'line',
        });
      });
      orderData.series = series;
      xOptions.xAxis.data = orderData.xData;
      xOptions.series = orderData.series;
      // userData进行渲染
      let hEcharts = echarts.init(proxy.$refs['echart']);
      hEcharts.setOption(xOptions);

      // 柱状图进行渲染的过程
      userData.xData = userRes.map((item) => item.date);
      userData.series = [
        {
          name: '新增用户',
          data: userRes.map((item) => item.new),
          type: 'bar',
        },
        {
          name: '活跃用户',
          data: userRes.map((item) => item.active),
          type: 'bar',
        },
      ];

      xOptions.xAxis.data = userData.xData;
      xOptions.series = userData.series;
      let uEcharts = echarts.init(proxy.$refs['userechart']);
      uEcharts.setOption(xOptions);
      videoData.series = [
        {
          data: videoRes,
          type: 'pie',
        },
      ];
      pieOptions.series = videoData.series;
      let vEcharts = echarts.init(proxy.$refs['videoechart']);
      vEcharts.setOption(pieOptions);
    };

    return {
      tableData,
      countData,
    };
  },
});
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    .name {
      font-weight: 700;
      height: 32px;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 10px;
    }
    .icons {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
        color: #999;
      }
    }
  }
  .graph {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>
