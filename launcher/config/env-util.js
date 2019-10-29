/**
 ** ********************************************************
 ** The envrionment variable and function
 ** @file env-util.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-13 14:07:35
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:35:37
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const getEnv = () => process.env.NODE_ENV;
const [dev, test, prod] = ['development', 'test', 'production'];

const check = env => [dev, test, prod].includes(env || getEnv());

module.exports = {
  dev,

  test,

  prod,

  getEnv,

  check,

  isDev: getEnv() === dev,

  isTest: getEnv() === test,

  isProd: getEnv() === prod
};
