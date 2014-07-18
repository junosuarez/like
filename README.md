# like
build a regex from user input for filtering data

## installation

```console
$ npm install like
```

## usage
```js
var like = require('like')

var filter = like(searchField.value)

var matches = items.filter(function (x) {
  return filter.test(x)
})

// or we could get a predicate function like so:

var matches = items.filter(like.fn(searchField.value))
```

**note** As of 0.3.0, matches are case-sensitive by default. Functions take an options parameter which takes a `ignoreCase` option. Example:

```js
like('foo', {ignoreCase: true})
```

## api

Described using [jsig](https://github.com/jden/jsig):

`type Predicate : (Value) => Boolean`

### `like : (String, options: Object?) => RegExp`

### `like.startsWith : (String, options: Object?) => RegExp`

### `like.endsWith : (String, options: Object?) => RegExp`

### `like.fn : (String, options: Object?) => Predicate`

### `like.startsWithFn : (String, options: Object?) => Predicate`

### `like.endsWithFn : (String, options: Object?) => Predicate`

## running the tests

```console
$ git clone git@github.com:AgileDiagnosis/like.git && cd like
$ npm install
$ npm test
```

## kudos to
substack for [quotemeta](https://www.npmjs.org/package/quotemeta)

## contributors

jden <jason@denizac.org>

## license
MIT. (c) 2013 Agile Diagnosis <hello@agilediagnosis.com>. See LICENSE.md