'use strict';

/**
 * @ngdoc directive
 * @name coinioApp.directive:userIcon
 * @description
 * # userIcon
 */
angular.module('coinioApp')
  .directive('userIcon', ['User', 'pCard', function (User, pCard) {
    return {
      template: '<i></i>',
      replace: 'true',
      scope: false,
      restrict: 'AE',
      link: function preLink($scope, element, attrs) {
        var lvl = User.data.lvl;
        element.removeClass();
        if (lvl == 0) {
            element.addClass("fa fa-wheelchair");
        }

        else if (lvl > 0 && lvl < 100) {
            element.removeClass();
            element.addClass("glyphicon glyphicon-pawn");
        }

        else if (lvl > 100 && lvl < 200) {
            element.removeClass();
            element.addClass("glyphicon glyphicon-knight");
        }

        else if (lvl > 200 && lvl < 400) {
            element.removeClass();
            element.addClass("glyphicon glyphicon-tower");
        }

        else if (lvl > 400 && lvl < 800) {
            element.removeClass();
            element.addClass("glyphicon glyphicon-queen");
        }

        else if (lvl > 800 && lvl < 1600) {
            element.removeClass();
            element.addClass("glyphicon glyphicon-king");
        }

        else if (lvl > 1600) {
            element.removeClass();
            element.addClass("glyphicon glyphicon-yen");
        }
      }
    };
  }]);