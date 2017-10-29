import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  /*
  *  状态属性，状态又称为数据
  *  state: 这个就是用来存储全局的应用数据
  *   state 和 data 的区别：
  *     一个是全局的，一个是组件内部的
  * */
  state: {
    msg: 'hello,zrd',
    todos:[
      {
        title: '吃饭',
        done: true
      },
      {
        title: '睡觉',
        done: true
      },
      {
        title: '打豆豆',
        done: true
      },
      {
        title: '学习',
        done: false
      }
    ]
  }
  /*modules: {
    app,
    user,
    permission
  },
  getters*/
});

export default store

