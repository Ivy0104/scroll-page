/**
 ** ********************************************************
 ** Auto set global components in the components/global dir
 ** Auto set global components in the components/ui/global dir
 ** @file component.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 09:41:02
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import { getRequireModules } from 'utils/debris';

const modules = require.context('comps/global', true, /\.vue$/);
const uiModules = require.context('ui/global', true, /\.vue$/);

modules.keys().forEach(key => {
  const { path, name } = getRequireModules('vue', key);
  const module = require(`comps/global/${path}`);
  Vue.component(KEBABCASE(name), module.default || module);
});

uiModules.keys().forEach(key => {
  const { path, name } = getRequireModules('vue', key);
  const module = require(`ui/global/${path}`);
  Vue.component(KEBABCASE(name), module.default || module);
});
