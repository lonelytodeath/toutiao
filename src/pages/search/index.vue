<template>
  <div class="searchPage">
    <search-bar></search-bar>
  </div>
</template>

<script>
  import searchBar from '@/components/searchBar/index';
  export default {
    name: 'searchPage',
    components: {
      'search-bar': searchBar,
    },
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss" scoped>

</style>
