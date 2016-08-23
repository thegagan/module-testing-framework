"use strict";

/**
 * @ngdoc function
 * @name coinioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coinioApp
 */
angular.module("coinioApp").controller("MainCtrl", function ($scope, pNew) {
	$scope.pCard = [
		{
			"userName": "betaUser99",
			"userId": "1",
			"userPts": "4.56",
			"coin": "BTC",
			"position": "long",     
			"open": ".00325",
			"close": ".00452",
			"stop": ".00306",
			"score": "3.65"
		}, {
			"user": "gaznox",
			"userId": "2",
			"userPts": "-1.46",
			"coin": "ETC",
			"position": "short",
			"open": ".00325",
			"close": ".00452",
			"stop": ".00306",
			"score": "-3.65"
		}
	];
	
	$scope.test = "THIS IS A SUCCESSFUL TEST!!!!";



	$scope.colorize = function(card) {
		if (card.score > 0) {
			return "green";
		}
		if (card.score < 0) {
			return "red";
		}
	};

///Places prediction with a unique id to firebase database
	$scope.recordPrediction = function (data) {
	  console.log("meow" + pNew);
	  var pNew = $scope.pNew;
	  firebase.database().ref('predictions/').push(
	  	pNew
	    // username: username,
	    // coin: coin,
	    // position: position,
	    // open: open,
	    // close: close,
	    // stop: stop,
	    // timestamp: firebase.database.ServerValue.TIMESTAMP
	  );
	  console.log(pNew);
	};

});
