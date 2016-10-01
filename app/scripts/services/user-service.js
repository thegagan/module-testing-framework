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

	var user = [];
	
	//user = firebase db data 

	var userRef = firebase.database().ref('users');
	userRef.on('child_added', function(data) {
		user = {
			"id": data.val().id,
			"email": data.val().email,
			"username": data.key,
			"joined" : data.val().joined,
			"pts" : data.val().pts,
			"lvl" : data.val().lvl,
			"lastlogin" : data.val().lastlogin,
			"co1ns" : data.val().co1ns,
			"co1nspent" : data.val().co1nspent
		}
		console.log(user);
	});

	

	// userRef.on('child_changed', function(data) {
	// 	"id": data.val().id,
	// 	"email": data.val().email,
	// 	"username": data.key,
	// 	"joined" : data.val().joined,
	// 	"pts" : data.val().pts,
	// 	"lvl" : data.val().lvl,
	// 	"lastlogin" : data.val().lastlogin,
	// 	"co1ns" : data.val().co1ns,
	// 	"co1nspent" : data.val().co1nspent
	// });

	user = {
		"id": "1",
		"email": "dummy@email.com",
		"name": "Joe Smith",
		"username": "JuJuJoey",
		"joined" : "dummydate",
		"pts" : "69",
		"lvl" : "101",
		"dailyvisit" : "true",
		"co1ns" : "99"
	};

});
