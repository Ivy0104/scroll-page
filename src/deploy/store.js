/**
 ** ********************************************************
 ** Vue store config
 ** @file store.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 09:51:19
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import Vuex from 'vuex';
import { getRequireModules } from 'utils/debris';
import { isDev } from 'envUtil';

Vue.use(Vuex);

const modules = {};
const context = require.context('store/modules', true, /\.js$/);

context.keys().forEach(key => {
  const { path, name } = getRequireModules('js', key);
  if (name === 'index') {
    return;
  }
  const module = require(`store/modules/${path}`);
  modules[CAMELCASE(name)] = module.default || module;
});

export default new Vuex.Store({
  modules,
  strict: isDev
});
