import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import {setStore,getStore,removeStore} from '@/utils'

Vue.use(Vuex);

let userList = JSON.parse(getStore('userList'))

const store = new Vuex.Store({
  
  state: {
    userList,
    isLogin: false
  },
  getters: {
    userList(state){
      return JSON.parse(JSON.stringify(state.userList))
      
    }
  },
  mutations: {
    getUserList(state,payload){
      setStore('userList',payload);
      state.userList=JSON.parse(getStore('userList'));
    },
    loginHandle(state){
      state.isLogin=getStore('isLogin')
    },
    deleteUser(state,deleteId){
      let list = JSON.parse(getStore('userList'))
      let newList = list.filter( item => {
        if(item.id==deleteId){
          return false
        }else{
          return true
        }
      })
      setStore('userList',newList);
      state.userList=JSON.parse(getStore('userList'));
    },
    searchValue(state,value){
    
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

