/**
 ** ********************************************************
 ** @file app-prod.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-16 17:39:26
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 15:57:43
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const express = require('express');
const compression = require('compression');
const { isTest } = require('../config/env-util');
const { test, prod } = require('../config/env');
const { dirs, vars } = require('../config/dir-vars');

const [app, envConfig] = [express(), isTest ? test : prod];

/**
 * @notice compression should be above other express middlewares,
 * otherwise, it will can't compress anything.
 */
app.set('env', envConfig.env);
app.use(compression({ threshold: 0 }));
app.use(`/${prod.sw}`, express.static(path.join(dirs.build, prod.sw)));
app.disable('x-powered-by');

require('./app-base')(app, {
  cacheable: true,
  proxy: envConfig.proxy,
  buildStatic: true,
  dataPath: path.join(dirs.build, vars.data)
});

require('./app-render')(app, envConfig.port);
