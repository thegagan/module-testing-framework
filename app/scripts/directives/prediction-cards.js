'use strict';

/**
 * @ngdoc directive
 * @name coinioApp.directive:predictionCards
 * @description
 * # predictionCards
 */
angular.module('coinioApp')
  .directive('predictionCards', function () {
    return {
      templateUrl: 'views/predictioncards.html',
      restrict: 'E',
      scope: false
    };
  });
