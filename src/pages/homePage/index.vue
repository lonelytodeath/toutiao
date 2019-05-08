<template>
  <div class="homePage container">
    <div class="fixedContainer">
      <homepage-header class="homepageHeaderItem"></homepage-header>
      <category-tabar class="categoryTabarItem"></category-tabar>
    </div>
    <scroll-view class="scrollArticleList" v-slot:default="props">
      <article-list class="articleListItem" :state="props.state"></article-list>
    </scroll-view>
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
        msg: '',
      }
    },
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
</style>
