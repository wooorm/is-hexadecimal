/**
 * Check if the given character code, or the character code at the first
 * character, is hexadecimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is hexadecimal
 */
export function isHexadecimal(character) {
  const code =
    typeof character === 'string' ? character.codePointAt(0) : character

  return (
    code !== undefined &&
    ((code >= 97 /* a */ && code <= 102) /* f */ ||
      (code >= 65 /* A */ && code <= 70) /* F */ ||
      (code >= 48 /* 0 */ && code <= 57)) /* 9 */
  )
}
