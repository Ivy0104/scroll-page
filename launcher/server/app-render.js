/**
 ** ********************************************************
 ** @file app-render.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-22 10:50:53
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 11:38:10
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const logger = require('../utils/logger');

/**
 * @param {Error} err - error object
 * @param {number} port - local server port
 * @returns {void}
 */
const errorHandler = (err, port) => {
  const { code } = err;

  if (err.syscall !== 'listen') {
    logger.fatal(err);
  }
  if (code === 'EACCES') {
    logger.fatal(new Error(`port ${port} requires elevated privileges`));
  }
  if (code === 'EADDRINUSE') {
    logger.fatal(new Error(`port ${port} is already in use`));
  }

  logger.fatal(err);
};

module.exports = (app, port) => {
  app.listen(port);
  app.on('error', err => errorHandler(err, port));
};
