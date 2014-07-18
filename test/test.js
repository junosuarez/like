var mochi = require('mochi')
mochi.use(require('chai-interface'))

var like = require('../index')

describe('like', function () {
  it('has interface', function () {
    like.should.have.interface({
      fn: Function,
      startsWith: Function,
      endsWith: Function,
      startsWithFn: Function,
      endsWithFn: Function
    })
    like.should.be.a('function')
  })

  it('builds a regexp for use in a where query', function () {
    Object.prototype.toString.call(like('foo')).should.equal('[object RegExp]')
  })

  it('escapes regex chars', function () {
    var pattern = '#F#$FESR^.^_\\^GGW$%E()...'
    var regex = like(pattern)
    regex.test(pattern).should.equal(true)
    var regex2 = new RegExp(pattern)
    regex2.test(pattern).should.equal(false)
  })

  it('creates a case sensitive regex', function () {
    var regex = like('FOO')
    regex.test('foo').should.equal(false)
    regex.test('FOO').should.equal(true)
    regex.test('bar').should.equal(false)
  })

  it('takes opts for case insensitive', function () {
    like('foo', {ignoreCase: true}).test('FOO')
      .should.equal(true)
  })

})