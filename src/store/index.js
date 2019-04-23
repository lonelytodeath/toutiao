/**
 * Created by weichao on 2019/4/23.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentTabar: 'HomePage'
};

export default new Vuex.Store({
  state,
  mutations,
  strict: true
});


