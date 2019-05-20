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
        this.$refs.scorllView.scrollToTop();
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
      },
    }
  };
</script>

<style lang="scss" scoped>
  .homePage {
    padding: 1px;
  }
  .fixedContainer {
    width: 100%;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
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
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    -o-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;}
  @-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
    to{-webkit-transform: rotate(360deg)}
  }
  @-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
    to{-moz-transform: rotate(359deg)}
  }
  @-o-keyframes rotate{from{-o-transform: rotate(0deg)}
    to{-o-transform: rotate(359deg)}
  }
  @keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
  }
</style>
