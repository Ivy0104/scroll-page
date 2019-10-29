/**
 ** ********************************************************
 ** The Webpack hmr and enable html files auto reload while updated
 ** @file hot-client.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-20 10:17:52
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

require('eventsource-polyfill');

/* eslint-disable-next-line */
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(event => {
  event.action === 'reload' && window.location.reload();
});
