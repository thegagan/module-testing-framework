'use strict';

/**
 * @ngdoc directive
 * @name coinioApp.directive:tooltips
 * @description
 * # tooltips
 */
angular.module('coinioApp')
	.directive('toggle', function(){
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs){
	      if (attrs.toggle=="tooltip"){
	        $(element).tooltip();
	      }
	      if (attrs.toggle=="popover"){
	        $(element).popover();
	      }
	    }
	  };
	})