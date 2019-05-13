<template>
  <div class="homePage container">
    <div class="fixedContainer">
      <homepage-header class="homepageHeaderItem"></homepage-header>
      <category-tabar class="categoryTabarItem"></category-tabar>
    </div>
    <div class="loading" v-show="isLoading">
      <img src="./../../assets/img/listLoading.png" class="loadingImg"/>
    </div>
    <transition name="fade">
      <scroll-view class="scrollArticleList" v-slot:default="props" ref="scorllView" v-show="!isLoading">
        <article-list class="articleListItem" :state="props.state" :action="props.action" @loadingNotify="loadingNotify"></article-list>
      </scroll-view>
    </transition>
  </div>
</template>

<script>
  import homePageHeader from '@/components/homePageHeader/index';
  import categoryTabar from '@/components/categoryTabar/index';
  import articleList from '@/components/articleList/index';
  import scroll from '@/components/scroll/index';
  // 设置
  export default {
    name: 'HomePage',
    components: {
      articleList,
      'homepage-header': homePageHeader,
      'category-tabar': categoryTabar,
      'scroll-view': scroll,
    },
    data () {
      return {
        isLoading: true,
      }
    },
    watch: {
      homeTag: function () {
        this.isLoading = true;
      }
    },
    computed: {
      homeTag () {
        return this.$store.state.homeTag;
      }
    },
    methods: {
      loadingNotify: function (loadingResult, newsCount) {
        this.isLoading = false;
        this.$refs.scorllView.loadingSuccess(loadingResult, newsCount);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .fixedContainer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
  }
  .scrollArticleList {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  @-webkit-keyframes animal {
    0%{
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
    100%{
      transform: rotate(-360deg);
      -ms-transform: rotate(-360deg);
      -webkit-transform: rotate(-360deg);
    }
  }
  .loading .loadingImg {
    position: absolute;
    top: 40%;
    width: 30%;
    left: 35%;
    -webkit-animation: animal 2s infinite linear ;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
  }
</style>
