# help-is
> Small js package I use to test if a value is... (a number, a function...)

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![GitHub workflow status](https://img.shields.io/github/workflow/status/pnxdxt/help-is/CI)](https://github.com/pnxdxt/help-is)
[![npm bundle size](https://img.shields.io/bundlephobia/min/help-is)](https://bundlephobia.com/package/help-is)
[![npm downloads](https://img.shields.io/npm/dt/help-is)](https://www.npmjs.com/package/help-is)

## Install
```
$ npm install help-is
```
## Import

This package is pure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It cannot be `require()`'d from CommonJS.

Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package.

```js
// Load entire build
import is from 'help-is';
```
If the package is used in an async context, you could use [`await import(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) from CommonJS instead of `require(…)`.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

Read more here: [sindresorhus/esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)


## Usage

```js
is.string([1, 2, 3]);
//=> false

is.string('Hello');
//=> true
```

## API

`is.a(value, type)` alias `is.type(value, type)` : Test if `value` is a type of `type`.

`is.defined()` : Test if `value` is defined.

`is.empty()` : Test if `value` is empty.

`is.hosted(value, host)` : Test if `value` is hosted by `host`.

`is.instance(value, constructor)` alias `is.instanceof(value, constructor)`

`is.nil()` alias `is.null()` : Test if `value` is null.

`is.undef()` alias `is.undefined()` : Test if `value` is undefined.

`is.args()` alias `is.arguments()` : Test if `value` is an arguments object.

`is.args.empty()` : Test if `value` is an empty arguments object.

`is.array()` : Test if 'value' is an array.

`is.array.empty()` : Test if `value` is an empty array.

`is.arraylike()` : Test if `value` is an arraylike object.

`is.bool()` alias `is.boolean()` : Test if `value` is a boolean.

`is.false()` : Test if `value` is false.

`is.true()` : Test if `value` is true.

`is.date()` : Test if `value` is a date.

`is.date.valid()` : Test if `value` is a valid date.

`is.element()` : Test if `value` is an html element.

`is.error()` : Test if `value` is an error object.

`is.fn()` alias `is.function()` : Test if `value` is a function.

`is.thenable()` : Test if `value` is a function and `then` can be called.

`is.promise()` : Test if `value` is a promise.

`is.num()` alias `is.number()` : Test if `value` is a number.

`is.infinite()` : Test if `value` is positive or negative infinity.

`is.decimal()` : Test if `value` is a decimal number.

`is.int()` alias `is.integer()` : Test if `value` is an integer.

`is.safeInteger()` : Test if `value` is a 'safe' integer.

`is.bigInt()` : Test if `value` is a BigInt.

`is.float()` : Test if `value` is a float.

`is.nan()` : Test if `value` is not a number.

`is.object()` : Test if `value` is an object.

`is.primitive()` : Test if `value` is a primitive.

`is.hash()` : Test if `value` is a hash - a plain object literal.

`is.regexp()` : Test if `value` is a regular expression.

`is.string()` : Test if `value` is a string.

`is.base64()` : Test if `value` is a valid base64 encoded string.

`is.hex()` : Test if `value` is a valid hex encoded string.

`is.symbol()` : Test if `value` is a Symbol.

`is.event()` : Test if `value` is a prototype.

`is.map()` : Test if `value` is a Map.

`is.weakMap()` : Test if `value` is a WeakMap.

`is.set()` : Test if `value` is a Set.

`is.weakSet()` : Test if `value` is a WeakSet.

`is.node()` : Test if `environment` is Node.

`is.browser()` : Test if `environment` is Browser.
## License

MIT © [Paul Nodet](https://pnodet.com)
