/**
 ** ********************************************************
 ** The node&npm version check
 ** @file version-check.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:14:48
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const cp = require('child_process');
const semver = require('semver');
const { engines: { node, npm } } = require('../../package.json');
const logger = require('../utils/logger');

if (!semver.valid(node)) {
  return void logger.fatal(new TypeError(`invalid node version ${node}`));
}
if (!semver.valid(npm)) {
  return void logger.fatal(new TypeError(`invalid npm version ${npm}`));
}

[
  {
    name: 'node',
    curr: semver.clean(process.version),
    required: node
  },
  {
    name: 'npm',
    curr: cp
    .execSync('npm -v')
    .toString()
    .trim(),
    required: npm
  }
].forEach(item => {
  const { name, curr, required } = item;
  if (!semver.satisfies(curr, required)) {
    return void logger.fatal(
      new Error(`${name} version ${curr} should be ${required}`)
    );
  }
});

logger.done('Valid node&npm version');
