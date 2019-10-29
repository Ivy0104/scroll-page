/**
 ** ********************************************************
 ** @file build-app.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-16 17:15:24
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-21 14:58:05
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const clear = require('cli-clear');
const prodConfig = require('../webpack-prod');
const { compileWebpack } = require('../utils/debris');

clear();

compileWebpack(prodConfig, {
  msg: 'Webpack assets is builded',
  showStats: true,
  terminateOnError: true
});
