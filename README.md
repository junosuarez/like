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


## api

Described using [jsig](https://github.com/jden/jsig):

`type Predicate : (Value) => Boolean`

### `like : (String) => RegExp`

### `like.startsWith : (String) => RegExp`

### `like.endsWith : (String) => RegExp`

### `like.fn : (String) => Predicate`

### `like.startsWithFn : (String) => Predicate`

### `like.endsWithFn : (String) => Predicate`

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