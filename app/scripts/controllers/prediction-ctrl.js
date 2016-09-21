'use strict';

/**
 * @ngdoc function
 * @name coinioApp.controller:NewPredictionCtrl
 * @description
 * # NewPredictionCtrl
 * Controller of the coinioApp
 */
angular.module('coinioApp')
  .controller('PredictionCtrl', function ($scope, User, AllCoins, Predictions, SweetAlert) {

    $scope.User = User;
    $scope.AllCoins = AllCoins;
    $scope.Predictions = Predictions;
    var newPrediction = {
			"userName": User.data.userName,
			"userId": User.data.name,
			"userPts": User.data.pts,
			"userLvl": User.data.lvl,
			"coin": null,
			"status" : "true",
			"position": "long",     
			"open": "",
			"close": "",
			"stop": "",
			"pts": "0",
			"hype": "0",
			"fud": "0",
    };
    $scope.newPrediction = newPrediction;

    // Submit New Predictions Form
    $scope.submit = function(newPrediction) {
			Predictions.addItem(newPrediction)

			console.log(Predictions.addItem(newPrediction));
// GOTTA CAPTURE RESULT. SUCCESS OR FAILZOR
			if (Predictions.addItem(newPrediction)) { 
				SweetAlert.swal({
				  title: "No Can Do!",
				  text: "Sorry, you already have an open prediction for " + newPrediction.coin + ". Close it or wait for it to resolve in order to create a new " + newPrediction.coin + " prediction.",
				  type: "error",
				  showCancelButton: true,
				  confirmButtonColor: "#DD6B55",
				  confirmButtonText: "Clear Form",
				  closeOnConfirm: true
				},
			  function(isConfirm){ 
			  	if (isConfirm) {
				    $scope.clearForm();
				  }
				});
			}
// GOTTA CAPTURE RESULT. SUCCESS OR FAILZOR
			else {
				SweetAlert.swal("Success!", "Predictions Created!", "success");
				$scope.clearForm(newPrediction);
			}
		}

    // Clear New Predictions Form
    $scope.clearForm = function(newPrediction) {
  		$scope.newPrediction = {
				"coin": "",
				"position": "long",
				"open": "",
				"close": "",
				"stop": ""
			};
    };

  });
