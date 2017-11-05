<template>
  <div>
    <chart :options="polar" ></chart>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import echarts from 'vue-echarts'
  Vue.component('chart', echarts)
  export default {
    created(){
      axios({
        type:'get',
        url: 'http://easy-mock.com/mock/59f7318abcc69e312c494948/admin/visitorTime'
      }).then( res => {
        console.log(res);
        this.polar.series[0].data=res.data.data
      })
      axios({
        type:'get',
        url: 'http://easy-mock.com/mock/59f7318abcc69e312c494948/admin/visitorStar'
      }).then( res => {
        console.log(res);
        this.polar.series[1].data=res.data.data
      })
    },
    data() {
      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      let t = new Date();
      t.setDate(t.getDate()-100)
      for (let i = 0; i < 100; i++) {
        t.setDate(t.getDate()+1)
        xAxisData.push(add0(t.getMonth()+1)+"-"+add0(t.getDate()));
      }
      function add0(num) {
        if(num<10){
          return '0'+num
        }else {
          return num
        }
      }
      return  {
        polar: {
          left: 'center',
          title: {
            text: '近百日访问统计'
          },
          legend: {
            data: ['访问数量', '关注数量'],
            align: 'left'
          },
          toolbox: {
            // y: 'bottom',
            feature: {
              magicType: {
                type: ['stack', 'tiled']
              },
              dataView: {},
              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
              show: false
            }
          },
          yAxis: {
          },
          series: [{
            name: '访问数量',
            type: 'line',
            data: data1,
            animationDelay: function (idx) {
              return idx * 10;
            }
          }, {
            name: '关注数量',
            type: 'line',
            data: data2,
            animationDelay: function (idx) {
              return idx * 10 + 100;
            }
          }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5;
          }
        }

      };
    }
  }
</script>

<style lang="less" scoped>
  .chart {
    width: 100%;
    box-sizing: border-box;
    border:1px solid red;
  }
  .el-col {
    text-align: center;
  }
  .echarts {
    height: 300px;
    width: 500px;
  }
</style>
