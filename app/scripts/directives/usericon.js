'use strict';

/**
 * @ngdoc directive
 * @name coinioApp.directive:userIcon
 * @description
 * # userIcon
 */
angular.module('coinioApp')
  .directive('userIcon', ['User', function (User) {
    return {
      template: '<i></i>',
      replace: 'true',
      restrict: 'AE',
      link: function postLink($scope, element, attrs) {
				var lvl = User.data.lvl        
				element.removeClass();
        if (lvl == 0) {
        	element.addClass("fa fa-wheelchair");
        }

        if (lvl > 0 && lvl < 100) {
        	element.removeClass();
        	element.addClass("glyphicon glyphicon-pawn");
        }

        if (lvl > 100 && lvl < 200) {
        	element.removeClass();
        	element.addClass("glyphicon glyphicon-knight");
        }

        if (lvl > 200 && lvl < 400) {
        	element.removeClass();
        	element.addClass("glyphicon glyphicon-tower");
        }

        if (lvl > 400 && lvl < 800) {
        	element.removeClass();
        	element.addClass("glyphicon glyphicon-queen");
        }

        if (lvl > 800 && lvl < 1600) {
        	element.removeClass();
        	element.addClass("glyphicon glyphicon-king");
        }

        if (lvl > 1600) {
        	element.removeClass();
        	element.addClass("glyphicon glyphicon-yen");
        }

        return;
      }
    };
  }]);