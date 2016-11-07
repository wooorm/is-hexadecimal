'use strict';

var test = require('tape');
var hexadecimal = require('./');

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
