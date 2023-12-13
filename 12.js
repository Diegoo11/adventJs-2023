// Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
// Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
// Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
// Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
// Los caracteres que no son letras (como los dígitos) no se degradan.

// funcion que devuelva true si es letra minuscula o mayuscula

function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;
  const order = {
    '#': 0,
    '+': 1,
    ':': 2,
    '.': 3,
    ' ': 4,
  };

  for (let i = 0; i < original.length; i += 1) {
    if (original[i] === ' ') {
      if (copy[i] !== ' ') return false;
      continue;
    }
    if (original[i] === copy[i]) continue;

    if (original[i].toLowerCase() !== copy[i]) {
      if (original[i].toLowerCase() !== original[i].toUpperCase()) {
        if (copy[i].toLowerCase() !== copy[i].toUpperCase()) return false;
        continue;
      }
      if (order[copy[i]] < order[original[i]]) return false;
    }
  }
  return true;
}

console.log(checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta cl#us is comin#',
)); // true
console.log(checkIsValidCopy(
  'Santa Claus is coming',
  'p#nt: cla#s #s c+min#',
)); // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'));

console.log(checkIsValidCopy('Santa Claus', 'santa cla#s'));
console.log(checkIsValidCopy('Santa Claus', 'sa#t# cl#+s'));
console.log(checkIsValidCopy('Santa Claus', 'sa+## c#+:s'));
console.log(checkIsValidCopy('Santa Claus', 's#++. c+:.s'));
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s'));
