function autonomousDrive(store, movements) {
  const keys = {
    U: {
      x: 0,
      y: -1,
    },
    D: {
      x: 0,
      y: 1,
    },
    L: {
      x: -1,
      y: 0,
    },
    R: {
      x: 1,
      y: 0,
    },
  };

  let arr = store.map((str) => str.split(''));

  let indexY;
  let indexX;
  arr.forEach((line, y) => {
    line.forEach((letter, x) => {
      if (letter === '!') {
        indexY = y;
        indexX = x;
      }
    });
  });

  arr[indexY][indexX] = '.';

  movements.forEach((move) => {
    const { x } = keys[move];
    const { y } = keys[move];

    if (indexX + x < 0
      || indexX + x >= arr[0].length
      || indexY + y < 0
      || indexY + y >= arr.length
    ) return;
    if (arr[indexY + y][indexX + x] === '.') {
      indexY += y;
      indexX += x;
    }
  });

  arr[indexY][indexX] = '!';

  arr = arr.map((line) => line.join(''));

  return arr;
}

console.log(autonomousDrive(['.!.', '...'], ['R', 'R', 'R', 'U', 'D', 'D', 'D'])); // ['...', '..!']
