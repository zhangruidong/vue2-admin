<template>
  <div id="app" class="fillcontain">
    <router-view></router-view>
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
    width: 100%;
  }
  main {
    padding: 6px !important;
    background-color: #fff;
  }
</style>
