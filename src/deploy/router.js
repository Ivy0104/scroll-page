/**
 ** ********************************************************
 ** Vue router config
 ** @file router.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 09:49:38
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import VueRouter from 'vue-router';
import { getRequireModules } from 'utils/debris';

Vue.use(VueRouter);

let routes = [];
const modules = require.context('routes', true, /\.js$/);

modules.keys().forEach(key => {
  const { path } = getRequireModules('js', key);
  const module = require(`routes/${path}`);
  routes = routes.concat(module.default || module);
});

routes.push({ path: '*', redirect: '/404' });

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta && to.meta.position) {
      return to.meta.position;
    }
    return { x: 0, y: 0 };
  }
});

export default router;
