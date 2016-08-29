"use strict";

/**
 * @ngdoc function
 * @name coinioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coinioApp
 */
angular.module("coinioApp").controller("MainCtrl", function($scope, poloSocket, NewPrediction, AllCoins, User, pCard) {
	$scope.awesomeThings = [
	  "HTML5 Boilerplate",
	  "AngularJS",
	  "Karma"
	];

	$scope.AllCoins = AllCoins;
	$scope.User = User;
	$scope.pCard = pCard;
	$scope.NewPrediction = NewPrediction;
	$scope.poloSocket = poloSocket;

	$scope.colorize = function(card) {
		if (card.score > 0) {
			return "green";
		}
		if (card.score < 0) {
			return "red";
		}
	};

	// WEBSOCKET START //
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
	  	//document.getElementById(args[0]).innerHTML = args[0] + " Price:" + args[1] + " Change:" + args[4] + " Volume:" + args[5];
	  	//storeTickerData(args);
	  }
	  function trollboxEvent (args,kwargs) {
	   	console.log(args);
	   	document.getElementById("trollbox").innerHTML += args[2] + "(" + args[4] +") " + args[3] + "<br>";
	  }
	  
	  //session.subscribe('BTC_FCT', marketEvent);
	  session.subscribe('ticker', tickerEvent);
	  //session.subscribe('trollbox', trollboxEvent);
	  //session.subscribe('BTC_FCT', tickerEvent);

	  console.log(poloSocket)
	}


	connect();

	connection.onclose = function () {
	  console.log("Websocket connection closed");
	}
	   
	var storeTickerData = function (args) {
	  this.data = {
	    "ticker": args[0],
	    "price": args[1],
	    "change": args[4],
	    "volume": args[5]
	  };
	};                    


	function writeToScreen(message) {
	    document.getElementById("output").innerHTML += message + "<br>";
	}

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
	// WEBSOCKET END //


});
