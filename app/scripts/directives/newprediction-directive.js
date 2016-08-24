'use strict';

/**
 * @ngdoc directive
 * @name coinioApp.directive:newpredictionDirective
 * @description
 * # newpredictionDirective
 */
var app = angular.module('coinioApp');
  
  app.directive('newpredictionDir', function () {
    return {
    	// restrict: 'E',
     //  templateUrl: 'views/predictionform.html',
     //  link: function(scope, element, attrs) { }
     	scope: {},
	    template: '<div></div>',
	    restrict: 'E',
    };
  });

	// app.controller('newPrediction-ctrl', function ($scope, NewPrediction) {
	// 	$scope.NewPrediction = NewPrediction.data;
	// 	console.log($scope.NewPrediction);
	// });