<template>
  <div class="homePage container">
    <homepage-header></homepage-header>
  </div>
</template>

<script>
  import homePageHeader from '@/components/homePageHeader/index';
  export default {
    name: 'HomePage',
    components: {
      'homepage-header': homePageHeader,
    },
    data () {
      return {
        msg: '',
      }
    }
  };
</script>

<style lang="scss" scoped>
  .homePage {
  }
</style>
