<template>
  <div class="searchPage">
    <div class="searchBarBox">
      <search-bar class="searchBar" :width="8" @searchChange="searchChange"></search-bar>
      <span class="cancel" @click="cancel">取消</span>
    </div>
    <div class="recordList">
      <div class="recordBox" v-for="article in articleList" :key="article._id" @click="openDetailUrl(article.sourceUrl)">
        <img src="./../../assets/img/search.png" class="icon">
        <div v-html="article.title" class="title"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import searchBar from '@/components/searchBar/index';
  import Request from './../../axios';
  export default {
    name: 'searchPage',
    components: {
      'search-bar': searchBar,
    },
    data() {
      return {
        articleList: [],
        keyword: '',
      };
    },
    methods: {
      searchChange: function (keyword) {
        this.keyword = keyword;
        this.getKeywordList();
      },
      getKeywordList: async function () {
        const request = new Request();
        const data = await request.getNewsListByKeyword(this.keyword);
        if (data.success) {
          for (const article of data.data) {
            const selectStrFirstIndex = article.title.toLowerCase().indexOf(this.keyword.toLowerCase());
            const selectStr = article.title.substring(selectStrFirstIndex, selectStrFirstIndex + this.keyword.length);
            article.title = article.title.replace(new RegExp(this.keyword, 'ig'), '<span style="color: #e69e0a">' + selectStr + '</span>');
          }
          this.articleList = data.data;
        }
      },
      cancel: function () {
        this.$router.push({name: 'HomePage'});
      },
      openDetailUrl: function (url) {
        window.location.href = url;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .searchBarBox {
    width: 100%;
    height: 2rem;
    background-color: #d43d3d;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .cancel {
    font-size: 16px;
    color: white;
    margin-right: 0.3rem;
  }
  .recordList {
    height: 10rem;
    overflow: scroll;
    font-size: 16px;
  }
  .recordBox {
    border-bottom: 1px solid #ccc;
    height: 1rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    width: 100%;
    .title {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-right: 5%;
      margin-left: 2.5%;
    }
    .icon {
      margin-left: 5%;
      width: 20px;
    }
  }
</style>
