function calculateTime(deliveries) {
  const arr = deliveries.map((str) => str.split(':').map((num) => Number(num)));

  let res = [0, 0, 0];

  arr.forEach((time) => {
    res[2] += time[2];
  });

  if (res[2] >= 60) {
    res[1] += Math.floor(res[2] / 60);
    res[2] %= 60;
  }

  arr.forEach((time) => {
    res[1] += time[1];
  });

  if (res[1] >= 60) {
    res[0] += Math.floor(res[1] / 60);
    res[1] %= 60;
  }

  arr.forEach((time) => {
    res[0] += time[0];
  });

  console.log(res[0], res[1], res[2]);
  if (res[0] >= 7) {
    res[0] -= 7;
    res = res.map((num) => (num < 10 ? `0${num}` : num));
  } else {
    if (res[2] > 0) {
      res[1] += 1;
      res[2] = 60 - res[2];
    }
    if (res[1] > 0) {
      res[0] += 1;
      res[1] = 60 - res[1];
    }
    res[0] = 7 - res[0];
    res = res.map((num) => (num < 10 ? `0${num}` : num));
    res[0] = `-${res[0]}`;
  }

  return res.join(':');
}

console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']));
