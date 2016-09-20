'use strict';

/**
 * @ngdoc service
 * @name coinioApp.cardpredictionService
 * @description
 * # cardpredictionService
 * Service in the coinioApp.
 */
angular.module('coinioApp').service('pCard', function (nCard, User) {
    
  	// 	var _url = 'https://coin-io.firebaseio.com/predictions';
		// var _ref = new Firebase(_url)
  	
  	var initialData = [
			{
				"userName": User.data.name,
				"userId": User.data.id,
				"userPts": User.data.pts,
				"userLvl": User.data.lvl,
				"coin": "BTC",
				"status" : "true",
				"position": "long",     
				"open": ".00325",
				"close": ".00452",
				"stop": ".00306",
				"pts": "3.65",
				"hype": "50",
				"fud": "10",
			},
			{
				"userName": "UserName2",
				"userId": "UserID2",
				"userPts": "UserPts2",
				"userLvl": "500",
				"coin": "BTC",
				"status" : "true",
				"position": "long",     
				"open": ".001",
				"close": ".002",
				"stop": ".0005",
				"pts": "99",
				"hype": "100",
				"fud": "50",
			}
  	];

  	var predictions;
  	(function() {
  		predictions.push(initialData)
  	});

  	var newPrediction = {
			"userName": nCard.userName,
			"userId": User.data.name,
			"userPts": User.data.pts,
			"userLvl": User.data.lvl,
			"coin": nCard.coin,
			"status" : "true",
			"position": nCard.position,     
			"open": nCard.open,
			"close": nCard.close,
			"stop": nCard.stop,
			"pts": "0",
			"hype": "0",
			"fud": "0",
  	};

  	return {
  		getData: function() {
  			predictions
  		},
  		addItem: function(user,coin) {
  			for(var i=0; i<predictions.length; i++) {
          if(predictions[i].userName == user && predictions[i].coin == coin && predictions[i].status == "true") {
            alert('No can do! Only one perdiction per coin is allowed at any given time.');
            break;
          }
          else
          	predictions.push(newPrediction);
        }
  		},
  		removeItem: function(user,coin) {
  			for(var i=0; i<predictions.length; i++) {
          if(predictions[i].userName == user && predictions[i].coin == coin && predictions[i].status == "true") {
          	predictions[i].status = "false"
          	// TODO: update current user score
          	break;
        	}
  			}
			}
  	}

  });