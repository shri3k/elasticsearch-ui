const defaults = require('defaults');
var cli = require('./cli');
var nodeEnv = process.env.NODE_ENV || 'dev';
var conf = require(`./env/${nodeEnv}`);
module.exports = defaults(cli, conf);
