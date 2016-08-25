'use strict';

describe('Filter: cards', function () {

  // load the filter's module
  beforeEach(module('coinioApp'));

  // initialize a new instance of the filter before each test
  var cards;
  beforeEach(inject(function ($filter) {
    cards = $filter('cards');
  }));

  it('should return the input prefixed with "cards filter:"', function () {
    var text = 'angularjs';
    expect(cards(text)).toBe('cards filter: ' + text);
  });

});
