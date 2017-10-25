import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import menu from '@/view/leftMenu'
import nav from '@/view/topNav'
import content from '@/view/content'

import home from '@/view/pages/home'
import form from '@/view/pages/form'
import table from '@/view/pages/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'box',
      components: {menu,nav,content},
      children: [
        {
          path:'',
          component: home
        },
        {
          path:'form',
          component: form
        },
        {
          path: 'table',
          component: table
        }
      ]
    }
  ]
})
