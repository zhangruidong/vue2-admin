<template>
  <div>
    <el-row>
      <el-col :span="22" :push="1">
        <el-table
          :data="userList"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.data }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.text.cparagraph }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.web.email }}</span>
                </el-form-item>
              </el-form>
            </template>
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
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'table1',
    created(){
      /*this.$store.dispatch("getUserList").then( res => {
        console.log(res);
        this.userList=res
      })*/
    },
    data(){
      return {
//        userList:[]
      }
    },
    computed: {
      ...mapGetters(['userList'])
    },
    methods: {
      handleEdit(index, row) {
//        console.log(index, row);
      },
      handleDelete(index, row) {
//        console.log(index, row);
      }
    }
  }
</script>

<style lang="less" scoped>
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
</style>
