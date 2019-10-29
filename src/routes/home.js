/**
 ** ********************************************************
 ** The home page route config
 ** @file home.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 10:19:50
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

export default [
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "v-home" */ 'views/VHome'),
    meta: {
      title: 'home page'
    }
  },
  {
    name: 'scroll',
    path: '/scrollPage',
    component: () =>
      import(/* webpackChunkName: "v-home" */ 'views/v-scroll-page'),
    meta: {
      title: 'scroll page'
    }
  }
];
