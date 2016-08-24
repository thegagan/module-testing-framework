'use strict';

describe('Directive: newpredictionDirective', function () {

  // load the directive's module
  beforeEach(module('coinioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<newprediction-directive></newprediction-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newpredictionDirective directive');
  }));
});
