/**
 ** ********************************************************
 ** The webpack dll reference config
 ** @file reference.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 15:10:43
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const { DllReferencePlugin } = require('webpack');
const entry = require('../webpack-dll/entry');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { dirs, vars } = require('../config/dir-vars');

/**
 * @param {Object} options - custom options
 * @param {string} [options.glob] - specific glob
 * @param {string} options.publicPath - publicPath for dll
 * @param {boolean} options.sourceMap - whether add asset sourcemap file
 * @param {string} options.manifest - dll manifest
 * @returns {WebpackConfig} webpack dll reference config
 */
module.exports = (options = {}) => ({
  plugins: [
    new AddAssetHtmlPlugin(
      Object.keys(entry).map(key => ({
        filepath: path.join(dirs.dll, `${key}.bundle${options.glob || ''}.js`),
        publicPath: options.publicPath,
        outputPath: vars.scripts,
        includeSourcemap: !!options.sourceMap
      }))
    ),
    new DllReferencePlugin({
      manifest: require(`${dirs.dll}/${options.manifest}`)
    })
  ]
});
