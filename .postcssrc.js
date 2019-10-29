/**
 ** ********************************************************
 ** The postcss config file for postcss-loader and vue-loader uses
 ** @file .postcssrc.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-13 14:25:58
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-27 15:40:53
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const cssnext = require('postcss-cssnext')({
  browsers: ['last 10 versions'],
  cascade: false,
  features: {
    rem: { html: false, browsers: 'ie >= 10' },
    customProperties: { variables: require('./launcher/config/design') },
    calc: { mediaQueries: true }
  }
});

module.exports = {
  plugins: [cssnext]
};
