function manufacture(gifts, materials) {
  /*
  const materialsArr = materials.split('');

  const res = [];
  gifts.forEach((gift) => {
    if (gift.split('').every((letras) => materialsArr.includes(letras))) {
      res.push(gift);
    }
  });
  return res;
  */

  return gifts.filter((gift) => gift.split('').every((letras) => materials.includes(letras)));
}

console.log(manufacture(['a', 'b', 'c', 'd'], 'abcd'));
