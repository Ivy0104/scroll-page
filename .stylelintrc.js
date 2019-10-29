/**
 ** ********************************************************
 ** @file .stylelintrc.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-02-01 10:03:14
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:04:35
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-named': 'never',
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': [
      'always',
      {
        except: ['empty']
      }
    ],
    'string-quotes': 'single',
    'number-leading-zero': 'always',
    'value-keyword-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'selector-attribute-quotes': 'always',
    'selector-list-comma-newline-after': 'always-multi-line',
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null
  }
};
