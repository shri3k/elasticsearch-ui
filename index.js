'use strict';

/**
 * Module dependencies
 */
const koa = require('koa');
const mount = require('koa-mount');
const elastic = require('app/es-ui');
const path = require('path');

/**
 * Local Deps
 */
const conf = require('./config/');

var app = koa();

app.use(mount('/es', elastic(conf)));

app.listen(conf.port, ()=>{
	process.stdout.write(`Listening on ${conf.port}`);
});

