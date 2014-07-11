"use strict";

describe("idHandler", function() {
  beforeEach(module("arethusa.core"));

  var idHandler;
  beforeEach(inject(function(_idHandler_) {
    idHandler = _idHandler_;
  }));

  describe("this.decrement()", function() {
    it('it decrements formatted ids', function() {
      expect(idHandler.decrement('0004')).toEqual('0003');
    });

    it('it decrements ids that are extended with letters', function() {
      expect(idHandler.decrement('0004e')).toEqual('0004d');
    });
  });

  describe('this.isExtendedId()', function() {
    it('returns true when an id is extended', function() {
      expect(idHandler.isExtendedId('0003e')).toBeTruthy();
    });

    it('returns false when id is not extended', function() {
      expect(idHandler.isExtendedId('0004')).toBeFalsy();
    });
  });

  describe('this.extendId', function() {
    it('extends an id', function() {
      expect(idHandler.extendId('0003')).toEqual('0003e');
    });
  });
});
