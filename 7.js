function drawGift(size, symbol) {
  let res = '';
  if (size === 1) return `${'#'}\n`;
  for (let i = 0; i < size * 2 - 1; i += 1) {
    let str = '';

    if (i < size) {
      str = ' '.repeat(size - i - 1);
    }

    if (i % (size - 1) === 0) {
      str += '#'.repeat(size);
    } else {
      str += `#${symbol.repeat(size - 2)}#`;
    }

    if (i !== 0 && i !== size * 2 - 2) {
      if (i < size) {
        str += `${symbol.repeat(i - 1)}#`;
      } else {
        str += `${symbol.repeat(size * 2 - 3 - i)}#`;
      }
    }
    res += `${str}\n`;
  }
  res += '\n';
  return res;
}

console.log(drawGift(1, '*'));
