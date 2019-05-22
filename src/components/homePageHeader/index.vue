<template>
  <div class="homePageHeader container">
    <div class="headerBackground">
      <div class="appName">
        推荐头条
      </div>
    </div>
    <search-bar @click.native="clickSearch" :onlyClick="true" :width="6"></search-bar>
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
    },
    methods: {
      clickSearch: function () {
        this.$router.push({name: 'searchPage'});
      },
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
    background-color: #d43d3d;
  }
  .appName {
    font-size: 0.6rem;
    text-shadow: 0 0 0.1rem black;
    color: white;
  }

</style>
