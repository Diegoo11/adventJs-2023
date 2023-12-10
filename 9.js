function adjustLights(lights) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < lights.length; i += 1) {
    if (i % 2 === 0) {
      if (lights[i] === '🔴') first += 1;
      else second += 1;
    } else if (i % 2 !== 0) {
      if (lights[i] === '🟢') first += 1;
      else second += 1;
    }
  }
  return Math.min(first, second);
}

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
