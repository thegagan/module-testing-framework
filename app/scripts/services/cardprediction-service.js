'use strict';

/**
 * @ngdoc service
 * @name coinioApp.cardpredictionService
 * @description
 * # cardpredictionService
 * Service in the coinioApp.
 */
angular.module('coinioApp')
  .service('pCard', function (NewPrediction, User) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    	this.data = [
  			{
					"userName": User.data.name,
					"userId": User.data.id,
					"userPts": User.data.pts,
					"coin": "BTC",
					"status" : "true",
					"position": "long",     
					"open": ".00325",
					"close": ".00452",
					"stop": ".00306",
					"score": "3.65",
					"hype": "50",
					"fud": "10",
				}, {
					"userName": User.data.name,
					"userId": User.data.id,
					"userPts": User.data.pts,
					"coin": "ETC",
					"position": "short",
					"status": "false",
					"open": ".00325",
					"close": ".00452",
					"stop": ".00306",
					"score": "-3.65",
					"hype": "15",
					"fud": "45",
				}
    	];

  });