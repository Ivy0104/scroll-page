/**
 ** ********************************************************
 ** The common webpack config for all environments
 ** @file index.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 18:58:45
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const { ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dirs } = require('../config/dir-vars');

/**
 * @param {Object} options - custom options
 * @param {boolean} options.htmlMinify - html minify options
 * @returns {WebpackConfig} - webpack config
 */
module.exports = (options = {}) => ({
  entry: {
    app: path.join(dirs.src, 'entry.js')
  },

  output: {
    path: dirs.build,
    publicPath: '/'
  },

  resolve: {
    modules: [dirs.node, dirs.src],
    alias: require('./alias'),
    extensions: ['.js', '.vue', '.json']
  },

  stats: require('./stats'),

  plugins: [
    new ProvidePlugin({
      Vue: 'vue',
      CAMELCASE: 'lodash.camelcase',
      KEBABCASE: 'lodash.kebabcase'
    }),
    new HtmlWebpackPlugin({
      minify: options.htmlMinify
        ? {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
        : false,
      template: path.join(dirs.src, 'index.html'),
      filename: path.join(dirs.build, 'index.html')
    })
  ]
});
