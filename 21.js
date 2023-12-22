function findBalancedSegment(message) {
  const n = message.length;
  const parch = message.map((e) => (e === 0 ? -1 : 1));

  for (let v = n % 2 === 0 ? n : n - 1; v > 0; v -= 2) {
    for (let i = 0; i + v <= parch.length; i += 1) {
      if (parch.slice(i, i + v).reduce((a, b) => a + b, 0) === 0) {
        return [i, i + v - 1];
      }
    }
  }
  return [];
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
console.log(findBalancedSegment([1, 1, 0]));
console.log(findBalancedSegment([1, 1, 1]));
