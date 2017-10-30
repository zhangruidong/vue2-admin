import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
  
  state: {
    userList:[]
  },
  getters: {
    userList(state){
      return JSON.parse(JSON.stringify(state.userList))
    }
  },
  mutations: {
    getUserList(state,payload){
      state.userList=payload;
    }
  },
  actions: {
    getUserList(store){
      return axios({
        type:'GET',
        url: 'api/user',
      }).then( res => {
        store.commit("getUserList",res.data.data)
        return Promise.resolve(store.getters.userList)
      })
    }
  }
});

export default store

