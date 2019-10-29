/**
 ** ********************************************************
 ** @file app-dev.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-16 17:39:08
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-22 15:29:22
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const EventEmitter = require('events');
const webpack = require('webpack');
const express = require('express');
const open = require('opn');
const chokidar = require('chokidar');
const clear = require('cli-clear');
const ProgressBar = require('progress');
const logger = require('../utils/logger');
const webpackConfig = require('../webpack-dev');
const { dev } = require('../config/env');
const { dirs } = require('../config/dir-vars');

const BAR = {
  INIT: 'bar-init',
  DONE: 'bar-done'
};

const emitter = new EventEmitter();
const app = express();
const templatePath = path.join(dirs.src, 'index.html');

(() => {
  const theme = require('../utils/bar-theme');
  let [bar, timer] = [];

  const handler = () => {
    timer && clearInterval(timer);
    timer = setInterval(() => {
      bar.tick();
      bar.complete && clearInterval(timer);
    }, 1000 / 60);
  };

  emitter.on(BAR.INIT, () => {
    clear();
    bar = new ProgressBar(theme.token, theme.options);
    handler();
  });
  emitter.on(BAR.DONE, () => {
    bar.tick(theme.options.total);
  });
})();

emitter.emit(BAR.INIT);

require('./app-base')(app, { proxy: dev.proxy, dataPath: dirs.data });

app.use(require('connect-history-api-fallback')());

if (typeof webpackConfig.entry !== 'object') {
  logger.fatal(new TypeError('The webpack client entry is not object type'));
}

Object.keys(webpackConfig.entry).forEach(key => {
  const webpackEntry = webpackConfig.entry[key];
  const hmr = path.join(__dirname, '../webpack-dev/hot-client.js');
  const msg = `The webpack entry ${key} is not string or array type`;
  if (webpackEntry instanceof Array) {
    webpackConfig.entry[key] = [hmr].concat(webpackEntry);
  } else if (typeof webpackEntry === 'string') {
    webpackConfig.entry[key] = [hmr, webpackEntry];
  } else {
    logger.fatal(new TypeError(msg));
  }
});

const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  logLevel: 'warn',
  publicPath: webpackConfig.output.publicPath,
  stats: webpackConfig.stats
});
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  heartbeat: 5000,
  log: () => {} // eslint-disable-line
});

app.use(devMiddleware);
app.use(hotMiddleware);

compiler.plugin('done', () => emitter.emit(BAR.DONE));

chokidar.watch(templatePath).on('change', () => {
  hotMiddleware.publish({ action: 'reload' });
});

devMiddleware.waitUntilValid(() => {
  open(`http://${require('ip').address()}:${dev.port}`);
});

require('./app-render')(app, dev.port);
