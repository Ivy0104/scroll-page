/**
 ** ********************************************************
 ** The webpack dll entry
 ** @file entry.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-21 14:31:00
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

module.exports = {
  vendor: [
    'vue',
    'vuex',
    'vue-router',
    'axios',
    'core-js',
    'lodash.camelcase',
    'lodash.kebabcase'
  ]

  // you can add more contents here for multi entries use
  // but the value must be array type
};
