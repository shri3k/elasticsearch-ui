'use strict';

/**
 * Module dependencies
 */
const koa = require('koa');
const mount = require('koa-mount');
const elastic = require('./src/es');
const path = require('path');
const serve = require('koa-static');
const hbs = require('koa-hbs');

/**
 * Local Deps
 */
const conf = require('./config/');

var app = koa();

app.use(serve(path.resolve(__dirname, './public')));
app.use(hbs.middleware({
  viewPath: path.resolve(__dirname, './views')
}));

app.use(mount('/', elastic(conf)));

app.listen(conf.port, () => {
  process.stdout.write(`Listening on ${conf.port}`);
});
