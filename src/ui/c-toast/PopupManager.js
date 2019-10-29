/**
 ** ********************************************************
 ** @file PopupManager.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-22 10:04:37
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 10:04:40
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

class PopupManager {
  constructor(maxSize, yOffset) {
    this.cache = [];
    this.yOffset = yOffset || 60;
    this.maxSize = maxSize || 3;
  }

  push(vm) {
    const bottomVal = window.parseInt(PopupManager.getBottomVal(vm.$el));

    this.recycleDestroyed();
    if (this.cache.length >= this.maxSize) {
      this.cache.splice(0, 1)[0].vm.close();
    }
    this.cache.forEach(obj => {
      obj.bottom += this.yOffset;
      obj.vm.$el.style.bottom = `${obj.bottom}px`;
    });

    this.cache.push({ vm, bottom: bottomVal });
  }

  /* @notice _isDestroyed is vue instance option */
  recycleDestroyed() {
    for (let i = 0; i < this.cache.length; i++) {
      if (this.cache[i].vm._isDestroyed) {
        this.cache.splice(i, 1);
        i -= 1;
      }
    }
  }

  static getBottomVal(ele) {
    return window.getComputedStyle(ele).getPropertyValue('bottom');
  }
}

export default PopupManager;
