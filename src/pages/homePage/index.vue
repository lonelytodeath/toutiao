<template>
  <div class="homePage container">
    <div class="fixedContainer">
      <homepage-header class="homepageHeaderItem"></homepage-header>
      <category-tabar class="categoryTabarItem"></category-tabar>
    </div>
    <article-list class="articleListItem"></article-list>
  </div>
</template>

<script>
  import homePageHeader from '@/components/homePageHeader/index';
  import categoryTabar from '@/components/categoryTabar/index';
  import ArticleList from "../../components/articleList/index";
  // 设置
  export default {
    name: 'HomePage',
    components: {
      ArticleList,
      'homepage-header': homePageHeader,
      'category-tabar': categoryTabar,
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
    z-index: 999;
  }
  .articleListItem {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
</style>
