'use strict';

/**
 * @ngdoc service
 * @name coinioApp.cardpredictionService
 * @description
 * # cardpredictionService
 * Service in the coinioApp.
 */
angular.module('coinioApp')
  .service('pCard', function (NewPrediction) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    	this.data = [
  			{
					"userName": "betaUser99",
					"userId": "1",
					"userPts": "4.56",
					"coin": "BTC",
					"position": "long",     
					"open": ".00325",
					"close": ".00452",
					"stop": ".00306",
					"score": "3.65",
					"hype": "50",
					"fud": "10",
				}, {
					"user": "gaznox",
					"userId": "2",
					"userPts": "-1.46",
					"coin": "ETC",
					"position": "short",
					"open": ".00325",
					"close": ".00452",
					"stop": ".00306",
					"score": "-3.65",
					"hype": "15",
					"fud": "45",
				}
    	];

    	var newCard = function() {
    		//put code here
    	};

    	var getcard = function() {
    		//put code here
    	};

    	var updateHypeFud = function() {
    		//put code here
    	};

    	var deleteCard = function() {
    		//put code here
    	};


  });
