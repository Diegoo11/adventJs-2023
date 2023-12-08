function maxDistance(movements) {
  let res = 0;
  let plus = 0;
  for (let i = 0; i < movements.length; i += 1) {
    if (movements[i] === '>') res += 1;
    if (movements[i] === '<') res -= 1;
    if (movements[i] === '*') plus += 1;
  }

  return Math.abs(res) + plus;
}

console.log(maxDistance('>***>'));
