'use strict';

describe('Directive: userIcon', function () {

  // load the directive's module
  beforeEach(module('coinioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-icon></user-icon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userIcon directive');
  }));
});
