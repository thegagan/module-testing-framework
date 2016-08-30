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
			"id": "",
			"email": "",
			"name": "",
			"joined" : "",
			"pts" : "",
			"lvl" : "",
			"dailyvisit" : "",
			"co1ns" : ""
		};

  });
