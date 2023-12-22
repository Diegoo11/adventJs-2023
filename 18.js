function drawClock(time) {
  const numbers = {
    0: [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
    ],
    1: [
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
    ],
    2: [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
    ],
    3: [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
    ],
    4: [
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
    ],
    5: [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
    ],
    6: [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
    ],
    7: [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
    ],
    8: [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
    ],
    9: [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
    ],
    ':': [
      [' '],
      [' '],
      ['*'],
      [' '],
      ['*'],
      [' '],
      [' '],
    ],
  };

  const [hours, minutes] = time.split(':');

  const response = [];

  for (let i = 0; i < 7; i += 1) {
    const arr = [
      ...numbers[hours[0]][i],
      ' ',
      ...numbers[hours[1]][i],
      ' ',
      ...numbers[':'][i],
      ' ',
      ...numbers[minutes[0]][i],
      ' ',
      ...numbers[minutes[1]][i],
    ];
    response.push(arr);
  }

  console.log(response.map((arr) => arr.join('')).join('\n'));
  return response;
}

console.log(JSON.stringify(drawClock('01:30')));
console.log([
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
].map((arr) => arr.join('')).join('\n'));
