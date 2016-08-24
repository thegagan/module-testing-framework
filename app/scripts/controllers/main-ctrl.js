"use strict";

/**
 * @ngdoc function
 * @name coinioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coinioApp
 */
angular.module("coinioApp").controller("MainCtrl", function($scope, NewPrediction, AllCoins, User, pCard) {
	$scope.awesomeThings = [
	  "HTML5 Boilerplate",
	  "AngularJS",
	  "Karma"
	];

	$scope.AllCoins = AllCoins;
	$scope.User = User;
	$scope.pCard = pCard;
	$scope.NewPrediction = NewPrediction;

	$scope.colorize = function(card) {
		if (card.score > 0) {
			return "green";
		}
		if (card.score < 0) {
			return "red";
		}
	};

});
