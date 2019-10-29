/**
 ** ********************************************************
 ** Promise finally polyfill
 ** @file promise.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 09:47:24
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

/* eslint-disable no-extend-native */

!Promise.prototype.finally &&
  Object.defineProperty(Promise.prototype, 'finally', {
    value(cb) {
      const P = this.constructor;
      return this.then(
        value => P.resolve(cb()).then(() => value),
        reason =>
          P.resolve(cb()).then(() => {
            throw reason;
          })
      );
    }
  });
