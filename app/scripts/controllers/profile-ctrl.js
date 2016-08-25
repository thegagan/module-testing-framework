'use strict';

/**
 * @ngdoc function
 * @name coinioApp.controller:ProfileCtrlCtrl
 * @description
 * # ProfileCtrlCtrl
 * Controller of the coinioApp
 */
angular.module('coinioApp')
  .controller('ProfileCtrl', function (pCard, User, $scope, $routeParams, $location ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pCard = pCard;
    $scope.User = User;
    var userName = $scope.userName = $routeParams.userName;

    $scope.filterCardOptions = {
    	"user" : User.data.id,
    	"coin" : pCard.data.coin,
    	"position" : pCard.data.position
    };

    $scope.setUserIcon = function () {
    	if (User.data.lvl == 0) {
    		User.data.icon = "\<h1\>OKAY\<\/h1\>";
  		}
  		else
  			"WOMP"
    };
    $scope.setUserIcon();

  });
