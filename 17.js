function advent(arr) { 
  const findMatch = (arreglo) => {
    const save = [];
    const currentDuo = arreglo[0];
    let min = currentDuo[0];
    let max = currentDuo[1];t
    let match = false;
    console.log({min, max})
    arreglo.forEach((duo, i) => {
      if(i === 0) return;
      console.log(duo[0], currentDuo[1])
      if (
        duo[0] < currentDuo[1]
      ) {
        console.log(1)
        min = Math.min(min, duo[0]);
        max = Math.max(max, duo[1]);
        match = true;
      } else save.push(duo);
    });
    if (!match) return []

    return findMatch([[min, max], ...save]);
  };
  return findMatch(arr);
}

console.log(advent([[1, 3], [2, 4], [5, 8], [6, 10]]));
console.log(advent([[3, 4], [5, 8], [2, 7]]))

