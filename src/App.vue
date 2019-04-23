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
        const isBack = this.$router.isBack;
        if(isBack) {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
        this.$router.isBack = false;
      }
    }
  }
</script>

<style>
  @import './assets/css/public.css';
</style>
