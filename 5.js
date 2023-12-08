function cyberReindeer(road, time) {
  let clearRoad = `.${road.substring(1)}`;

  const res = [];
  let count = 0;
  for (let i = 0; i < time; i += 1) {
    if (i === 5) clearRoad = clearRoad.replace(/\|/g, '*');
    const roadArr = clearRoad.split('');
    if (roadArr[count] === '|') {
      count -= 1;
    }
    roadArr[count] = 'S';
    const str = roadArr.join('');
    res.push(str);
    count += 1;
  }
  return res;
}

console.log(cyberReindeer('S..|...|..', 10));
