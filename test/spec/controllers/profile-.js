'use strict';

describe('Controller: ProfileCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('coinioApp'));

  var ProfileCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileCtrlCtrl = $controller('ProfileCtrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfileCtrlCtrl.awesomeThings.length).toBe(3);
  });
});
