import Vue from 'vue'
import Router from 'vue-router'
import store from './../store/index';

Vue.use(Router)

import HomePage from '@/pages/homePage/index';
import searchPage from '@/pages/search/index';
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        index: 1,
      },
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      component: searchPage,
      meta: {
        index: 2,
      },
    },
    {
      path: '/aboutMe',
      name: 'AboutMe',
      component: HomePage,
      meta: {
        index: 3,
      },
    },
    {
      name: 'searchPage',
      path: '/search',
      component: searchPage,
      meta: {
        index: 4,
      },
    },
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
