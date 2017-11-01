<template>
  <div class="home">
    <el-row>
      <el-col :span="24" >

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    created(){
      /*axios({
        type:'GET',
        url: 'api/user',
      }).then( res => {
        console.log(res);
      })*/
    }
  }
</script>

<style lang="less" scoped>
  .home {
    width: 100%;
    box-sizing: border-box;
    .el-table {
      box-sizing: border-box;
      width: 100%;
    }
  }
</style>
