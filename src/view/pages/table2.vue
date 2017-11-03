<template>
  <div class="table2">
    <el-row>
      <el-col :span="22" :push="1">
        <el-table
          :data="userList"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="姓名">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="注册日期">
                  <span>{{ props.row.date.date }}</span>
                </el-form-item>
                <el-form-item label="用户 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="信息">
                  <span>{{ props.row.text.ctitle }}</span>
                </el-form-item>
                <el-form-item label="户籍">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="简绍">
                  <span>{{ props.row.text.cparagraph }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="用户ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
            label="邮箱"
            prop="web.email">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>


      </el-col>
    </el-row>
    <div class="changeBox" v-show="changeBox" @scroll.stop>
      111111
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'table1',
    created(){
      if(this.$store.getters.userList.length<1){
        this.$store.dispatch('getUserList').then( res => {
//          console.log(res);
        })
      }
      /*this.$store.dispatch("getUserList").then( res => {
        console.log(res);
        this.userList=res
      })*/
    },
    data(){
      return {
//        userList:[]
        changeBox:false
      }
    },
    computed: {
      ...mapGetters(['userList'])
    },
    methods: {
      handleEdit(index, row) {
//        console.log(index, row);
//        this.$store.commit('changeUser',row.id)
        this.changeBox=true
      },
      handleDelete(index, row) {
//        console.log(index, row.id);
        this.$store.commit('deleteUser',row.id)
      }
    }
  }
</script>

<style lang="less" scoped>
  .table2 {

  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .changeBox {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: red;
  }
</style>
