/**
 ** ********************************************************
 ** The webpack config in development environment
 ** @file index.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 15:00:51
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const baseConfig = require('../webpack-base');
const baseLoaders = require('../webpack-base/loaders');
const basePlugins = require('../webpack-base/plugins');
const baseDevConfig = require('../webpack-dev/base');
const dllReferenceConfig = require('../webpack-dll/reference');
const { dev } = require('../config/env');
const { vars } = require('../config/dir-vars');

module.exports = merge(
  baseConfig(),
  baseLoaders({
    useEslint: true
  }),
  basePlugins(),
  baseDevConfig(),
  dllReferenceConfig({
    publicPath: `/${vars.scripts}`,
    manifest: dev.dllManifest
  }),
  {
    output: {
      filename: `${vars.scripts}/[name].bundle.js`,
      chunkFilename: `${vars.scripts}/[name].js`
    },

    plugins: [new HotModuleReplacementPlugin()]
  }
);
