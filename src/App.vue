<template>
  <div id="app">
    <transition name="right" mode="out-in">
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
  }
</script>

<style>
  @import './assets/css/public.css';
  @import './assets/css/transition.css';
</style>
