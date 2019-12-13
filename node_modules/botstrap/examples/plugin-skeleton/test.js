'use strict';

// By far the most simplest way to test Botstrap plugins
// is just by mocking out the API the plugin needs, and
// then manually injecting them into the plguin call in the
// unit test.
// This is an example of this pattern.


var expect = require('chai').expect,
  cmd = require('./');


describe('cmd', function testCmd() {
  it('works', function() {

    // Mock all the plugin dependencies.
    var mockMessage = {
      react: function mockResponseReact(reaction) {
        expect(reaction).to.equal('+1');
      }
    };

    var mockResponseObj = {
      end: function mockResponseEnd(text) {
        expect(text).to.equal('OK');
      },
      react: function mockResponseReact(reaction) {
        expect(reaction).to.equal('ok_hand');
      }
    };

    // Simulate calling the plugin by passing the
    // mocked dependencies.
    cmd(mockMessage, mockResponseObj);
  });
});
