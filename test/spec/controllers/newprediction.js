'use strict';

describe('Controller: NewpredictionCtrl', function () {

  // load the controller's module
  beforeEach(module('coinioApp'));

  var NewpredictionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewpredictionCtrl = $controller('NewpredictionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewpredictionCtrl.awesomeThings.length).toBe(3);
  });
});
