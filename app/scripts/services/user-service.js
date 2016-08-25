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
			"name":  "DummyName",
			"id": "DummyId",
			"joined" : "DummyDate",
			"pts" : "123",
			"lvl" : "0",
			"icon" : ""
		};

  });
