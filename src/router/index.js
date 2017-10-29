import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import menu from '@/view/leftMenu'
import nav from '@/view/topNav'
import content from '@/view/content'

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

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'box',
      components: {menu,nav,content},
      children: [
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
            {path:'table2',title:'修改'}
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
    }
  ]
})
