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
    background-color: gainsboro;
  }
</style>
