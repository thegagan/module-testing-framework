'use strict';

/**
* @ngdoc service
* @name coinioApp.pcard
* @description
* # pcard
* Service in the coinioApp.
*/

var app = angular.module('coinioApp');
app.service('nCard', function (User) {

	this.data = {
		"userName": User.data.name,
		"userId": User.data.id,
		"coin": "",
		"position": "long",
		"open": "",
		"close": "",
		"stop": ""
	};

});
