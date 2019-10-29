export default {
  data() {
    return {
      val_Y: 0,
      pageLen: 0,
      currentIdx: 0
    };
  },
  mounted() {
    this.pageLen = document.querySelectorAll('.page-item').length;
  },
  methods: {
    scroll(e) {
      const { deltaY } = e;
      if (this.currentIdx === this.pageLen - 1 && deltaY > 0) {
        return;
      }
      if (this.currentIdx === 0 && deltaY < 0) {
        return;
      }
      this.currentIdx = deltaY > 0 ? this.currentIdx + 1 : this.currentIdx - 1;
      this.val_Y = `-${this.currentIdx * 100}vh`;
    }
  }
};
