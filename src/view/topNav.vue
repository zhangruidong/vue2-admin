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
        <div>
          <el-button class="full" @click="fullScreen">
            <i class="icon" :class="{'el-icon-erp-Full':full,'el-icon-erp-fullscreenexit':!full}"></i>
          </el-button>

          <el-dropdown>
            <span class="el-dropdown-link">
              <div class="user">&nbsp;</div>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >
                <router-link to="/">首页</router-link>
              </el-dropdown-item>
              <el-dropdown-item><a class="link" href="https://github.com/zhangruidong/vue2-admin">源码</a></el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import {setStore} from '@/utils'
//  import logo from '../../static/user.jpg'
//  :style="{backgroundImage:'url('+logo+')'}"
  export default {
    name: 'nav',
    data () {
      return {
        logo,
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
        this.full=!this.full
        if(this.full){
          var docElm = document.documentElement;
//W3C
          if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
          }
//FireFox
          else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
          }
//Chrome等
          else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
          }
//IE11
          else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          }
        }else{
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
          else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          }
          else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
          else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      },
      logout(){
        setStore('isLogin',0);
        this.$router.replace({path:'/login'})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../styles/maxin";
  .nav {
    .el-col {
      .ft(17px,42px);
    }
    .el-breadcrumb {
      .ft(17px,42px);
    }
    .rightNav {
      .ft(17px,42px);
      text-align: right;
      padding-right: 20px;
      .full {
        height: 32px;
        width: 32px;
        text-align: center;
        margin-right: 12px;
        position: relative;
        top: -4px;
        i {
          position: absolute;
          left: 50%;
          top:50%;
          transform: translate(-50%,-50%);
        }
      }
      .user {
        display: inline-block;
        width: 42px;
        height: 42px;
        transform: translate(0,-2px);
        background: url("http://ico.ooopic.com/ajax/iconpng/?id=69388.png") no-repeat;
        /*background-repeat: no-repeat;*/
        background-size: cover;
        border-radius: 8px;
      }
    }
  }
  a.link {
    display: block;
  }

</style>
