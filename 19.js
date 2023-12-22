function revealSabotage(store) {
  

  store = store.map((line, y) => {
    return line.map((e, x) => {
      if(e === "*") return "*";
      let count = 0;
      for(let i = y-1; i <= y + 1; i += 1) {
        if(store[i]) {
          for(let j = x-1; j <= x + 1; j += 1) {
            if( i === y && j === x ) continue;
            if(store[i][j] && store[i][j] === "*") {
              count += 1;
            }
          }
        }
      }
      if(count === 0) return " ";
      return "" + count;
    });
  });
 
  return store;
}

console.log(revealSabotage([
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]));
