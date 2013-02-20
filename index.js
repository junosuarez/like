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
  return function (x) {
    return like(string).test(x)
  }
}

function startsWithPredicate(string) {
  return function (x) {
    return startsWith(string).test(x)
  }
}

function endsWithPredicate(string) {
  return function (x) {
    return endsWith(string).test(x)
  }
}

module.exports = like
module.exports.startsWith = startsWith
module.exports.endsWith= endsWith
module.exports.fn = likePredicate
module.exports.startsWithFn = startsWithPredicate
module.exports.endsWithFn = endsWithPredicate