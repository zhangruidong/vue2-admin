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
    <el-dialog :title="'用户信息修改 ID:'+this.form.id" :visible.sync="dialogFormVisible">
      <el-form :model="form" >
        <el-form-item label="姓名"
                      :label-width="formLabelWidth"
                      prop="name"
                      :rules="[
                        { required: true, message: '请输入用户姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                      ]"
        >
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      :label-width="formLabelWidth"
                      prop="web.email"
                      :rules="[
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '格式不正确', trigger: 'blur' }
                      ]"
        >
          <el-input v-model="form.web.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="户籍" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="注册日期"
                      :label-width="formLabelWidth"
                      required
                      >
          <el-date-picker
            v-model="form.date.date"
            type="date"
            placeholder="选择日期"
            default-value="2010-10-01">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="简介" :label-width="formLabelWidth">
          <el-input v-model="form.text.cparagraph" auto-complete="off" type="textarea" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmChange">确 定</el-button>
      </div>
    </el-dialog>
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
        changeBox:false,
        dialogFormVisible: false,
        form: {web:{},text:{},date:{}},
        formLabelWidth: '120px',
        /*rules:{
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
          ],
          email: [
            { required: true, message: '请填写邮箱', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ]
        }*/
      }
    },
    computed: {
      ...mapGetters(['userList'])
    },
    methods: {
      handleEdit(index, row) {
//        console.log(index, row);
//        this.$store.commit('changeUser',row.id)
//        this.changeBox=true
        this.form= JSON.parse(JSON.stringify(row))
        this.dialogFormVisible = true
      },
      handleDelete(index, row) {
//        console.log(index, row.id);
        this.$store.commit('deleteUser',row.id)
      },
      confirmChange(){
//        console.log(this.form);
        this.$store.commit('editUser',this.form)
        this.dialogFormVisible = false
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
