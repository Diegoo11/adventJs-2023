function manufacture(gifts, materials) {
  const materialsArr = materials.split('');

  const res = [];
  gifts.forEach((gift) => {
    if (gift.split('').every((letras) => materialsArr.includes(letras))) {
      res.push(gift);
    }
  });
  return res;
}

console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'));
