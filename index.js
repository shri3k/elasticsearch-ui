'use strict';

/**
 * Module dependencies
 */

const koa = require('koa');
const mount = require('koa-mount');
const conf = require('./config/');
const elastic = require('app/es');

const path = require('path');

var app = koa();

app.use(mount('/es', elastic(conf)));

app.listen(conf.port, ()=>{
	process.stdout.write(`Listening on ${conf.port}`);
});

