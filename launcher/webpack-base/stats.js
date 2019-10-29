/**
 ** ********************************************************
 ** The webpack stats config
 ** @file stats.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-14 13:33:54
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:48:49
 ** @tutorial https://webpack.js.org/configuration/stats
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

module.exports = {
  // assets order by name
  assetsSort: 'name',

  children: false,

  chunks: false,

  colors: true,

  warnings: false,

  // only log emmited files
  cachedAssets: false,

  // not show detail modules information
  maxModules: 0,

  // equals to cli --hide-modules
  modules: false,

  reasons: false,

  source: false,

  moduleTrace: false
};
