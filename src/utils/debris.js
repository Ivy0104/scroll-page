/**
 ** ********************************************************
 ** The debris pile of utils
 ** @file debris.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-22 09:38:39
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 09:40:02
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

/**
 * @param {string} type - module type, for example: vue, js ...etc
 * @param {string} key - module path value
 * @returns {Object<path, name>} - return name and path of module
 */
export const getRequireModules = (type, key) => {
  const reg = new RegExp(`.${type}$`, 'ig');
  const path = key.replace(/^(.\/)/, '');
  return {
    path,
    name: (keys => {
      const i = keys.length - 1;
      return keys[i].toLowerCase() === 'index' ? keys[i - 1] : keys[i];
    })(path.replace(reg, '').split('/'))
  };
};
