import test from 'ava';
import is from './index.js';

test('is.a()', (t) => {
	t.is(is.a('hello', 'string'), true);
	t.is(is.a(223, 'string'), false);
});

test('is.type()', (t) => {
	t.is(is.type('hello', 'string'), true);
	t.is(is.type(223, 'string'), false);
});

test('is.defined()', (t) => {
	t.is(is.defined('hello'), true);
	t.is(is.defined(undefined), false);
});

test('is.empty()', (t) => {
	t.is(is.empty([]), true);
	t.is(is.empty(['foo', 'bar']), false);
});
