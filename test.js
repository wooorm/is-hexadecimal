/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-hexadecimal
 * @fileoverview Test suite for `is-hexadecimal`.
 */

'use strict';

/* eslint-env node */

/* Dependencies. */
var test = require('tape');
var hexadecimal = require('./');

/* Tests. */
test('hexadecimal(character)', function (t) {
  t.ok(hexadecimal('a'));
  t.ok(hexadecimal('F'));
  t.ok(hexadecimal('0'));
  t.ok(hexadecimal('a'.charCodeAt(0)));
  t.notOk(hexadecimal('G'));
  t.notOk(hexadecimal('a'.charCodeAt(0) - 1));
  t.notOk(hexadecimal('f'.charCodeAt(0) + 1));
  t.notOk(hexadecimal('A'.charCodeAt(0) - 1));
  t.notOk(hexadecimal('F'.charCodeAt(0) + 1));
  t.notOk(hexadecimal('0'.charCodeAt(0) - 1));
  t.notOk(hexadecimal('9'.charCodeAt(0) + 1));
  t.notOk(hexadecimal('g'.charCodeAt(0)));
  t.notOk(hexadecimal('💩'));

  t.end();
});
