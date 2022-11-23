import assert from 'node:assert/strict'
import test from 'node:test'
import {isHexadecimal} from './index.js'

test('isHexadecimal(character)', function () {
  const _0 = 0x30
  const _9 = 0x39
  const A = 0x41
  const F = 0x46
  const a = 0x61
  const f = 0x66

  assert.ok(isHexadecimal('a'))
  assert.ok(isHexadecimal('F'))
  assert.ok(isHexadecimal('0'))
  assert.ok(isHexadecimal(a))
  assert.ok(!isHexadecimal('G'))
  assert.ok(!isHexadecimal(a - 1))
  assert.ok(!isHexadecimal(f + 1))
  assert.ok(!isHexadecimal(A - 1))
  assert.ok(!isHexadecimal(F + 1))
  assert.ok(!isHexadecimal(_0 - 1))
  assert.ok(!isHexadecimal(_9 + 1))
  assert.ok(!isHexadecimal('💩'))
})
