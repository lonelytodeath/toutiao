<template>
  <div class="searchBar" :style="{width: width + 'rem'}">
    <input type="text" class="searchInput" placeholder="搜 你 想 搜 的" @focus="focus" ref="search" v-model="keyword">
  </div>
</template>

<script>
  export default {
    name: 'searchBar',
    props: ['onlyClick', 'width'],
    data () {
      return {
        keyword: '',
      }
    },
    watch: {
      keyword: function (newKeyword) {
        this.$emit('searchChange', newKeyword);
      }
    },
    methods: {
      focus: function () {
        if (this.onlyClick) {
          this.$refs.search.blur();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .searchBar {
    padding-left: 0.5rem;
    height: 1.1rem;
  }
  .searchInput {
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
  }
</style>
