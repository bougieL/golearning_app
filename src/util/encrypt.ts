import sha256 from 'crypto-js/sha256'

export function encrypt(s: string): string {
  return sha256(s)
}