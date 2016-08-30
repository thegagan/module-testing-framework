/**
 * @ngdoc service
 * @name coinioApp.userService
 * @description
 * # userService
 * Service in the coinioApp.
 */

var app = angular.module('coinioApp');
app.factory('PoloSocket', function ($websocket) {
	
	var dataStream = $websocket('ws://api.poloniex.com');
	var collection = [];

	dataStream.onMessage(function(message) {
		collection.push(JSON.parse(message.data))
	});

  var methods = {
    collection: collection,
    get: function() {
      dataStream.send(JSON.stringify({ action: 'get' }));
    }
  };

	return methods;
});