<template>
    <div class="loginBox ctt">
      <h2 @click="toHome">系统登陆</h2>
      <el-form :model="validateData" status-icon ref="elForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="账号"
          prop="account"
          :rules="[
                    { required: true, message: '账号龄不能为空'},
                    { type: 'string', message: '账号必须为字符'}
                  ]"
        >
          <el-input type="age" v-model="validateData.account" auto-complete="off">
            <i slot="prefix" class="el-input__icon el-icon-erp-account"></i>
          </el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
                    { required: true, message: '密码不能为空'},
                    { type: 'string', message: '密码必须为字符'}
                  ]"
        >
          <el-input type="password" v-model="validateData.password" auto-complete="off">
            <i slot="prefix" class="el-input__icon el-icon-erp-suo"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="测试账号">
          <el-button type="text" class="test">账号：admin<br>密码：123456</el-button>
          <el-button class="rightBtn" @click="resetForm('elForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('elForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {setStore} from '@/utils'
  export default {
    name: 'login',
    data(){
      return {
        validateData: {
          account: 'admin',
          password: '123456'
        }
      };
    },
    methods: {
      toHome(){
        setStore("isLogin",1)
        this.$store.commit('loginHandle')
        setTimeout(()=>this.$router.push({path:"/"}),100)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && this.validateData.account ==='admin' && this.validateData.password ==='123456') {
            this.$message({
              message: '登陆成功',
              type: 'success',
              duration: '1000'
            });
            setTimeout(()=> {
              this.toHome()
            },400)
          } else {
            this.$message.error('账号或密码错误');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.validateData= {
          account:'',
          password: ''
        }
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
  .loginBox {
    width: 400px;
    h2 {
      color: white;
      text-align: center;
      line-height: 40px;
      margin-bottom: 12px;
    }
    .test {
      box-sizing: border-box;
      height: 40px;
      text-align: left;
      vertical-align: middle;
      padding: 0px !important;
      line-height: 16px;
    }
    .rightBtn {
      margin-left: 49px;
    }
  }
  .loginBox .el-form-item__label {
    color: white !important;
  }
</style>
