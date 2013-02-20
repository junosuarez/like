# like
build a regex from user input for filtering data

## installation
    $ npm install like

## usage

    var like = require('like')

    var filter = like(searchField.value)

    var matches = items.filter(function (x) {
      return filter.test(x)
    })

    // or we could get a predicate function like so:

    var matches = items.filter(like.fn(searchField.value))

## api

### like(string) => RegExp

### like.startsWith(string) => RegExp

### like.endsWith(string) => RegExp

### like.fn(string) => Predicate

### like.startsWithFn(string) => Predicate

### like.endsWithFn(string) => Predicate

## running the tests

    $ git clone git@github.com:AgileDiagnosis/like.git
    $ cd like
    $ npm install
    $ npm test

## kudos to
substack for [quotemeta]()

## contributors

jden <jason@denizac.org>

## license
MIT. (c) 2013 Agile Diagnosis <hello@agilediagnosis.com>. See LICENSE.md