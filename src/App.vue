<template>
  <div id="app">
    <router-view name="menu"></router-view>
    <div class="rightBox">
      <router-view name="nav"></router-view>
      <router-view name="content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import "styles/common.less";
  @import "styles/maxin.less";
  #app {
    background-color: #324157;
    height: 100%;
    display: flex;
    .el-menu {
      min-height: 100%;
    }
    .rightBox {
      width: 200px;
      min-height: 100%;
      flex: auto;
      box-sizing: border-box;
      height: 600px;
      background-color: #eef1f6;
    }
  }
</style>
