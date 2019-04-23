<template>
  <div class="homePageHeader container">
    <div class="headerBackground">
      <div class="appName">
        今日头条
      </div>
    </div>
    <search-bar></search-bar>
  </div>
</template>

<script>
  import searchBar from '@/components/searchBar/index';
  export default {
    name: 'homePageHeader',
    components: {
      'search-bar': searchBar,
    },
    data () {
      return {
        msg: '',
      }
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: space-around;
  }
  .homePageHeader {
    height: 2rem;
    background-color: #da2222;
  }
  .appName {
    font-size: 0.6rem;
    text-shadow: 0 0 0.1rem black;
    color: white;
  }

</style>
