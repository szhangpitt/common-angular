'use strict';

var angular = require('angular');
var largeNumFilter = require('./large-num');

angular.module('ui-utils', [])

.filter('largeNum', largeNumFilter);
