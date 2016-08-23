'use strict';

describe('Service: pNew', function () {

  // load the service's module
  beforeEach(module('coinioApp'));

  // instantiate service
  var pNew;
  beforeEach(inject(function (_pNew_) {
    pNew = _pNew_;
  }));

  it('should do something', function () {
    expect(!!pNew).toBe(true);
  });

});
