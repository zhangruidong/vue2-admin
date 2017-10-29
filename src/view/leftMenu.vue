<template>
  <el-menu
    theme="dark"
    class="el-menu-vertical-demo"
    :router="true"
    default-active="/"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    :collapse="isCollapse"
  >
    <el-menu-item @click="zoomMenu" index="">
      <i class="el-icon-menu"></i>
      <span slot="title" v-if="isCollapse">展开</span>
      <span slot="title" v-else>收缩</span>
    </el-menu-item>
    <el-menu-item index="/" >
      <i class="el-icon-erp-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="table">
      <template slot="title">
        <i class="el-icon-erp-table"></i>
        <span slot="title">表格</span>
      </template>
      <el-menu-item index="table1">查看</el-menu-item>
      <el-menu-item index="table2">编辑</el-menu-item>
    </el-submenu>
    <el-menu-item index="form">
      <i class="el-icon-erp-form"></i>
      <span slot="title">表单</span>
    </el-menu-item>
    <el-menu-item index="chart">
      <i class="el-icon-erp-chart"></i>
      <span slot="title">图表</span>
    </el-menu-item>
    <el-menu-item index="todolist">
      <i class="el-icon-erp-todo"></i>
      <span slot="title">todoList</span>
    </el-menu-item>
    <el-menu-item index="intro">
      <i class="el-icon-erp-anonymous-iconfont"></i>
      <span slot="title">简述</span>
    </el-menu-item>
    <el-menu-item index="test">
      <i class="el-icon-erp-test"></i>
      <span slot="title">测试</span>
    </el-menu-item>
    <el-menu-item index="about">
      <i class="el-icon-erp-help"></i>
      <span slot="title">about me</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data(){
      return {
        isCollapse:true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath){
        console.log(key,keyPath);
      },
      zoomMenu(){
        this.isCollapse= !this.isCollapse
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*min-height: 400px;*/
  }
  /*.menu {
    background-color: #324157;
    display: flex;
    border: 1px solid blue;
  }
  .content {
    width: 200px;
    flex: auto;
    border: 4px solid blue;
    box-sizing: border-box;
    height: 600px;
    background-color: #eef1f6;
  }*/
</style>
