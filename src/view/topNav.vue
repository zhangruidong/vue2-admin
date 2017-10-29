<template>
  <div class="nav">
    <el-row>
      <el-col :span="16">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in path" :key="index" :to="{path:item.path}">{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="8" class="rightNav">
        <div class="full">
          <el-button class="full" @click="fullScreen">
            <i class="icon" :class="{'el-icon-erp-Full':full,'el-icon-erp-fullscreenexit':!full}"></i>
          </el-button>

          <el-dropdown>
            <span class="el-dropdown-link">
              <div class="user">&nbsp;</div>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>登陆</el-dropdown-item>
              <el-dropdown-item >注册</el-dropdown-item>
              <el-dropdown-item divided>源码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        full: false
      }
    },
    computed: {
      path(){
        return this.$route.meta
      }
    },
    methods: {
      fullScreen(){
        console.log(1111);
        this.full=!this.full
      }
    }
  }
</script>

<style lang="less">
  @import "../styles/maxin";
  .nav {
    .el-col {
      .ft(17px,42px);
    }
    .el-breadcrumb {
      .ft(17px,42px);
      background-color: #eef1f6;
    }
    .rightNav {
      .ft(17px,42px);
      text-align: right;
      background-color: #eef1f6;
      /*background-color: red;*/
      padding-right: 20px;
      .full {
        height: 42px;
        margin-right: 12px;
      }
      .user {
        display: inline-block;
        width: 42px;
        height: 42px;
        background: url("../assets/img/avatar.png") no-repeat;
        background-size: cover;
      }
    }
  }
</style>
