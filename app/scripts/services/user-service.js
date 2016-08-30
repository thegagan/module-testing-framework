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
			"id": "test",
			"email": "test",
			"name": "test",
			"joined" : "test",
			"pts" : "test",
			"lvl" : "test",
			"dailyvisit" : "test",
			"co1ns" : "test"
		};

  });
