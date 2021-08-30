/* globals window, document, HTMLElement */
/* eslint-disable promise/prefer-await-to-then */

const objectProto = Object.prototype;
const owns = objectProto.hasOwnProperty;
const toString_ = objectProto.toString;

const NON_HOST_TYPES = {
	boolean: 1,
	number: 1,
	string: 1,
	undefined: 1,
};

const base64Regex =
	/^([A-Za-z\d+/]{4})*([A-Za-z\d+/]{4}|[A-Za-z\d+/]{3}=|[A-Za-z\d+/]{2}==)$/;
const hexRegex = /^[A-Fa-f\d]+$/;

const is = {};

/** Test if `value` is a type of `type`. */
is.a = (value, type) => typeof value === type;

/** Test if `value` is a type of `type`. */
is.type = (value, type) => typeof value === type;

/** Test if `value` is defined. */
is.defined = (value) => typeof value !== 'undefined';

/** Test if `value` is empty. */
is.empty = (value) => {
	const type = toString_.call(value);
	let key;

	if (
		type === '[object Array]' ||
		type === '[object Arguments]' ||
		type === '[object String]'
	) {
		return value.length === 0;
	}

	if (type === '[object Object]') {
		for (key in value) {
			if (owns.call(value, key)) {
				return false;
			}
		}

		return true;
	}

	return !value;
};

/** Test if `value` is hosted by `host`. */
is.hosted = (value, host) => {
	const type = typeof host[value];
	return type === 'object' ? Boolean(host[value]) : !NON_HOST_TYPES[type];
};

/** Test if `value` is an instance of `constructor`. */
is.instance = (value, constructor) => value instanceof constructor;

/** Test if `value` is an instance of `constructor`. */
is.instanceof = (value, constructor) => value instanceof constructor;

/** Test if `value` is null. */
is.nil = (value) => value === null;

/** Test if `value` is null. */
is.null = (value) => value === null;

/** Test if `value` is undefined. */
is.undef = (value) => typeof value === 'undefined';

/** Test if `value` is undefined. */
is.undefined = (value) => typeof value === 'undefined';

/** Test if `value` is an arguments object. */
is.args = (value) => {
	const isStandardArguments = toString_.call(value) === '[object Arguments]';
	const isOldArguments =
		!is.array(value) &&
		is.arraylike(value) &&
		is.object(value) &&
		is.fn(value.callee);
	return isStandardArguments || isOldArguments;
};

/** Test if `value` is an arguments object. */
is.arguments = (value) => {
	const isStandardArguments = toString_.call(value) === '[object Arguments]';
	const isOldArguments =
		!is.array(value) &&
		is.arraylike(value) &&
		is.object(value) &&
		is.fn(value.callee);
	return isStandardArguments || isOldArguments;
};

/** Test if `value` is an empty arguments object. */
is.args.empty = (value) => is.args(value) && value.length === 0;

/** Test if 'value' is an array. */
is.array = (value) =>
	Array.isArray(value) || toString_.call(value) === '[object Array]';

/** Test if `value` is an empty array. */
is.array.empty = (value) => is.array(value) && value.length === 0;

/** Test if `value` is an arraylike object. */
is.arraylike = (value) =>
	Boolean(value) &&
	!is.bool(value) &&
	owns.call(value, 'length') &&
	Number.isFinite(value.length) &&
	is.number(value.length) &&
	value.length >= 0;

/** Test if `value` is a boolean. */
is.bool = (value) => toString_.call(value) === '[object Boolean]';

/** Test if `value` is a boolean. */
is.boolean = (value) => toString_.call(value) === '[object Boolean]';

/** Test if `value` is false. */
is.false = (value) => is.bool(value) && Boolean(Number(value)) === false;

/** Test if `value` is true. */
is.true = (value) => is.bool(value) && Boolean(Number(value)) === true;

/** Test if `value` is a date. */
is.date = (value) => toString_.call(value) === '[object Date]';

/** Test if `value` is a valid date. */
is.date.valid = (value) => is.date(value) && !Number.isNaN(Number(value));

