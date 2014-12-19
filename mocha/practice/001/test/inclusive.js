var assert = require( 'assert' );

describe( 'Array Inclusive', function() {
  describe.skip( '#indexOf()', function() {
    it( 'should return -1 when the value is not present', function() {
      assert.equal( -1, [ 1, 2, 3 ].indexOf( 5 ));
      assert.equal( -1, [ 1, 2, 3 ].indexOf( 0 ));
    });
    it( 'should return 0 when the value is present in the first place', function() {
      assert.equal( 0, [ 1, 2, 3 ].indexOf( 1 ));
      assert.equal( 0, [ 2, 3 ].indexOf( 2 ));
    });
  });
});