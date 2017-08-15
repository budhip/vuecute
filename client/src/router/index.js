import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Maincontent from '@/components/Maincontent'
import Articledetail from '@/components/Articledetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '',
          component: Maincontent
        },
        {
          path: ':id',
          component: Articledetail,
          props: true
        }
      ]
    }
  ]
})
