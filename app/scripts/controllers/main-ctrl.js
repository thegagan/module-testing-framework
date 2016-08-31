"use strict";

/**
 * @ngdoc function
 * @name coinioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coinioApp
 */

var app = angular.module("coinioApp");
app.controller("MainCtrl", 
[ "$scope", "pCard", "nCard", "AllCoins", "User", 
function($scope, pCard, nCard, AllCoins, User) {
	$scope.awesomeThings = [
	  "HTML5 Boilerplate",
	  "AngularJS",
	  "Karma"
	];

	$scope.AllCoins = AllCoins;
	$scope.User = User;
	$scope.pCard = pCard;
	$scope.nCard = nCard;

	$scope.colorize = function(card) {
		if (card.score > 0) {
			return "green";
		}
		if (card.score < 0) {
			return "red";
		}
	};


	// WEB SOCKET STUFF STARTS HERE

	var poloData = [
		{
			"coin"  : "BTC_FCT",
			"price" : ""
		}, {
			"coin"  : "BTC_ETH",
			"price" : ""
		}, {
			"coin"  : "BTC_ETC",
			"price" : ""
		}, {
			"coin"  : "BTC_DASH",
			"price" : ""
		}, {
			"coin"  : "BTC_LSK",
			"price" : ""
		}, {
			"coin"  : "BTC_ESTEEM",
			"price" : ""
		}, {
			"coin"  : "BTC_XMR",
			"price" : ""
		}, {
			"coin"  : "BTC_DASH",
			"price" : ""
		}
	];

	var wsuri = "wss://api.poloniex.com";
	var connection = new autobahn.Connection({
	  url: wsuri,
	  realm: "realm1"
	});

	connection.onopen = function (session) {
		function marketEvent (args,kwargs) {
	  	// console.log(args);
	  }
	  function tickerEvent (args,kwargs) {
  		// console.log(poloData);
  		var i = 0;
  		if (args[0].startsWith("BTC_")) {
  			for (i=0;i<poloData.length; i++) {
  				if (poloData[i].coin == args[0]) {
	  				poloData[i].price = args[1];	  				
	  				console.log("Updated" + poloData[i].coin)
  				}
  			}
  		}
  		else return

	  }
	  function trollboxEvent (args,kwargs) {
	   	// console.log(args);
	  }
	  // session.subscribe('BTC_FCT', marketEvent);
	  session.subscribe("ticker", tickerEvent);
	  // session.subscribe('trollbox', trollboxEvent);
	  // session.subscribe('BTC_FCT', tickerEvent);
	}

	connection.onclose = function () { console.log("Websocket connection closed"); }          
	connection.onmessage = function (event) { writeToScreen(self); }
	var connect = function() { connection.open(); }
	var disconnect = function() { connection.close(); }
	connect();

	// END WEB SOCKET STUFF //

	// START DAILCOIN CHECK //
	
	// checkDailyCo1ns();

	// function addDailyCo1ns(user, coins){
	// 	// console.log(coins)
	//   firebase.database().ref('users/' + user).update({
	//     co1ns: coins+10,
	//     dailyvisit: "true"
	//   });
	// }

	// function checkDailyCo1ns() {
	// 	var userId = firebase.auth().currentUser.uid;
	// 	// console.log(userId);
	// 	firebase.database().ref('/users/').orderByChild('id').equalTo(userId).on("child_added", function(snapshot) {
	// 		// console.log(snapshot.val().dailyvisit);
	// 		// console.log(snapshot.key);
	// 		if (snapshot.val().dailyvisit == "false"){
	// 			// console.log("test");
	// 			addDailyCo1ns(snapshot.key, snapshot.val().co1ns);
	// 		}
	// 	});
	// }

	// END DAILCOIN CHECK //


}]);
