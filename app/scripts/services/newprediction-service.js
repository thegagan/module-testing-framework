'use strict';

/**
* @ngdoc service
* @name coinioApp.pcard
* @description
* # pcard
* Service in the coinioApp.
*/

var app = angular.module('coinioApp');
app.service('NewPrediction', function (User) {

	this.data = {
		"userName": User.data.name,
		"userId": User.data.id,
		"coin": "",
		"position": "",
		"open": "",
		"close": "",
		"stop": ""
	};

	var submitPrediction = function () {
	  alert('submitPrediction() successfully fired');
	  // console.log(this.data);
	  // firebase.database().ref('predictions/').push(
	  // 	this.data
	  // );
	  // console.log("data sent to predictions/");
	};

	var clearPrediction = function () {
	  this.data = {
			"userName": User.data.name,
			"userId": User.data.id,
			"coin": "",
			"position": "",
			"open": "",
			"close": "",
			"stop": ""
		};
	};

});
