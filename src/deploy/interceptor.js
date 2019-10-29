/**
 ** ********************************************************
 ** Ajax interceptor
 ** @file interceptor.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 09:46:29
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import axios from 'axios';

axios.defaults.timeout = 10000;

// if ajax url doesn't start with http, https or /data,
// it will add prefix of /api automatically
axios.interceptors.request.use(
  config => {
    const { url } = config;
    !/^(https?:|\/\/|\/data)/.test(url) &&
      (config.url = `/api${/^\//.test(url) ? '' : '/'}${url}`);
    return config;
  },
  err => Promise.reject(err)
);

// if errcode doesn't equal with zero, catch error handle
axios.interceptors.response.use(
  res => (+res.data.errcode === 0 ? res.data : Promise.reject(res)),
  err => Promise.reject(err)
);
