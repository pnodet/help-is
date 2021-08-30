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

`is.a()` alias `is.type()`

`is.defined()`

`is.empty()`

`is.hosted()`

`is.instance()` alias `is.instanceof()`

`is.nil()` alias `is.null()`

`is.undef()` alias `is.undefined()`

`is.args()` alias `is.arguments()`

`is.args.empty()`

`is.array()`

`is.array.empty()`

`is.arraylike()`

`is.bool()` alias `is.boolean()`

`is.false()`

`is.true()`

`is.date()`

`is.date.valid()`

`is.element()`

`is.error()`

`is.fn()` alias `is.function()`

`is.thenable()`

`is.promise()`

`is.num()` alias `is.number()`

`is.infinite()`

`is.decimal()`

`is.int()` alias `is.integer()`

`is.safeInteger()`

`is.bigInt()`

`is.float()`

`is.nan()`

`is.object()`

`is.primitive()`

`is.hash()`

`is.regexp()`

`is.string()`

`is.base64()`

`is.hex()`

`is.symbol()`

`is.event()`

`is.map()`

`is.weakMap()`

`is.set()`

`is.weakSet()`

`is.node()`

`is.browser()`
## License

MIT © [Paul Nodet](https://pnodet.com)
