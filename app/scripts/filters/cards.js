'use strict';

/**
 * @ngdoc filter
 * @name coinioApp.filter:cards
 * @function
 * @description
 * # cards
 * Filter in the coinioApp.
 */
angular.module('coinioApp')
  .filter('cards', function () {
    return function (input) {
      return 'cards filter: ' + input;
    };
  });


//    this works on ng-repeat          | filter:{'coin': 'BTC'} :true"