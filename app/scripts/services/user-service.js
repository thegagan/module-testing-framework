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
			"name":  "DUMMY-NAME",
			"id": "DUMMY-ID",
			"joined" : "DUMMY-DATE",
			"pts" : "123"
		};

  });
