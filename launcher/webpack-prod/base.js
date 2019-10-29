/**
 ** ********************************************************
 ** The common webpack config in production environment and prod dll
 ** @file base.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 16:20:20
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const {
  DefinePlugin,
  HashedModuleIdsPlugin,
  optimize: { ModuleConcatenationPlugin }
} = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const { prod } = require('../config/env');
const { dirs, vars } = require('../config/dir-vars');

module.exports = () => ({
  devtool: 'source-map',

  stats: require('../webpack-base/stats'),

  plugins: [
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(prod.env) }
    }),
    new HashedModuleIdsPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { autoprefixer: false, safe: true }
    }),
    new ParallelUglifyPlugin({
      cacheDir: path.join(dirs.node, '.cache', 'uglify'),
      sourceMap: true
    }),
    new ExtractTextPlugin(`${vars.styles}/[name].bundle.[contenthash:6].css`),
    new ModuleConcatenationPlugin()
  ]
});
