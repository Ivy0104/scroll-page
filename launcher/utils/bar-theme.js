/**
 ** ********************************************************
 ** @file bar-theme.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-16 17:02:27
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:04:14
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const chalk = require('chalk');

const token = `${chalk.green(':bar')} ${chalk.green(':percent')}`;

module.exports = {
  token,
  options: {
    width: 30,
    total: 100,
    summary: false,
    clear: true,
    format: `${token} | :msg`,
    complete: '\u2588',
    incomplete: '\u2591'
  }
};
