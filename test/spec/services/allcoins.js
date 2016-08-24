'use strict';

describe('Service: allCoins', function () {

  // load the service's module
  beforeEach(module('coinioApp'));

  // instantiate service
  var allCoins;
  beforeEach(inject(function (_allCoins_) {
    allCoins = _allCoins_;
  }));

  it('should do something', function () {
    expect(!!allCoins).toBe(true);
  });

});
