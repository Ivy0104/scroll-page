/**
 ** ********************************************************
 ** The 404 page route config
 ** @file 404.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 10:19:56
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

export default [
  {
    name: '404',
    path: '/404',
    component: () => import(/* webpackChunkName: "v-404" */ 'views/V404'),
    meta: {
      title: '404'
    }
  }
];
