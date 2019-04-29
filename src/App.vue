<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <bottom-tabar class="bottomBar"></bottom-tabar>
  </div>
</template>

<script>
  import bottomTabar from '@/components/bottomTabar/index';
  export default {
    name: 'App',
    components: {
      'bottom-tabar': bottomTabar,
    },
    data: () => ({
      transitionName: 'slide-right'
    }),
    watch: {
      $route(to, from) {
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
        }else{
          this.transitionName = 'slide-right';
        }
      }
    }
  }
</script>

<style>
  @import './assets/css/public.css';
  @import './assets/css/transition.css';
</style>
