/**
 ** ********************************************************
 ** The config in different environments
 ** @file env.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-13 14:18:04
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 11:42:28
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const { dev, test, prod } = require('./env-util');

module.exports = {
  dev: {
    port: 3000,
    env: dev,
    proxy: {},
    dllPattern: '',
    dllManifest: 'dev-manifest.json'
  },

  test: {
    port: 8080,
    env: test,
    proxy: {}
  },

  prod: {
    port: 8080,
    env: prod,
    proxy: {},
    dllPattern: '.**',
    dllManifest: 'prod-manifest.json',
    sw: 'service-worker.js'
  }
};
