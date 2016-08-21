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
			user: 'betaUser99',
			userId: '1',
			userPts: '4.56',
			coin: 'BTC',
			trend: 'long',
			buy: '.00325',
			sell: '.00452',
			stop: '.00306',
			score: '3.65'
		}, {
			user: 'gaznox',
			userId: '2',
			userPts: '-1.46',
			coin: 'ETC',
			trend: 'short',
			buy: '.00325',
			sell: '.00452',
			stop: '.00306',
			score: '-3.65'
		}
	];

	$scope.colorize = function(card) {
		if (card.score > 0) {
			return "green";
		}
		if (card.score < 0) {
			return "red";
		}

	};

});
