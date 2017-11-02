import Vue from 'vue'
import Router from 'vue-router'

import notFound from '@/view/404'
import layout from '@/view/layout'

import menu from '@/view/leftMenu'
import nav from '@/view/topNav'
import content from '@/view/content'
import login from '@/view/login'

import home from '@/view/pages/home'
import table1 from '@/view/pages/table1'
import table2 from '@/view/pages/table2'
import form from '@/view/pages/form'
import chart from '@/view/pages/chart'
import todolist from '@/view/pages/todolist'
import intro from '@/view/pages/intro'
import test from '@/view/pages/test'
import about from '@/view/pages/about'

Vue.use(Router)

let pageRouter = {
  path: '/',
  component: layout,
  children:[{
    path: '',
    components: {menu,nav,content},
    children:[
      {
        path:'',
        meta:[],
        component: home
      },
      {
        path: 'table1',
        meta:[
          {path:'table1',title:'表格'},
          {path:'table1',title:'查找'}
        ],
        component: table1
      },
      {
        path: 'table2',
        meta:[
          {path:'table2',title:'表格'},
          {path:'table2',title:'编辑'}
        ],
        component: table2
      },
      {
        path:'form',
        meta:[
          {path:'form',title:'表单'}
        ],
        component: form
      },
      {
        path: 'chart',
        meta:[
          {path:'chart',title:'图表'}
        ],
        component: chart
      },
      {
        path: 'todolist',
        meta:[
          {path:'todolist',title:'todolist'}
        ],
        component: todolist
      },
      {
        path: 'intro',
        meta:[
          {path:'intro',title:'简述'}
        ],
        component: intro
      },
      {
        path: 'test',
        meta:[
          {path:'test',title:'测试'}
        ],
        component: test
      },
      {
        path: 'about',
        meta:[
          {path:'about',title:'关于我'}
        ],
        component: about
      }
    ]
  }]
}

export default function(store) {
  let router= new Router({
    routes: [
      pageRouter, // 每一个单页内容
      {
        path:'/404',
        name: 'notFound',
        meta:{path:'404',title:'404'},
        component:notFound
      },
      {
        path:'/login',
        name: 'login',
        meta:{path:'/login',title:'login'},
        component:login
      },
      {
        path: "*",
        redirect:{name:'notFound'}
      }
    ]
  })
  
  router.beforeEach((to, from, next) => {
    // console.log(store.state.isLogin);
    // console.log(to);
    store.commit('loginHandle')
    if(to.name==="login"){
      next()
    }else {
      if(store.state.isLogin==='1'){
        next()
      }else{
        // store.state.isLogin=true
        next({path:'/login'})
      }
    }
  })
  
  return router
}
