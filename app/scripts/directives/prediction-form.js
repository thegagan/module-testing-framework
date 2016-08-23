'use strict';

/**
 * @ngdoc directive
 * @name coinioApp.directive:predictionForm
 * @description
 * # predictionForm
 */
angular.module('coinioApp')
  .directive('predictionForm', function () {
    return {
      templateUrl: 'views/predictionform.html',
      restrict: 'E',
      controller: function($scope, pNew) {
      	$scope.pNew = pNew;
		$scope.allCoins = [
			{
				"coin": "BTC",
				"name": "Bitcoin",
			}, {
				"coin": "ETH",
				"name": "Ethereum",
			}, {
				"coin": "ETC",
				"name": "Ethereum Classic",
			}, {
				"coin": "FCT",
				"name": "Factom",
			}
		];
      }
    };
  });
