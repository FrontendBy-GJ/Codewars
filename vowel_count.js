// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const hash = {};
  for (s of str) {
    if (['a', 'e', 'i', 'o', 'u'].includes(s)) {
      hash[s] = (hash[s] || 0) + 1;
    }
  }
  return Object.values(hash).reduce((count, val) => count + val, 0);
}
console.log(getCount('abracadabra'));
