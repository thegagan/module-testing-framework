'use strict';

/**
 * @ngdoc function
 * @name coinioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coinioApp
 */
angular.module('coinioApp').controller('MainCtrl', function ($scope) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];

	$scope.pCard = [
		{
			user: "betaUser99",
			userPts: 4.56,
			coin: "BTC",
			trend: "long",
			buy: .00325,
			sell: .00452,
			stop: .00306,
			score: 3.65
		}, {
			user: "gaznox",
			userPts: -1.46,
			coin: "ETC",
			trend: "short",
			buy: .00325,
			sell: .00452,
			stop: .00306,
			score: 3.65
		}
	];

});
