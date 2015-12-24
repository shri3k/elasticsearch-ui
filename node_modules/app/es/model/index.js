'use strict';
/**

 * Module dependencies
 */

const es = require('elasticsearch');
const req = require('request');


function createClient(conf) {
  var client = es.Client({
    'host': conf.elastisearch,
    'log': conf.debug && 'trace'
  });
  return {
    'home': new Promise(function(resolve, reject) {
      req(conf.elasticsearch, function(err, res, body) {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    })
  };
}
module.exports = conf => {
  return createClient(conf);
}
