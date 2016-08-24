'use strict';

/**
 * @ngdoc service
 * @name coinioApp.allCoins
 * @description
 * # allCoins
 * Service in the coinioApp.
 */
angular.module('coinioApp')
  .service('AllCoins', function () {
  	
  	this.data = [
			{
				"coin": "BTC",
				"name": "Bitcoin",
			}, {
				"coin": "ETH",
				"name": "Ethereum",
			}, {
				"coin": "ETC",
				"name": "Ethereum Classic",
			}, {
				"coin": "FCT",
				"name": "Factom",
			}
		];

  });
