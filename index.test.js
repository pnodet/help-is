/* eslint-disable prefer-rest-params */
import test from 'ava';
import is from './index.js';

test('is.a()', t => {
	const booleans = [true, false];
	for (const item of booleans) {
		t.true(is.a(item, 'boolean'));
	}

	const numbers = [
		1,
		0 / 1,
		0 / -1,
		Number.NaN,
		Number.POSITIVE_INFINITY,
		Number.NEGATIVE_INFINITY,
	];
	for (const item of numbers) {
		t.true(is.a(item, 'number'));
	}

	const objects = [{}, null, new Date()];
	for (const item of objects) {
		t.true(is.a(item, 'object'));
	}

	const strings = ['', 'abc'];
	for (const item of strings) {
		t.true(is.a(item, 'string'));
	}

	t.true(is.a(undefined, 'undefined'));
});

test('is.type()', t => {
	const booleans = [true, false];
	for (const item of booleans) {
		t.true(is.type(item, 'boolean'));
	}

	const numbers = [
		1,
		0 / 1,
		0 / -1,
		Number.NaN,
		Number.POSITIVE_INFINITY,
		Number.NEGATIVE_INFINITY,
	];
	for (const item of numbers) {
		t.true(is.type(item, 'number'));
	}

	const objects = [{}, null, new Date()];
	for (const item of objects) {
		t.true(is.type(item, 'object'));
	}

	const strings = ['', 'abc'];
	for (const item of strings) {
		t.true(is.type(item, 'string'));
	}

	t.true(is.type(undefined, 'undefined'));
});

test('is.defined()', t => {
	t.false(is.defined());
	t.false(is.defined(undefined));
	t.true(is.defined(null));
	t.true(is.defined({}));
});

test('is.empty()', t => {
	t.true(is.empty(''));
	t.true(is.empty({}));
	t.true(is.empty([]));
	t.true(is.empty({}));
	t.true(is.empty(null));
	t.true(is.empty());
	t.true(is.empty(undefined));
	t.true(is.empty(false));
	t.true(is.empty(0));
	t.true(is.empty(Number.NaN));
	(function (...args) {
		t.true(is.empty(args));
	})();

	t.false(is.empty({a: 1}));
	t.false(is.empty(true));
	t.false(is.empty(/a/g));
	t.false(is.empty(new Date()));
});

test('is.hosted()', t => {
	t.true(is.hosted('a', {a: {}}), 'object is hosted');
	t.true(is.hosted('a', {a: []}), 'array is hosted');
	t.true(is.hosted('a', {a() {}}), 'function is hosted');
	t.false(is.hosted('a', {a: true}), 'boolean value is not hosted');
	t.false(is.hosted('a', {a: false}), 'boolean value is not hosted');
	t.false(is.hosted('a', {a: 3}), 'number value is not hosted');
	t.false(is.hosted('a', {a: undefined}), 'undefined value is not hosted');
	t.false(is.hosted('a', {a: 'abc'}), 'string value is not hosted');
	t.false(is.hosted('a', {a: null}), 'null value is not hosted');
});

test('is.instance()', t => {
	t.true(is.instance(new Date(), Date), 'new Date is instanceof Date');
	const F = function () {};
	t.true(is.instance(new F(), F), 'new constructor is instanceof constructor');
});

test('is.instanceof()', t => {
	t.pass();
});

test('is.nil()', t => {
	t.pass();
});

test('is.null()', t => {
	t.pass();
});

test('is.undef()', t => {
	t.true(is.undef());
	t.true(is.undef(undefined));
	t.false(is.undef(null));
	t.false(is.undef({}));
});

test('is.undefined()', t => {
	t.true(is.undefined());
	t.true(is.undefined(undefined));
	t.false(is.undefined(null));
	t.false(is.undefined({}));
});

test('is.args()', t => {
	t.false(is.args([]), 'array is not arguments');
	(function () {
		t.true(is.args(arguments), 'arguments is arguments');
	})();

	(function () {
		t.false(
			is.args(Array.prototype.slice.call(arguments)),
			'sliced arguments is not arguments',
		);
	})();

	const fakeOldArguments = {
		callee() {},
		length: 3,
	};
	t.true(is.args(fakeOldArguments), 'old-style arguments object is arguments');
});

test('is.arguments()', t => {
	t.false(is.arguments([]), 'array is not arguments');
	(function () {
		t.true(is.arguments(arguments), 'arguments is arguments');
	})();

	(function () {
		t.false(
			is.arguments(Array.prototype.slice.call(arguments)),
			'sliced arguments is not arguments',
		);
	})();

	const fakeOldArguments = {
		callee() {},
		length: 3,
	};
	t.true(
		is.arguments(fakeOldArguments),
		'old-style arguments object is arguments',
	);
});

