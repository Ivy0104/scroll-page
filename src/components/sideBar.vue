<template>
  <div
    :class="{ 'blue-color': withBlueColor }"
    class="page-idx-ctn flex-center">
    <div
      v-for="(item, index) in count"
      :key="index"
      class="page-item-idx  page-item-idx">
      <div v-if="item - 1 === currentIdx" class="idx-item">0{{ item }}</div>
      <div v-else class="circle-dot-item"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: {
      currentIdx: {
        type: Number,
        default: 0
      },
      count: {
        type: Number,
        default: 0
      },
      blueColorRange: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      withBlueColor() {
        return this.blueColorRange.indexOf(this.currentIdx) !== -1;
      }
    }
  };
</script>

<style scoped>
  .page-idx-ctn {
    width: 20px;
    z-index: 9;
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    color: #fff;
  }

  .blue-color {
    color: #499aff;
  }

  .page-item-idx + .page-item-idx {
    margin-top: 40px;
  }

  .circle-dot-item {
    width: 7px;
    height: 7px;
    background: currentColor;
    border-radius: 100%;
  }

  .idx-item {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid currentColor;
    text-align: center;
  }
</style>
