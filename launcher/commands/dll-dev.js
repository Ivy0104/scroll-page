/**
 ** ********************************************************
 ** The webpack dll for development environment
 ** @file dll-dev.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-16 17:13:52
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:14:00
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const createDll = require('./dll-base');
const { dev } = require('../config/env');
const dllConfig = require('../webpack-dev/dll-config');

createDll({ ...dev, config: dllConfig });
