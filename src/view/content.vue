<template>
  <div class="content">
    <router-view></router-view>
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

<style>
  .content {
    font-size: 60px;
    background-color: gainsboro;
  }
</style>
