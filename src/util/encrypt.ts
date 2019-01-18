import sha256 from 'crypto-js/sha256'

/**
 * encrypt user's password
 *
 * @export
 * @param {string} s
 * @returns {string}
 */
export function encrypt(s: string): string {
  return sha256(s)
}