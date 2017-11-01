import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import {setStore,getStore,removeStore} from '@/utils'

Vue.use(Vuex);

const store = new Vuex.Store({
  
  state: {
    userList:[],
    isLogin: false
  },
  getters: {
    userList(state){
      return JSON.parse(JSON.stringify(state.userList))
      
    }
  },
  mutations: {
    getUserList(state,payload){
      state.userList=payload;
    },
    loginHandle(state){
      state.isLogin=getStore('isLogin')
    }
  },
  actions: {
    getUserList(store){
      return axios({
        type:'GET',
        url: 'http://easy-mock.com/mock/59f7318abcc69e312c494948/admin/user',
      }).then( res => {
        store.commit("getUserList",res.data.data)
        return Promise.resolve(store.getters.userList)
      })
    }
  }
});

export default store

