<template>
  <div class="category container" ref="category">
    <ul id="categoryList">
      <li v-for="item in items" class="categoryItem" :class="{ active: tag === item.id}" v-on:click="selectCategory(item.id)" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import store from './../../store/index';
  export default {
    name: 'categoryTabar',
    data () {
      return {
        items: [
          {
            id: 0,
            title: '推荐',
          },
          {
            id: 1,
            title: '热点',
          },
          {
            id: 2,
            title: '社会',
          },
          {
            id: 3,
            title: '娱乐',
          },
          {
            id: 4,
            title: '科技',
          },
          {
            id: 5,
            title: '体育',
          },
          {
            id: 6,
            title: '财经',
          },
          {
            id: 7,
            title: '军事',
          },
          {
            id: 8,
            title: '国际',
          },
          {
            id: 9,
            title: '时尚',
          },
        ],
        tag: 0,
      }
    },
    methods: {
      selectCategory: function (id) {
        this.tag = id;
        store.commit('switchTagBar', {homeTag: id});
      }
    }
  }
</script>

<style lang="scss" scoped>
  #categoryList {
    background-color: #f4f5f6;
    width: 100%;
    height: 1rem;
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    .categoryItem {
      width: 1rem;
      height: 100%;
      font-size: 0.4rem;
      display: inline-block;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      line-height: 1rem;
      text-align: center;
    }
    .categoryItem.active {
      font-size: 0.45rem;
      color: red;
    }
  }
</style>
