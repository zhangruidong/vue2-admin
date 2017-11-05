<template>
  <div>
    <el-row>
      <el-col :span="4" :push="12">
        <el-input placeholder="搜索用户"
                  suffix-icon="el-icon-search"
                  size="small"
                  v-model="searchValue"
                  @input.native="searchHandle"
        >
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :push="1">
        <el-table
          :data="userList"
          :default-sort = "{prop: 'id', order: 'descending'}"
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
            label="用户ID"
            sortable
            prop="id">
          </el-table-column>
          <el-table-column
            label="姓名"
            sortable
            prop="name">
          </el-table-column>
          <el-table-column
            label="邮箱"
            prop="web.email">
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
      if(!this.$store.getters.userList || this.$store.getters.userList.length<1){
        this.$store.dispatch('getUserList').then( res => {
          this.originList=res;
        })
      }else{
        this.originList = this.$store.getters.userList;
      }
      this.userList =JSON.parse(JSON.stringify(this.originList));
    },
    data(){
      return {
        searchValue:'',
        userList:[],
        originList:[]
      }
    },
    computed: {
//      ...mapGetters(['userList'])
    },
    methods: {
      handleEdit(index, row) {
//        console.log(index, row);
      },
      handleDelete(index, row) {
//        console.log(index, row.id);
        this.$store.commit('deleteUser',row.id)
      },
      searchHandle(){
        if(this.searchValue !== ''){
//          console.log(this.searchValue);
         this.userList=this.originList.filter( item => {
//           console.log(this.searchValue)
//           console.log(item.name)
//           console.log(item.name.search(/this.searchValue\+/));
           let re = eval('/'+this.searchValue+'+/g')
           if(re.test(item.name)){
             return true
           }else {
             return false
           }
         })
        }else {
          this.userList = this.originList
        }
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
