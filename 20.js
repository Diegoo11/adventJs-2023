function distributeGifts(weights) {
  const res = weights.map((row, i) => row.map((e, j) => {
    let count = 0;
    let sum = 0;
    const positions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    positions.forEach(([x, y]) => {
      if (weights[i + x] && weights[i + x][j + y]) {
        sum += weights[i + x][j + y];
        count += 1;
      }
    });

    if (e) { count += 1; sum += e; }
    return Math.round(sum / count);
  }));
  return res;
}

console.log(distributeGifts([
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
]));
