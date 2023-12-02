function findFirstRepeated(gifts) {
  const ids = [];
  let res = -1;

  for (let i = 0; i < gifts.length; i += 1) {
    if (ids.includes(gifts[i])) {
      res = gifts[i];
      break;
    }
    ids.push(gifts[i]);
  }

  return res;
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]));
