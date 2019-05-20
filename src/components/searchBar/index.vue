<template>
  <div class="searchBar">
    <input type="search" class="searchInput" placeholder="🔎 搜 你 想 搜 的" :readonly="readonly"/>
  </div>
</template>

<script>
  export default {
    name: 'searchBar',
    props: {
      readonly: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        msg: '',
      }
    },
    methods: {
    }
  };
</script>

<style lang="scss" scoped>
  .searchBar {
    width: 6rem;
    padding-left: 0.5rem;
    height: 1.1rem;
  }
  .searchInput {
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
</style>
