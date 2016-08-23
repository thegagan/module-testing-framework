'use strict';

/**
 * @ngdoc directive
 * @name coinioApp.directive:leftnav
 * @description
 * # leftnav
 */
angular.module('coinioApp')
  .directive('leftnav', function () {
    return {
      templateUrl: 'views/leftnav.html',
      restrict: 'E'
    };
  });
