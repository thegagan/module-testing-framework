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
	
	//this.data = firebase db data 

	var userRef = firebase.database().ref('users');
	userRef.on('child_added', function(data) {
		// this.data = {
		// 	"id": data.val().id,
		// 	"email": data.val().email,
		// 	"username": data.key,
		// 	"joined" : data.val().joined,
		// 	"pts" : data.val().pts,
		// 	"lvl" : data.val().lvl,
		// 	"lastlogin" : data.val().lastlogin,
		// 	"co1ns" : data.val().co1ns,
		// 	"co1nspent" : data.val().co1nspent
		// }
		console.log(
			data.key,
			data.val().email,
			data.val().id,
			data.val().joined,
			data.val().pts,
			data.val().lvl,
			data.val().co1ns
			);
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

	this.data = {
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
