/**
 ** ********************************************************
 ** Globally handle uncaught and unhandled err with -r/--require node cli option
 ** @file error-handler.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-16 17:08:56
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:11:46
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const logger = require('../utils/logger');

process.on('uncaughtException', err => {
  logger.error(err);
});

process.on('unhandledRejection', err => {
  logger.error(err);
});
