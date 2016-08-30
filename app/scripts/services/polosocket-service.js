/**
 * @ngdoc service
 * @name coinioApp.userService
 * @description
 * # userService
 * Service in the coinioApp.
 */

var app = angular.module('coinioApp');
app.factory('PoloSocket', function () {
	
	// var dataStream = $websocket('wss://api.poloniex.com');
	// var collection = [];

	// new autobahn.Connection({
	// 	url: 'wss://api.poloniex.com',
	//   realm: "realm1"
	// });

	// dataStream.onMessage(function(message) {
	// 	collection.push(JSON.parse(message.data))
	// });

 //  function marketEvent (message) {
 //  	console.log(message);
 //  }

 //  var methods = {
 //    collection: collection,
 //    get: function() {
 //      dataStream.send(JSON.stringify({ action: 'get' }));
 //    },
 //    onOpen: function() {
 //    	alert('ITS OPEN');
 //    },
 //    onError: function() {
 //    	alert('ITS ERRORED');
 //    }
 //  };

	// return methods;


	// var args = "";
	var wsuri = "wss://api.poloniex.com";
	var connection = new autobahn.Connection({
	  url: wsuri,
	  realm: "realm1"
	});

	connection.onopen = function (session) {
		function marketEvent (args,kwargs) {
	  	console.log(args);
	  }
	  function tickerEvent (args,kwargs) {
	  	console.log(args);
	  	// document.getElementById(args[0]).innerHTML = args[0] + " Price:" + args[1] + " Change:" + args[4] + " Volume:" + args[5];
	  	storeTickerData(args);
	  }
	  function trollboxEvent (args,kwargs) {
	   	console.log(args);
	   	// document.getElementById("trollbox").innerHTML += args[2] + "(" + args[4] +") " + args[3] + "<br>";
	  }
	  
	  // session.subscribe('BTC_FCT', marketEvent);
	  session.subscribe('ticker', tickerEvent);
	  // session.subscribe('trollbox', trollboxEvent);
	  // session.subscribe('BTC_FCT', tickerEvent);

	  // console.log(PoloSocket)
	}


	connect();


	connection.onclose = function () {
	  console.log("Websocket connection closed");
	}
	   
	var storeTickerData = function (args) {
	  this.data = args;
	};                    

	// function writeToScreen(message) {
	//     document.getElementById("output").innerHTML += message + "<br>";
	// }

	connection.onmessage = function (event) {
	  console.log(event.data);
	  writeToScreen(self);
	}


	function connect()
	{
	  connection.open();
	}

	function disconnect()
	{
	  connection.close();
	}

	return "SOME DUMMY VALUE";

});