/**
 ** ********************************************************
 ** Log msg beautifully
 ** @file logger.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-16 17:08:01
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:11:59
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const chalk = require('chalk');
const PrettyError = require('pretty-error');
const clear = require('cli-clear');

const pe = new PrettyError();
pe.appendStyle(require('../utils/pe-theme'));

/** @enum */
const TYPE = {
  INFO: 'info',
  DONE: 'done',
  WARN: 'warn',
  ERROR: 'error',
  FATAL: 'fatal'
};

/** @enum */
const LOG_ENUM = {
  [TYPE.INFO]: '#0000ff',
  [TYPE.DONE]: '#008000',
  [TYPE.WARN]: '#ffff00',
  [TYPE.ERROR]: '#ff0000',
  [TYPE.FATAL]: '#800000'
};

/**
 * @param {LoggerType} key - the key of {@type LOG_ENUM}
 * @param {LoggerMsg} msg - log msg list
 * @returns {string} - formatted log
 */
const getBeautyLog = (key, ...msg) => {
  if (!msg.length) {
    return '';
  }
  return `\n${chalk
  .bgHex(LOG_ENUM[key])
  .black(` ${key.toUpperCase()} `)} ${chalk.hex([LOG_ENUM[key]])(...msg)}\n`;
};

/**
 * @param {string} type - console method's name
 * @param {LoggerType} key - the key of {@enum LOG_ENUM}
 * @param {LoggerMsg} msg - log's msg list or error object
 * @returns {void}
 */
const log = (type, key, ...msg) => {
  if (!msg.length) {
    return console[type]();
  }
  let [val, err] = [''];

  msg.forEach(arg => {
    arg instanceof Error && (err = err || arg);
    val += `${arg} `;
  });
  val = val.trim();

  clear();
  return console[type](
    `${getBeautyLog(key, err || val)}${
      type === TYPE.ERROR ? pe.render(err || val) : ''
    }`
  );
};

module.exports = {
  info(...msg) {
    log(TYPE.INFO, TYPE.INFO, ...msg);
  },
  done(...msg) {
    log('log', TYPE.DONE, ...msg);
  },
  warn(...msg) {
    log(TYPE.WARN, TYPE.WARN, ...msg);
  },
  error(...msg) {
    log(TYPE.ERROR, TYPE.ERROR, ...msg);
  },
  fatal(...msg) {
    const { exit } = process;
    log(TYPE.ERROR, TYPE.FATAL, ...msg);
    msg.length && exit(1);
  },
  ...TYPE
};
