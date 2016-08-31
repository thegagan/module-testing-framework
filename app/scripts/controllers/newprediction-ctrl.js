'use strict';

/**
 * @ngdoc function
 * @name coinioApp.controller:NewpredictionCtrl
 * @description
 * # NewpredictionCtrl
 * Controller of the coinioApp
 */
angular.module('coinioApp')
  .controller('NewpredictionCtrl', function ($scope, User, AllCoins, pCard, nCard, SweetAlert) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.User = User;
    $scope.AllCoins = AllCoins;
    $scope.pCard = pCard;
    $scope.nCard = nCard;

    // Submit New Prediction Form
    $scope.submit = function(data) {
			firebase.database().ref('predictions/').push(nCard.data, function(error) {
				if (error) { 
					SweetAlert.swal({
					   title: "Uh oh!",
					   text: "Something Went Wrong!",
					   type: "error",
					   showCancelButton: true,
					   confirmButtonColor: "#DD6B55",
					   confirmButtonText: "Clear Form",
					   closeOnConfirm: true
					});
				} 
				else {
					SweetAlert.swal("Success!", "Prediction Created!", "success");
					$scope.clearForm(data);
				}
			});
    }

    // Clear New Prediction Form
    $scope.clearForm = function(data) {
  		nCard.data = {
  			"userName": User.data.name,
				"userId": User.data.id,
				"coin": "",
				"position": "long",
				"open": "",
				"close": "",
				"stop": ""
			};
    };

  });
