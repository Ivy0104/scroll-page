/**
 ** ********************************************************
 ** @file m-title.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-22 09:31:14
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 09:36:47
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const getTitle = vm => {
  const routeTitle = vm.$route && vm.$route.meta && vm.$route.meta.title;
  const title = vm.$options.title || routeTitle;
  return typeof title === 'function' ? title.call(vm) : title;
};

export default {
  mounted() {
    const title = getTitle(this);
    title && (document.title = title);
  },
  activated() {
    const title = getTitle(this);
    title && (document.title = title);
  }
};
