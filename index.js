var quotemeta = require('quotemeta')

function like(string) {
  return new RegExp(quotemeta(string), 'i')
}

function startsWith(string) {
  return new RegExp('^' + quotemeta(string), 'i')
}

function endsWith(string){
  return new RegExp(quotemeta(string) + '$', 'i')
}

function likePredicate(string) {
  var exp = like(string)
  return function (x) {
    return exp.test(x)
  }
}

function startsWithPredicate(string) {
  var exp = startsWith(string) 
  return function (x) {
    return exp.test(x)
  }
}

function endsWithPredicate(string) {
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