'use strict';

/**
 * @ngdoc service
 * @name coinioApp.userService
 * @description
 * # userService
 * Service in the coinioApp.
 */
angular.module('coinioApp')
.service('User', function () {
	
	this.data = {
		"id": "1",
		"email": "dummy@email.com",
		"name": "Joe Smith",
		"username": "JuJuJoey",
		"joined" : "dummydate",
		"pts" : "69",
		"lvl" : "101",
		"dailyvisit" : "true",
		"co1ns" : "99"
	};

});
