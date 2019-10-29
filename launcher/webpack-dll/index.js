/**
 ** ********************************************************
 ** The webpack common dll config
 ** @file index.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-19 16:30:40
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const { DllPlugin } = require('webpack');
const entry = require('../webpack-dll/entry');

const library = '[name]_[chunkhash:6]';

/**
 * @param {Object} options - custom options
 * @param {string} options.manifestPath - manifest json file's absolute path
 * @return {WebpackConfig} webpack dll config
 */
module.exports = (options = {}) => ({
  entry,

  output: {
    library
  },

  resolve: {
    alias: require('../webpack-base/alias')
  },

  plugins: [
    new DllPlugin({
      name: library,
      path: options.manifestPath
    })
  ]
});
