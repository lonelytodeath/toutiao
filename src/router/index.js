import Vue from 'vue'
import Router from 'vue-router'
import store from './../store/index';

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1)
};

Vue.use(Router)

import HomePage from '@/pages/homePage/index';
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      component: HomePage
    },
    {
      path: '/aboutMe',
      name: 'AboutMe',
      component: HomePage
    }
  ]
});

router.afterEach((to, from) => {
  let toRouter = 'HomePage';
  if (to.path && to.path.indexOf('/bookmark') > -1) {
    toRouter = 'Bookmark';
  }
  if (to.path && to.path.indexOf('/aboutMe') > -1) {
    toRouter = 'AboutMe';
  }
  store.commit('switchBottomTabar', {currentTabar: toRouter});
});

export default router;
