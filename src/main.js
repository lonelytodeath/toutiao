// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import vueTouch from 'vue-plugin-touch'
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';

import * as loadingImg from './assets/img/loading.gif';
import * as errorImg from './assets/img/error.png';

import articleList from '@/components/articleList/index';


Vue.config.productionTip = false

Vue.use(vueTouch);
Vue.use(VueAxios, axios);


Vue.use(VueLazyLoad, {
  error: errorImg,
  loading: loadingImg,
});

Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern);

})

Vue.component('article-list', articleList);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
