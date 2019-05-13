<template>
  <div class="articleCell container">
    <header class="header">
      <div class="noImg" v-if="!article.imgs || article.imgs.length === 0">
        <div class="title">{{ article.title }}</div>
      </div>

      <div class="oneImg" v-if="article.imgs && article.imgs.length === 1">
        <div class="title">{{ article.title }}</div>
        <img v-lazy="article.imgs[0]" class="headImage">
      </div>

      <div class="threeImg" v-if="article.imgs && article.imgs.length === 3">
        <div class="title">{{ article.title }}</div>
        <div class="imgBox">
          <img v-for="(src, index) in article.imgs" v-lazy="src" :key="index" class="headImage">
        </div>
      </div>
    </header>
    <footer class="footer">
      <div class="detail">
        <div class="media">{{ article.source }}</div>
        <div class="commentCount"><span>评论</span> {{ article.commentCount }}</div>
      </div>
      <div class="time">{{ article.createdAt | dateformat() }}</div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'acticleCell',
    props: ['article'],
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .articleCell {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0.3125rem 0;
    border-bottom: 1px solid #ddd;
    .header {
      width: 100%;
      font-size: 0.5rem;
      font-weight: 700;
      .headImage {
        width: 3.05rem;
        height: 2rem;
        margin-top: 5px;
        margin-right: 2px;
      }
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        -webkit-box-pack: start;
      }
      .noImg {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: center;
      }
      .oneImg {
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .title {
          width: 68%;
          margin-right: 15px;
        }
      }
      .threeImg {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-between;
        .imgBox {
          display: flex;
          display: -webkit-flex;
          flex-direction: row;
          justify-content: flex-start;
        }
      }
    }
    .footer {
      margin-top: 5px;
      width: 100%;
      font-size: 0.3rem;
      color: rgba(0, 0, 0, 0.35);
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .detail {
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .media {
          margin-right: 10px;
        }
      }
    }
  }
</style>
