<template>
  <div class="chart">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple-dark">你好</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-dark"><i class="el-icon-erp-todo"></i></div></el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          <el-button>
            <i class="el-icon-erp-todo"></i>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <!--<el-button class="grid-content bg-purple"><i class="el-icon-erp-fullscreenexit"></i></el-button>-->
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
       margin-bottom: 0;
     }
  }
  .el-col {
    border-radius: 4px;
    vertical-align: middle;
    height: 36px;
    line-height: 36px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
