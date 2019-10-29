/**
 ** ********************************************************
 ** The common webpack config for development environment and dev dll
 ** @file base.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-19 16:17:09
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const { DefinePlugin } = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { dev } = require('../config/env');

module.exports = () => ({
  devtool: 'cheap-module-eval-source-map',

  stats: 'none',

  performance: false,

  plugins: [
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(dev.env) }
    }),
    new FriendlyErrorsPlugin()
  ]
});
