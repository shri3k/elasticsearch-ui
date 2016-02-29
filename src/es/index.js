'use strict';

/**
 * Module dependencies
 */

/**
 * Core libs
 */
const path = require('path');

/**
 * Third party libs
 */
const koa = require('koa');
const route = require('koa-route');

/**
 * Local libs
 */
var elastic = require('./model');

/**
 * Application
 */
var app = koa();

module.exports = conf => {
  elastic = elastic(conf);
  return app;
};

app.use(function*(next) {
  var tmpRender = this.render;
  var self = this;
  this.render = function*() {
    // Replace Array.prototype.slice.call with es6 asa it hits v8.
    var args = Array.prototype.slice.call(arguments);
    var parentPath = {
      'parent': this.mountPath
    };
    Object.assign(args[1], parentPath);
    yield tmpRender.apply(self, args);
  };
  yield next;
});

var index = function*() {
  var result =
    yield elastic.home;
  yield * this.render('index', {
    data: result
  });
};

app.use(route.get('/', index));
