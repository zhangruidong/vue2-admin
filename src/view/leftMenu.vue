<template>
  <el-menu
    theme="dark"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item index="1" @click="zoomMenu">
      <i class="el-icon-menu"></i>
      <span slot="title" v-if="isCollapse">展开</span>
      <span slot="title" v-else>收缩</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-erp-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <span slot="title">选项4</span>
        <el-menu-item index="3-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-date"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-message"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="el-icon-upload2"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="8">
      <i class="el-icon-more"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
  <!--<div class="menu">

    <div class="content">

    </div>
  </div>-->
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
