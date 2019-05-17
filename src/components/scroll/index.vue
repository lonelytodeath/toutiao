<template>
  <div class="scrollBox" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
    <header class="pullRefresh" :style="{'margin-top': marginTop + 'px'}">
      <img src="./../../assets/img/refreshLoading.gif" class="refreshIcon"/>
      <span>{{ state === 0 ? '下拉更新' : state === 1 ? '松开更新' : '正在更新中....'}}</span>
    </header>
    <slot v-bind:state="state" v-bind:action="action"></slot>
    <footer class="loadMore">
      <div>
        {{ noDataFlag ? '我是有底线的' : state === 0 ? '上拉下载更多' : '正在加载中...'}}
      </div>
    </footer>
  </div>
</template>

<script>
  const height = 60;
  const threshold = 150;
  export default {
    name: 'scroll',
    data() {
      return {
        scrollTop: 0,
        state: 0, // 0未刷新, 1为松开刷新，2为正在刷新
        startY: 0, // 窗口纵坐标
        marginTop: -height,
        startPageY: 0, // 文档纵坐标
        action: 0, // 1为下拉，2为上拉
        noDataFlag: false, // 是否有新数据的标识
      }
    },
    created () {
      const _self = this;
      window.onscroll = function () {
        _self.scrollTop = _self.getScrollTop();
        _self.windowHeight = _self.getWindowHeight();
        _self.scrollHeight = _self.getScrollHeight();
      }
    },
    methods: {
      touchStart: function (e) {
        this.noDataFlag = false;
        this.state = 0;
        this.action = 0;
        this.startY = e.targetTouches[0].clientY;
      },
      touchMove: function (e) {
        const move = e.targetTouches[0].clientY - this.startY;
        if (move > 0 && this.scrollTop <= 0) { // 下拉并且已经滚动到顶部， 触发下拉更新
          if (e.cancelable) {
            e.preventDefault();
          }
          if (move >= height) {
            this.marginTop = 0;
            this.action = 1;
            this.state = 1;
          } else {
            this.marginTop = -height + move;
          }
        }
        if (move < 0 && this.action !== 2) { // 上拉并且到达底部，触发上拉刷新
          this.action = 2;
        }
      },
      touchEnd: function (e) {
        if (this.action === 1) { // 下拉刷新中
          if (this.state === 1) {
            this.state = 2;
          }
        }
        else if (this.action === 2 && this.scrollTop + this.windowHeight + threshold >= this.scrollHeight) { // 触发上拉加载
          if (this.state !== 2) {
            this.state = 2;
          }
        }
        else {
          this.marginTop = -height;
        }
      },
      // 滚动条到顶部距离
      getScrollTop: function () {
        let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if(document.body){
          bodyScrollTop = document.body.scrollTop;
        }
        if(document.documentElement){
          documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
      },
      // 滚动条的总高度
      getScrollHeight: function () {
        let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if(document.body){
          bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
          documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
      },
      // 可视区的高度
      getWindowHeight: function () {
        let windowHeight = 0;
        if(document.compatMode === "CSS1Compat"){
          windowHeight = document.documentElement.clientHeight;
        } else {
          windowHeight = document.body.clientHeight;
        }
        return windowHeight;
      },
      // 加载完毕后更改状态
      loadingSuccess: function (isSuccess, newsCount) {
        if (isSuccess) {
          if (this.action === 1) {
            this.marginTop = -height;
          }
          this.state = 0;
          this.noDataFlag = newsCount <= 0;
        }
      },
      // 滚动条置顶
      scrollToTop: function () {
        window.scrollTo(0,0);
        this.action = 0;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .pullRefresh {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    overflow: hidden;
  }
  .refreshIcon {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 5px;
  }
</style>
