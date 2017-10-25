<template>
  <div class="nav">
    <el-row>
      <el-col :span="16">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="8">
        <el-button type="primary">login</el-button>
        <el-button type="success">register</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  .nav {
    background-color: whitesmoke;
    /*height: 40px;*/
    .el-breadcrumb {
      line-height: 40px;
      font-size: 20px !important;
    }
  }
</style>
