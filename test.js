import test from 'tape'
import {isHexadecimal} from './index.js'

test('isHexadecimal(character)', function (t) {
  const _0 = 0x30
  const _9 = 0x39
  const A = 0x41
  const F = 0x46
  const a = 0x61
  const f = 0x66
  t.ok(isHexadecimal('a'))
  t.ok(isHexadecimal('F'))
  t.ok(isHexadecimal('0'))
  t.ok(isHexadecimal(a))
  t.notOk(isHexadecimal('G'))
  t.notOk(isHexadecimal(a - 1))
  t.notOk(isHexadecimal(f + 1))
  t.notOk(isHexadecimal(A - 1))
  t.notOk(isHexadecimal(F + 1))
  t.notOk(isHexadecimal(_0 - 1))
  t.notOk(isHexadecimal(_9 + 1))
  t.notOk(isHexadecimal('💩'))

  t.end()
})
