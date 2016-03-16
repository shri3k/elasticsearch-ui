const bulk = require('bulk-require');
var cmps = bulk(__dirname, ['cmps/**/*.js']);
module.exports = cmps;
