<template>
  <div class="bottomTabar">
    <router-link :to="{name: 'HomePage'}" class="bottomTabarItem">
      <div>
        <img src="./../../assets/img/homePage.png" class="icon" v-if="currentRouter !== 'HomePage'"/>
        <img src="./../../assets/img/homePageSelect.png" class="icon" v-else/>
      </div>
      <div>
        主页
      </div>
    </router-link>
    <router-link :to="{name: 'Bookmark'}" class="bottomTabarItem">
      <div>
        <img src="./../../assets/img/bookmark.png" class="icon" v-if="currentRouter !== 'Bookmark'"/>
        <img src="./../../assets/img/bookmarkSelect.png" class="icon" v-else/>
      </div>
      <div>
        收藏
      </div>
    </router-link>
    <router-link :to="{name: 'AboutMe'}" class="bottomTabarItem">
      <div>
        <img src="./../../assets/img/me.png" class="icon" v-if="currentRouter !== 'AboutMe'"/>
        <img src="./../../assets/img/meSelect.png" class="icon" v-else/>
      </div>
      <div>
        个人
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'bottomTabar',
    data () {
      return {
        msg: '',
      }
    },
    computed: {
      currentRouter () {
        return this.$store.state.currentTabar;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .bottomTabar {
    width: 100%;
    height: 1.5rem;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    border-top: 1px solid #ccc;
    background-color: #fbfbfb;
  }
  .bottomTabarItem {
    width: 33.33%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    color: darkgray;
    text-decoration: none;
  }
  .bottomTabarItem .icon {
    width: 0.7rem;
  }
</style>
