function organizeGifts(gifts) {
  let currentNum = '';
  let currentLetter = '';
  let res = '';
  for (let i = 0; i < gifts.length; i += 1) {
    if (Number.isInteger(Number(gifts[i]))) {
      currentNum += gifts[i];
    } else {
      currentLetter += gifts[i];
      const num = Number(currentNum);

      const piles = Math.floor(num / 50);
      const boxes = Math.floor((num % 50) / 10);
      const unit = (num % 50) % 10;

      for (let j = 0; j < piles; j += 1) {
        res += `[${currentLetter}]`;
      }
      for (let j = 0; j < boxes; j += 1) {
        res += `{${currentLetter}}`;
      }
      if (unit > 0) {
        res += `(${currentLetter.repeat(unit)})`;
      }
      currentLetter = '';
      currentNum = '';
    }
  }
  return res;
}

console.log(organizeGifts('76a11b'));
