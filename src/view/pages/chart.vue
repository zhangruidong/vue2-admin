<template>
  <div class="chart">
    <el-row>
      <el-col :md="12">
        <div>
          <router-view name="chart1"></router-view>
        </div>
      </el-col>
      <el-col :md="12">
        <div>
          <router-view name="chart2"></router-view>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="12">
        <div>
          <router-view name="chart3"></router-view>
        </div>
      </el-col>
      <el-col :md="12">
        <div>
          <router-view name="chart4"></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import echarts from 'vue-echarts'
  Vue.component('chart', echarts)
  export default {
   name: 'chart'
  }
</script>

<style lang="less" scoped>
  .chart {
    width: 100%;
    box-sizing: border-box;
  }
  .el-col {
    text-align: center;
  }
  .echarts {
    height: 300px;
    width: 500px;
  }
</style>
