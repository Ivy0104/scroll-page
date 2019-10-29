<template>
  <div v-scroll="scroll" class="v-scroll-page">
    <div :style="{ transform: `translateY(${val_Y})` }" class="scroll-wrapper">
      <div class="scroll-item page-item"></div>
      <div class="scroll-item page-item"></div>
      <div class="scroll-item page-item"></div>
    </div>

    <side-bar :count="pageLen" :current-idx="currentIdx"/>
  </div>
</template>

<script>
import sideBar from 'comps/sideBar';
import mScroll from 'mixins/m-scroll';


export default {
  name: 'VScrollPage',
  components: { sideBar },
  mixins: [mScroll]

};
</script>

<style scoped>
  .v-scroll-page {
    overflow: hidden;
    height: 100vh;
  }

  .scroll-wrapper {
    transition: transform 0.5s ease;
  }

  .scroll-item {
    height: 100vh;
  }

  .scroll-item:nth-child(1) {
    background: #ff0;
  }

  .scroll-item:nth-child(2) {
    background: rgb(243, 145, 145);
  }

  .scroll-item:nth-child(3) {
    background: rgb(146, 101, 101);
  }
</style>
