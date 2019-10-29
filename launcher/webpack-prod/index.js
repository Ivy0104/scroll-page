/**
 ** ********************************************************
 ** The webpack config in production environment
 ** @file index.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 18:54:01
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const merge = require('webpack-merge');
const { optimize: { CommonsChunkPlugin } } = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');
const baseConfig = require('../webpack-base');
const baseLoaders = require('../webpack-base/loaders');
const basePlugins = require('../webpack-base/plugins');
const baseProdConfig = require('../webpack-prod/base');
const dllReferenceConfig = require('../webpack-dll/reference');
const pkg = require('../../package.json');
const entry = require('../webpack-dll/entry');
const extractCss = require('./extract-css');
const { prod } = require('../config/env');
const { vars } = require('../config/dir-vars');

const getAssetType = chunk => {
  if (/\.css$/.test(chunk)) {
    return 'style';
  }
  if (/\.(svg|woff2?|ttf|eot)\??.*$/.test(chunk)) {
    return 'font';
  }
  if (/\.(png|jpe?g|gif|ico)(\?.*)?$/.test(chunk)) {
    return 'image';
  }
  return 'script';
};

module.exports = merge(
  baseConfig({
    htmlMinify: true
  }),
  baseLoaders({
    hash: true,
    extractCss
  }),
  basePlugins({
    vue: { loaders: { css: extractCss } },
    useProgress: true
  }),
  baseProdConfig(),
  dllReferenceConfig({
    glob: prod.dllPattern,
    publicPath: `/${vars.scripts}`,
    sourceMap: true,
    manifest: prod.dllManifest
  }),
  {
    output: {
      filename: `${vars.scripts}/[name].bundle.[chunkhash:6].js`,
      chunkFilename: `${vars.scripts}/[name].[chunkhash:6].js`
    },

    plugins: [
      new CommonsChunkPlugin({
        name: 'common',
        minChunks: (module, count) =>
          !new RegExp(vars.node).test(module.context) &&
          !/\.css$/.test(module.request) &&
          count >= 5
      }),
      new CommonsChunkPlugin({ name: 'manifest' }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
        preload: Object.keys(entry)
      }),
      new PreloadWebpackPlugin({
        rel: 'preload',
        as: getAssetType,
        include: 'initial'
      }),
      new PreloadWebpackPlugin({
        rel: 'prefetch',
        as: getAssetType,
        include: 'asyncChunks'
      }),
      new SWPrecachePlugin({
        cacheId: pkg.name,
        filename: prod.sw,
        minify: true,
        dontCacheBustUrlsMatching: /./,
        staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
        runtimeCaching: [{ urlPattern: '*', handler: 'networkFirst' }]
      })
    ]
  }
);
