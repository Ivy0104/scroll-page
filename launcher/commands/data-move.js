/**
 ** ********************************************************
 ** Copy the src/data folder to dist dir
 ** @file data-move.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:12:56
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const fse = require('fs-extra');
const logger = require('../utils/logger');
const { dirs, vars } = require('../config/dir-vars');

const msg = `Copy /${vars.src}/${vars.data} -> /${vars.build}/${vars.data}`;

fse
.copy(dirs.data, path.join(dirs.build, 'data'), {
  overwrite: false,
  errorOnExist: true
})
.then(() => logger.done(msg))
.catch(err => {
  if (err.code === 'ENOENT') {
    logger.info('No data directory needed to copy');
  } else {
    logger.error(err);
  }
});
