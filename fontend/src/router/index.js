import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component:require('../view/mainPage').default
    },{
      path: '/new',
      name: "new",
      component: resolve => require(['../view/new'],resolve),
    },{
      path: '/garbage',
      name: "garbage",
      component: resolve => require(['../view/garbage'],resolve)
    },{
      path: '/game',
      name: "game",
      component: resolve => require(['../view/game'],resolve)
    },{
      path: '/login',
      name: "login",
      component: resolve => require(['../components/login'],resolve)
    },{
      path: '/personalCenter',
      name: "personalCenter",
      component: resolve => require(['../view/personalCenter'],resolve)
    },{
      path:'/majorNew/:aid',
      name:'majorNew',
      component: resolve => require(['../view/majorNew'],resolve)
    },{
      path:'*',
      redirect:'/main'
    }
  ]
})
