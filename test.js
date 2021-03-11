import test from 'tape'
import {isHexadecimal} from './index.js'

test('isHexadecimal(character)', function (t) {
  t.ok(isHexadecimal('a'))
  t.ok(isHexadecimal('F'))
  t.ok(isHexadecimal('0'))
  t.ok(isHexadecimal('a'.charCodeAt(0)))
  t.notOk(isHexadecimal('G'))
  t.notOk(isHexadecimal('a'.charCodeAt(0) - 1))
  t.notOk(isHexadecimal('f'.charCodeAt(0) + 1))
  t.notOk(isHexadecimal('A'.charCodeAt(0) - 1))
  t.notOk(isHexadecimal('F'.charCodeAt(0) + 1))
  t.notOk(isHexadecimal('0'.charCodeAt(0) - 1))
  t.notOk(isHexadecimal('9'.charCodeAt(0) + 1))
  t.notOk(isHexadecimal('g'.charCodeAt(0)))
  t.notOk(isHexadecimal('💩'))

  t.end()
})
