'use strict';

describe('Service: pcard', function () {

  // load the service's module
  beforeEach(module('coinioApp'));

  // instantiate service
  var pcard;
  beforeEach(inject(function (_pcard_) {
    pcard = _pcard_;
  }));

  it('should do something', function () {
    expect(!!pcard).toBe(true);
  });

});