test('is.args.empty()', t => {
	t.false(is.args.empty([]), 'empty array is not empty arguments');
	(function () {
		t.true(is.args.empty(arguments), 'empty arguments is empty arguments');
	})();

	(function () {
		t.false(
			is.args.empty(Array.prototype.slice.call(arguments)),
			'empty sliced arguments is not empty arguments',
		);
	})();
});

test('is.array()', t => {
	t.true(is.array([]), 'array is array');
	(function () {
		t.true(
			is.array(Array.prototype.slice.call(arguments)),
			'sliced arguments is array',
		);
	})();

	t.false(is.array({1: 'a', 2: 'b', 3: 'c'}));
});

test('is.array.empty()', t => {
	t.true(is.array.empty([]));
	t.true(is.array.empty([]), 'empty array is empty array');
	(function () {
		t.false(is.array.empty(arguments), 'empty arguments is not empty array');
	})();

	(function () {
		t.true(
			is.array.empty(Array.prototype.slice.call(arguments)),
			'empty sliced arguments is empty array',
		);
	})();

	t.false(is.array.empty([1, 2, 3]));
});

test('is.arraylike()', t => {
	t.false(is.arraylike(), 'undefined is not array-like');
	t.false(is.arraylike(null), 'null is not array-like');
	t.false(is.arraylike(false), 'false is not array-like');
	t.false(is.arraylike(true), 'true is not array-like');
	t.true(is.arraylike({length: 0}), 'object with zero length is array-like');
	t.true(
		is.arraylike({length: 1}),
		'object with positive length is array-like',
	);
	t.false(
		is.arraylike({length: -1}),
		'object with negative length is not array-like',
	);
	t.false(is.arraylike({length: Number.NaN}));
	t.false(is.arraylike({length: 'foo'}));
	t.false(is.arraylike({length: ''}));
	t.true(is.arraylike([]), 'array is array-like');
	(function (...args) {
		t.true(is.arraylike(args), 'empty arguments is array-like');
	})();

	(function (...args) {
		t.true(is.arraylike(args), 'nonempty arguments is array-like');
	})(1, 2, 3);
});

test('is.bool()', t => {
	t.true(is.bool(true), 'literal true is a boolean');
	t.true(is.bool(false), 'literal false is a boolean');
	t.false(is.bool(), 'undefined is not a boolean');
	t.false(is.bool(null), 'null is not a boolean');
});

test('is.boolean()', t => {
	t.true(is.boolean(true), 'literal true is a boolean');
	t.true(is.boolean(false), 'literal false is a boolean');
	t.false(is.boolean(), 'undefined is not a boolean');
	t.false(is.boolean(null), 'null is not a boolean');
});

test('is.false()', t => {
	t.true(is.false(false));
	t.false(is.false(true));
});

test('is.true()', t => {
	t.true(is.true(true));
	t.false(is.true(false));
});

test('is.date()', t => {
	t.pass();
});

test('is.date.valid()', t => {
	t.pass();
});

test('is.element()', t => {
	t.pass();
});

test('is.error()', t => {
	t.pass();
});

test('is.fn()', t => {
	const sum = x => x + x;
	t.true(is.fn(sum));
	t.false(is.fn('sum'));
});

test('is.function()', t => {
	const sum = x => x + x;
	t.true(is.function(sum));
	t.false(is.function('sum'));
});

test('is.thenable()', t => {
	t.pass();
});

test('is.promise()', t => {
	t.pass();
});

test('is.num()', t => {
	t.true(is.num(1));
	t.false(is.num('1'));
});

test('is.number()', t => {
	t.true(is.number(1));
	t.false(is.number('1'));
});

test('is.infinite()', t => {
	t.pass();
});

test('is.decimal()', t => {
	t.true(is.decimal(1.2));
	t.false(is.decimal(1));
});

test('is.int()', t => {
	t.true(is.int(1));
	t.false(is.int(1.2));
});

test('is.integer()', t => {
	t.true(is.integer(1));
	t.false(is.integer(1.2));
});

test('is.safeInteger()', t => {
	t.pass();
});

test('is.bigInt()', t => {
	t.pass();
});

test('is.float()', t => {
	t.true(is.float(1.2));
	t.false(is.float(1));
});

test('is.nan()', t => {
	t.pass();
});

test('is.object()', t => {
	t.pass();
});

test('is.primitive()', t => {
	t.pass();
});

test('is.hash()', t => {
	t.pass();
});

test('is.regexp()', t => {
	t.pass();
});

test('is.string()', t => {
	t.true(is.string('foo'));
	t.false(is.string(1));
});

test('is.base64()', t => {
	t.pass();
});

test('is.hex()', t => {
	t.pass();
});

test('is.symbol()', t => {
	t.pass();
});

test('is.event()', t => {
	t.pass();
});

test('is.map()', t => {
	t.pass();
});

test('is.weakMap()', t => {
	t.pass();
});

test('is.set()', t => {
	t.pass();
});

test('is.weakSet()', t => {
	t.pass();
});

test('is.node()', t => {
	t.pass();
});

test('is.browser()', t => {
	t.pass();
});
