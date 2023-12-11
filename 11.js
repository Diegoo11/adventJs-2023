/* eslint-disable no-param-reassign */
function getIndexsForPalindrome(word) {
  word = word.split('');
  const arr = [];

  if (
    word.reduce((before, item, index) => before && item === word[word.length - 1 - index], true)
  ) return [];

  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== word[word.length - 1 - i]) {
      arr.push({
        index: i,
        letter: word[i],
        need: word[word.length - 1 - i],
      });
    }
    if (word.length % 2 !== 0 && i === (word.length - 1) / 2) {
      arr.push({
        index: i,
        letter: word[i],
        need: '*',
      });
    }
  }
  const index = arr.find((item) => item.need === arr[0].letter || item.need === '*');
  const res = [arr[0].index, index.index];

  const { letter } = index;
  word[index.index] = arr[0].letter;
  word[arr[0].index] = letter;

  if (!word.reduce((before, item, i) => before && item === word[word.length - 1 - i], true)) {
    return null;
  }

  return res;
}

console.log(getIndexsForPalindrome('caababa'));
