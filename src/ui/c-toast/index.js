/**
 ** ********************************************************
 ** @file index.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-22 10:03:32
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 10:05:50
 ** @example this.$toast(msg);
 ** @example this.$toast({ msg, duration });
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import CToast from './CToast';
import PopupManager from './PopupManager';

const popupManager = new PopupManager(5);

const ToastCtr = Vue.extend(CToast);

const Toast = function(options) {
  let cfg = options;

  if (typeof cfg === 'string') {
    cfg = { msg: cfg };
  }

  if (!cfg.msg || typeof cfg.msg !== 'string') {
    throw new Error(`toast 参数有误--${JSON.stringify(cfg)}`);
  }

  const vm = new ToastCtr({
    propsData: cfg
  }).$mount();

  window.document.body.appendChild(vm.$el);
  vm.visible = true;
  Vue.nextTick(() => popupManager.push(vm));

  return vm;
};

export default Toast;
