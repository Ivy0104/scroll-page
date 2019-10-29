/**
 ** ********************************************************
 ** The webpack config for analyse
 ** @file index.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-13 14:23:01
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-21 14:59:04
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('../webpack-prod');

module.exports = merge(prodConfig, {
  profile: true,

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerHost: 'localhost',
      analyzerPort: 3001,
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: 'stats.json'
    })
  ]
});
