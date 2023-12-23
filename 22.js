/*
function compile(code) {
  let count = 0;
  let safeCount = null;
  const operations = {
    '+': () => { count += 1; },
    '*': () => { count *= 2; },
    '-': () => { count -= 1; },
    '%': (i) => { safeCount = i; },
  };

  let clearCode = code;
  let blockCode = '';
  if (code.indexOf('?') !== -1) {
    clearCode = code.slice(0, code.indexOf('¿')) + code.slice(code.indexOf('?') + 1);
    blockCode = code.slice(code.indexOf('¿') + 1, code.indexOf('?'));
  }
  for (let i = 0; i < clearCode.length; i += 1) {
    console.log(count, safeCount, i, clearCode[i], { blockCode });
    if (clearCode[i] === '<') {
      if (safeCount) i = safeCount;
      safeCount = null;
    } else operations[clearCode[i]](i);
  }
  if (!blockCode) return count;
  return count + (count > 0 ? compile(blockCode) : 0);
}
*/

const compile = (code) => {
  const decode = (cd, lastCount = 0) => {
    let count = lastCount;
    let safeCount = null;

    const operations = {
      '+': () => { count += 1; },
      '*': () => { count *= 2; },
      '-': () => { count -= 1; },
      '%': (i) => { safeCount = i; },
    };

    for (let i = 0; i < cd.length; i += 1) {
      if (cd[i] === '<') {
        if (safeCount) i = safeCount;
        safeCount = null;
      } else operations[cd[i]](i);
    }

    return count;
  };
  let count = 0;
  let respuesta = code;
  if (respuesta.indexOf('¿') === -1) return decode(respuesta);
  while (respuesta.indexOf('¿') !== -1) {
    let start = -1;
    let end = -1;
    for (let i = 0; i < respuesta.length; i += 1) {
      if (respuesta[i] === '¿') start = i;
      if (respuesta[i] === '?') {
        end = i;
        break;
      }
    }
    count = decode(respuesta.substring(0, start), count);
    if (count > 0) count = decode(respuesta.substring(start + 1, end), count);
    respuesta = respuesta.substring(end + 1);
  }

  return count;
};

console.log(compile('++¿+?¿+?¿+?'));

console.log(compile('++*-'));
console.log(compile('++%++<'));
console.log(compile('++<--'));
console.log(compile('++¿+?'));
console.log(compile('<<<<<<+<<<<<+%'));

console.log(compile('<%+¿++%++<?'));
console.log(compile('--¿+++?+++¿--?'));
console.log(compile('--¿+++?'));

console.log(compile('++%++<++¿*?'));
console.log(compile('++%++<'));
console.log(compile('++*¿-?'));
