var expect = require('chai').expect,
  lfmt = require('../lib');

describe('format', function testFormat() {
  it('should properly format a string given context', function () {
    var obj = {
      lang: 'JavaScript',
      framework: 'Angular'
    };
    var fmt = 'my favorite language is {{lang}}, and my favorite framework is {{framework}}';
    var result  = 'my favorite language is ' + obj.lang + ', and my favorite framework is ' + obj.framework;

    expect(lfmt.format(fmt, obj)).to.equal(result);
  });

  it('should not compile missing context keys', function () {
    var obj = {
      a: 'something'
    };
    var fmt = '{{a}} is something, but {{b}} is nothing';
    var result = 'something is something, but  is nothing';

    expect(lfmt.format(fmt, obj)).to.equal(result);
  });

  it('should compile nested context keys', function () {
    var obj = {
      foo: {
        bar: 45
      }
    };

    var fmt = 'my value is {{foo.bar}}';
    var result = 'my value is 45';
    expect(lfmt.format(fmt, obj)).to.equal(result);
  });

  it('should compile multiple context keys', function () {
    var obj = {
      foo: {
        bar: 45
      },
      baz: 'aaaa'
    };

    var fmt = 'foo.bar is {{foo.bar}}, baz is {{baz}}';
    var result = 'foo.bar is 45, baz is aaaa';
    expect(lfmt.format(fmt, obj)).to.equal(result);
  });
});

describe('getNested', function testGetNested() {
  it('should properly get a nested property', function () {
    var foo = {
      bar: {
        baz: true,
        quux: 'shouldn\'t show up'
      }
    };
    expect(lfmt.getNested('bar.baz', foo)).to.equal(foo.bar.baz);
  });

  it('should properly get a normal property', function () {
    var foo = {
      bar: 'baaz'
    };
    expect(lfmt.getNested('bar', foo)).to.equal(foo.bar);
  });

  it('should undefined a 1-level deep nonexistent key', function () {
    var foo = {};
    expect(lfmt.getNested('bar', foo)).to.be.undefined;
  });

  it('should undefined a multilevel deep nonexistent key', function () {
    var foo = {};
    expect(lfmt.getNested('bar.baz', foo)).to.be.undefined;
  });
});


describe('stringify', function testStringify() {
  it('should stringify string into itself', function() {
    expect(lfmt.stringify('asdf')).to.equal('asdf');
  });

  it('should stringify number into number.toString()', function() {
    val = 45;
    expect(lfmt.stringify(val)).to.equal(val.toString());
  });

  it('should use custom toString methods', function() {
    val = {
      a: 'foo',
      b: false
    };

    val.toString = function() {
      return this.a + '/' + this.b;
    };

    var result = lfmt.stringify(val);
    expect(result).not.to.equal('[object Object]');
    expect(result).to.equal('foo/false');
  });

  it('should JSON.stringify objects without actual toString methods', function() {
    val = {
      something: true,
      somethingElse: 'false'
    };

    var result = lfmt.stringify(val);
    expect(result).not.to.equal('[object Object]');
    expect(result).to.equal(JSON.stringify(val));
  });
});
