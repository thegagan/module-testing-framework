'use strict';

describe('Service: cardpredictionService', function () {

  // load the service's module
  beforeEach(module('coinioApp'));

  // instantiate service
  var cardpredictionService;
  beforeEach(inject(function (_cardpredictionService_) {
    cardpredictionService = _cardpredictionService_;
  }));

  it('should do something', function () {
    expect(!!cardpredictionService).toBe(true);
  });

});
