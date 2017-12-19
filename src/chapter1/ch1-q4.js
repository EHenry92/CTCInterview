'use strict';

export function isPalindromePermutationsSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str) {
    if (char !== ' ') { // ignore spaces
      if (chars.has(char)) {
        chars.delete(char);
      }
      else {
        chars.add(char);
      }
    }
  }

  return chars.size <= 1;
}
