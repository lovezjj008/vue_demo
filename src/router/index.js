import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page2 from '@/pages/page2'
const Dolist = ()=> import("@/pages/dolist")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2,
      children: [
        {
          path: '/dolist',
          name: 'dolist',
          component: Dolist
        }
      ]
    },
    
  ]
})
