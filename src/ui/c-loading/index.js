/**
 ** ********************************************************
 ** @file c-loading/index.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-22 10:00:53
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 10:02:31
 ** @example base usage
 ** const loader = this.$loader('加载中...');
 ** loader.show();
 ** setTimeout(() => loader.hide(), 3000);
 ** @example use options, more options please check c-loading
 ** const loader = this.$loader({ text: '加载中...', color: '#fff' });
 ** @example single instance
 ** const loader = this.$loader();
 ** const otherLoader = this.$loader();
 ** loader === otherLoader // true
 ** @example dynamic update loading text
 ** const loader = this.$loader();
 ** [1, 2, 3, 4, 5].forEach(item => loader.show(item));
 ** @example mount c-loading at router-view, default mounted at body
 ** <router-view class="router-view"/>
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import CLoading from './CLoading';

let [vm, propsData] = [];

const Loading = options => {
  if (typeof options === 'string') {
    propsData = { text: options };
  } else {
    propsData = options;
  }
  if (vm && vm.visible) {
    return vm;
  }
  const view = document.querySelector('.router-view') || document.body;
  vm = new Vue({ ...CLoading, propsData }).$mount();
  view.appendChild(vm.$el);
  return vm;
};

export default Loading;
