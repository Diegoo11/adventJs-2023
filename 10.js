function createChristmasTree(ornaments, height) {
  let res = '';
  let count = 0;

  for (let i = 1; i <= height; i += 1) {
    let str = '';
    str += ' '.repeat(height - i);
    for (let j = 1; j <= i * 2 - 1; j += 1) {
      if (count === ornaments.length) count = 0;
      if (j % 2 === 0) str += ' ';
      else {
        str += ornaments[count];
        count += 1;
      }
    }
    str += '\n';
    res += str;
  }

  res += `${' '.repeat(height - 1)}|\n`;
  return res;
}

console.log(createChristmasTree('123', 5));
