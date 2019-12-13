var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  sinonChai = require("sinon-chai");

chai.use(sinonChai);

var introject = require('../lib');

describe('injectDeps', function() {
  it('should properly inject deps', function() {
    var _add = function(a, b) {
      return a + b;
    };
    var injected = introject.injectDeps(_add, {
      a: 3,
      b: 5
    });

    expect(injected()).to.equal(3 + 5);
  });

  it('should try to require missing deps', function() {
    var something = {};
    var doSomethingWithFs = function(fs) {
      something.read = fs.read;
    };
    var injected = introject.injectDeps(doSomethingWithFs, {});
    injected();
    expect(something.read).to.equal(require('fs').read);
  });
});
