var chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  sinonChai = require("sinon-chai"),
  logger = require('../lib');

chai.use(sinonChai);

describe('logger', function testLogger() {
  var dateMock;
  beforeEach(function setUp() {
    dateMock = sinon.useFakeTimers();
    console.log(new Date(), new Date(0));
  });

  afterEach(function tearDown() {
    dateMock.restore();
  });

  describe('log', function testLog() {
    beforeEach(function setUp() {
      console.log = sinon.stub();
    });

    it('should log something', function() {
      logger.log('something something');
      expect(console.log).to.have.been.calledWith(
        '[' + new Date(0) + ']',
        'LOG: something something');
    });
  });

  describe('error', function testErrorLog() {
    var errorSpy;
    beforeEach(function setUp() {
      console.error = sinon.stub();
    });

    it('should error log something', function() {
      logger.error('things are breaking!!!!!');
      expect(console.error).to.have.been.calledWith(
        '[' + new Date(0) + ']',
        'ERROR: things are breaking!!!!!');
    });
  });

  describe('logCustom', function testCustomLog() {
    var customLogSpy;
    beforeEach(function setUp() {
      customLogSpy = sinon.spy();
      logger.addLogType('FOO', customLogSpy);
    });


    it('should custom log something', function() {
      logger.logCustom('FOO', 'log this!');
      expect(customLogSpy).to.have.been.calledWith(
        '[' + new Date(0) + ']',
        'FOO: log this!');
    });
  });
});
