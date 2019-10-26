// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import navigation from '@/components/navigation.vue';
import footers from '@/components/footers'
import login from '@/components/login'

// 路由重复点击
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
import '@/assets/css/base.css';
Vue.use(ElementUI);
Vue.component("navigation",navigation);
Vue.component("footers",footers);
Vue.component("login",login);

// 页面跳转回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
