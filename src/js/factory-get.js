'use strict';

var mod = require('./module');
var get = require('lodash.get');

mod.factory('get', function () {
    return get;
});
