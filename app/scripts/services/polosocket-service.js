'use strict';

/**
* @ngdoc service
* @name coinioApp.pcard
* @description
* # pcard
* Service in the coinioApp.
*/


var app = angular.module('coinioApp');
app.service('poloSocket', function () {

	
	this.data = {
		 "ticker": "args[0]"
		// "price": args[1],
		// "change": args[4],
		// "volume": args[5]
	};
});
