<template>
  <div class="category container" ref="category">
    <ul id="categoryList">
      <li v-for="item in items" class="categoryItem" :class="{ active: isActive === item.title}" v-on:click="selectCategory(item.title)" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'categoryTabar',
    data () {
      return {
        items: [
          {
            title: '推荐',
          },
          {
            title: '热点',
          },
          {
            title: '社会',
          },
          {
            title: '娱乐',
          },
          {
            title: '科技',
          },
          {
            title: '汽车',
          },
          {
            title: '体育',
          },
          {
            title: '财经',
          },
          {
            title: '军事',
          },
          {
            title: '国际',
          },
          {
            title: '时尚',
          },
        ],
        isActive: '推荐',
      }
    },
    methods: {
      selectCategory: function (title) {
        this.isActive = title;
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
