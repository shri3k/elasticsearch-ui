const path = require('path');
var cwd = __dirname;
var files = require('fs').readdirSync(path.resolve(__dirname, './cmps'));

var tmp = [];

module.exports = {
  App: require('./cmps/App.js')
};
