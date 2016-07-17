'use strict';

var mod = require('./module');
var largeNum = require('large-num');

mod.filter('largeNum', function () {
    return largeNum;
});
