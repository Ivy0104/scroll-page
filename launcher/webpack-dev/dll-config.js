/**
 ** ********************************************************
 ** The webpack dll config for development environment
 ** @file dll-config.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-19 16:21:24
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const merge = require('webpack-merge');
const baseLoaders = require('../webpack-base/loaders');
const basePlugins = require('../webpack-base/plugins');
const baseDevConfig = require('../webpack-dev/base');
const baseDllConfig = require('../webpack-dll');
const entry = require('../webpack-dll/entry');
const { getDllPackageList } = require('../utils/debris');
const { dev } = require('../config/env');
const { dirs } = require('../config/dir-vars');

module.exports = merge(
  baseLoaders({
    dll: getDllPackageList(entry).map(pkg => path.join(dirs.node, pkg))
  }),
  basePlugins({
    useProgress: true
  }),
  baseDevConfig(),
  baseDllConfig({
    manifestPath: path.join(dirs.dll, dev.dllManifest)
  }),
  {
    output: {
      path: dirs.dll,
      filename: '[name].bundle.js'
    }
  }
);
