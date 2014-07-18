var quotemeta = require('quotemeta')

function like(string, opt) {
  var modifiers = (opt && opt.ignoreCase) ? 'i' : ''
  return new RegExp(quotemeta(string), modifiers)
}

function startsWith(string, opt) {
  var modifiers = (opt && opt.ignoreCase) ? 'i' : ''
  return new RegExp('^' + quotemeta(string), modifiers)
}

function endsWith(string, opt){
  var modifiers = (opt && opt.ignoreCase) ? 'i' : ''
  return new RegExp(quotemeta(string) + '$', modifiers)
}

function likePredicate(string, opt) {
  var exp = like(string, opt)
  return function (x) {
    return exp.test(x)
  }
}

function startsWithPredicate(string, opt) {
  var exp = startsWith(string, opt) 
  return function (x) {
    return exp.test(x)
  }
}

function endsWithPredicate(string, opt) {
  var exp = endsWith(string) 
  return function (x) {
    return exp.test(x)
  }
}

module.exports = like
module.exports.startsWith = startsWith
module.exports.endsWith= endsWith
module.exports.fn = likePredicate
module.exports.startsWithFn = startsWithPredicate
module.exports.endsWithFn = endsWithPredicate