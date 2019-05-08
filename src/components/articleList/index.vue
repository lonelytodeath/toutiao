<template>
  <div class="articleList container">
    <article-cell v-for="article in articleList" :article="article" :key="article._id"></article-cell>
  </div>
</template>

<script>
  import articleCell from '@/components/articleCell/index';
  export default {
    name: 'articleList',
    props: ['state'],
    data() {
      return {
        articleList: [
          {
            _id: 1,
            title: '这是测试文章这是',
            imgs: [],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 2,
            title: '这是测试文章xxxxx章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 3,
            title: '这是测试文章xxxxx',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 4,
            title: '这是测试文章xxxxx',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 5,
            title: '这是测试文章xxxxx',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 6,
            title: '这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章',
            imgs: [],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 7,
            title: '这是测试文章xxxxx章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 8,
            title: '这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是',
            imgs: [],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 9,
            title: '这是测试文章xxxxx章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是试文章这是测试文章这是测试文章这是测试文章这是章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是章这是测试文章这是测',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 10,
            title: '这是测试文章xxxxx',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 11,
            title: '这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章这是测试文章',
            imgs: [],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
          {
            _id: 12,
            title: '这是测试文章xxxxx',
            imgs: [
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=935292084,2640874667&fm=26&gp=0.jpg',
            ],
            media: '今日头条',
            commentCount: 10,
            time: '2017-01-01 12:00:00'
          },
        ],
        page: 1,
        pageSize: 100,
      }
    },
    components: {
      'article-cell': articleCell,
    },
    created() {
      console.log(this.state);
    },
    watch: {
      state: function (newState, oldState) {
        this.refreshData(newState);
      }
    },
    methods: {
      refreshData: function (state) {
        if (state === 2) {
          this.page = this.page + 1;
          console.log(`当前页: ${this.page}`);
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
