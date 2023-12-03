function findNaughtyStep(original, modified) {
  let res = '';
  const maxStr = original.length > modified.length ? original : modified;
  /*
  for (let i = 0; i < maxStr.length; i += 1) {
    if (original[i] !== modified[i]) {
      res += maxStr[i];
      break;
    }
  }
  */

  maxStr.split('').forEach((str, index) => {
    if (res === '' && original[index] !== modified[index]) res = str;
  });
  return res;
}

console.log(findNaughtyStep('abcd', 'abcde'));
