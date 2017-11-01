<template>
    <div id="layout">
      <router-view name="menu"></router-view>
      <el-container class="rightBox">
        <el-header height="42px">
          <router-view name="nav" ></router-view>
        </el-header>
        <el-main>
          <router-view name="content"></router-view>
        </el-main>
      </el-container>
    </div>
</template>

<script>
  export default {
    name: 'layout'
  }
</script>

<style lang="less">
  #layout {
    height: 100%;
    display: flex;
    .el-menu {
      height: 100%;
    }
    .rightBox {
      height: 100%;
      flex: auto;
      box-sizing: border-box;
      background-color: #eef1f6;
    }
    main {
      padding: 6px !important;
      background-color: #fff;
    }
  }
</style>
