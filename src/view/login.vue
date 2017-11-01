<template>
    <div class="login">
      <h2 @click="toHome">login</h2>
      <!--<router-link to="/" >返回首页</router-link>-->
    </div>
</template>

<script>
  import {setStore,getStore,removeStore} from '@/utils'
  export default {
    created(){

    },
    methods:{
      toHome(){
        setStore("isLogin",1)
        this.$store.commit('loginHandle')
        setTimeout(()=>this.$router.push({path:"/"}),100)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
