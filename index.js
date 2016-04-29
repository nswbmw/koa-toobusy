'use strict';

var toobusy = require('toobusy-js');

module.exports = function (options) {
  options = options || {};
  if (options.maxLag) {
    toobusy.maxLag(options.maxLag);
  }
  if (options.interval) {
    toobusy.interval(options.interval);
  }
  
  return function* koaToobusy(next) {
    console.log(toobusy())
    if (toobusy()) {
      this.status = options.status || options.statusCode || 503;
      this.body = options.message || 'Server is too busy. Please, try again later.';
      return;
    }
    yield* next;
  };
};