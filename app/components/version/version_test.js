'use strict';

describe('nbcCommissary.version module', function() {
  beforeEach(module('nbcCommissary.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
