function maxGifts(houses) {
  const maxi = (i, sum) => {
    if (i >= houses.length) {
      return sum;
    }
    const two = maxi(i + 2, sum + houses[i]);
    const three = maxi(i + 3, sum + houses[i]);

    return two > three ? two : three;
  };

  return Math.max(
    maxi(0, 0),
    maxi(1, 0),
  );
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
