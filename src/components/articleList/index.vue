<template>
  <div class="articleList container">
    <article-cell v-for="article in articleList" :article="article" :key="article._id"></article-cell>
  </div>
</template>

<script>
  import articleCell from '@/components/articleCell/index';
  import store from './../../store/index';
  import Request from './../../axios';
  export default {
    name: 'articleList',
    props: ['state', 'action'],
    data() {
      return {
        articleList: [],
        page: 1,
        pageSize: 10,
      }
    },
    components: {
      'article-cell': articleCell,
    },
    created() {
      this.getList();
    },
    watch: {
      state: function (newState, oldState) {
        this.refreshData(newState);
      },
      homeTag: function (newHomeTag) {
        this.page = 1;
        this.getList();
      }
    },
    computed: {
      homeTag () {
        return this.$store.state.homeTag;
      }
    },
    methods: {
      getList: async function() {
        const request = new Request();
        const data = await request.getNewsList(this.homeTag, this.page, this.pageSize);
        if (data.success) {
          this.articleList = this.action !== 2 ? data.data : this.articleList.concat(data.data);
          this.$emit('loadingNotify', true, data.data.length);
        }
      },
      refreshData: async function (state) {
        if (state === 2) {
          this.page = this.page + 1;
          await this.getList();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .articleList {
    padding: 0 0.3125rem;
    overflow: auto;
    height: 100%;
  }

</style>
