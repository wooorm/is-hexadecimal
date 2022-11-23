/**
 * Check if the given code point, or the code point at the first index, is
 * hexadecimal.
 *
 * @param {string|number} value
 *   Code point or string.
 * @returns {boolean}
 *   Whether `value` is hexadecimal.
 */
export function isHexadecimal(value) {
  const code = typeof value === 'string' ? value.codePointAt(0) : value

  return (
    code !== undefined &&
    ((code >= 97 /* a */ && code <= 102) /* f */ ||
      (code >= 65 /* A */ && code <= 70) /* F */ ||
      (code >= 48 /* 0 */ && code <= 57)) /* 9 */
  )
}