/** Test if `value` is an html element. */
is.element = (value) =>
	value !== undefined &&
	typeof HTMLElement !== 'undefined' &&
	value instanceof HTMLElement &&
	value.nodeType === 1;

/** Test if `value` is an error object. */
is.error = (value) => toString_.call(value) === '[object Error]';

/** Test if `value` is a function. */
is.fn = (value) => typeof value === 'function';

/** Test if `value` is a function. */
is.function = (value) => typeof value === 'function';

/** Test if `value` is a function and `then` can be called. */
is.thenable = (value) => value && is.function(value.then);

/** Test if `value` is a promise. */
is.promise = (value) => is.thenable(value) && is.function(value.catch);

/** Test if `value` is a number. */
is.num = (value) => toString_.call(value) === '[object Number]';

/** Test if `value` is a number. */
is.number = (value) => toString_.call(value) === '[object Number]';

/** Test if `value` is positive or negative infinity. */
is.infinite = (value) =>
	value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY;

/** Test if `value` is a decimal number. */
is.decimal = (value) =>
	is.num(value) &&
	!is.infinite(value) &&
	!Number.isNaN(value) &&
	value % 1 !== 0;

/** Test if `value` is an integer. */
is.int = (value) => is.num(value) && !Number.isNaN(value) && value % 1 === 0;

/** Test if `value` is an integer. */
is.integer = (value) =>
	is.num(value) && !Number.isNaN(value) && value % 1 === 0;

/** Test if `value` is a 'safe' integer. */
is.safeInteger = (value) => Number.isSafeInteger(value) && !Number.isNaN(value);

/** Test if `value` is a BigInt. */
is.bigInt = (value) => typeof value === 'bigint';

/** Test if `value` is a float. */
is.float = (value) =>
	is.number(value) && !Number.isNaN(value) && Math.floor(value) !== value;

/** Test if `value` is not a number. */
is.nan = (value) => !is.number(value) || Number.isNaN(value);

/** Test if `value` is an object. */
is.object = (value) => toString_.call(value) === '[object Object]';

/** Test if `value` is a primitive. */
is.primitive = (value) => {
	if (!value) {
		return true;
	}

	if (
		typeof value === 'object' ||
		is.object(value) ||
		is.fn(value) ||
		is.array(value)
	) {
		return false;
	}

	return true;
};

/** Test if `value` is a hash - a plain object literal. */
is.hash = (value) =>
	is.object(value) &&
	value.constructor === Object &&
	!value.nodeType &&
	!value.setInterval;

/** Test if `value` is a regular expression. */
is.regexp = (value) => toString_.call(value) === '[object RegExp]';

/** Test if `value` is a string. */
is.string = (value) => toString_.call(value) === '[object String]';

/** Test if `value` is a valid base64 encoded string. */
is.base64 = (value) =>
	is.string(value) && (value.length === 0 || base64Regex.test(value));

/** Test if `value` is a valid hex encoded string. */
is.hex = (value) =>
	is.string(value) && (value.length === 0 || hexRegex.test(value));

/** Test if `value` is a Symbol. */
is.symbol = (value) => typeof value === 'symbol';

/** Test if `value` is a prototype. */
is.prototype = (value) => {
	const Ctor = value && value.constructor;
	const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;
	return value === proto;
};

/** Test if `value` is an event. */
is.event = (value) => is.function(value.listen) && is.function(value.broadcast);

/** Test if `value` is a Map. */
is.map = (value) => value instanceof Map;

/** Test if `value` is a WeakMap. */
is.weakMap = (value) => value instanceof WeakMap;

/** Test if `value` is a Set. */
is.set = (value) => value instanceof Set;

/** Test if `value` is a WeakSet. */
is.weakSet = (value) => value instanceof WeakSet;

/** Test if `environment` is Node. */
is.node = () => typeof window !== 'undefined';

/** Test if `environment` is Browser. */
is.browser = () => ![typeof window, typeof document].includes('undefined');

export default is;
