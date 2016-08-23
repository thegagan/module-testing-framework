'use strict';

/**
 * @ngdoc service
 * @name coinioApp.pNew
 * @description
 * # pNew
 * Service in the coinioApp.
 */
angular.module('coinioApp')
  .service('pNew', function () {
  	var obj = {};
	obj = 
		{
			"userName": "",
			"userId": "",
			"coin": "",
			"position": "",
			"open": "",
			"close": "",
			"stop": ""
		};

  	return obj;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
