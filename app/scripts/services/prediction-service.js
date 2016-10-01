'use strict';

/**
 * @ngdoc service
 * @name coinioApp.cardpredictionService
 * @description
 * # cardpredictionService
 * Service in the coinioApp.
 */
angular.module('coinioApp').service('Predictions', function (User) {
    
  	// 	var _url = 'https://coin-io.firebaseio.com/predictions';
		// var _ref = new Firebase(_url)
  	
  	var predictions = [
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
		
		// TEMPORARY until connected to firebase Users table
  	var currentUser = "DummyGuy";

  	// var newPrediction = {
			// "userName": .userName,
			// "userId": User.data.name,
			// "userPts": User.data.pts,
			// "userLvl": User.data.lvl,
			// "coin": nCard.coin,
			// "status" : "true",
			// "position": nCard.position,     
			// "open": nCard.open,
			// "close": nCard.close,
			// "stop": nCard.stop,
			// "pts": "0",
			// "hype": "0",
			// "fud": "0",
  	// };

  	return {
  		getData: function() {


		 	var userRef = firebase.database().ref('users');
			userRef.on('child_added', function(data) {
				predictions = {
					"close": data.val().close,
					"coin": data.val().coin,
					"open": data.val().open,
					"position" : data.val().position,
					"stop" : data.val().stop,
					"timestamp" : data.val().timestamp,
					"userId" : data.val().userId,
					"userName" : data.val().userName
				}
				console.log(
					data.key,
					data.val().close,
					data.val().coin,
					data.val().open,
					data.val().position
					);
			});
			userRef.on('child_changed', function(data) {
				predictions = {
					"close": data.val().close,
					"coin": data.val().coin,
					"open": data.val().open,
					"position" : data.val().position,
					"stop" : data.val().stop,
					"timestamp" : data.val().timestamp,
					"userId" : data.val().userId,
					"userName" : data.val().userName
				}
			});	

  			console.log(JSON.toString(predictions));
  		},
  		addItem: function(newPrediction) {
  			var error = null;
  			
  			for(var i=0; i<predictions.length; i++) {
          if(predictions[i] && 
          	 predictions[i].userName == currentUser && 
          	 predictions[i].coin == newPrediction.coin && 
          	 predictions[i].status == "true") {
          	 return true
          	break;
          }
          else
          	// PUSH NEW PREDICTION TO FIREBASE DATA FOR PREDICTIONS
          	// firebase.database().ref('Predictions/').push(newPrediction, function(error) {
          	// 	alert('error');
          	// });
          	predictions.push(newPrediction);
          	return false
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