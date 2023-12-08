const decode = (msg) => {
  let respuesta = msg;
  while (respuesta.indexOf('(') !== -1) {
    console.log(respuesta);
    let start = -1;
    let end = -1;
    for (let i = 0; i < respuesta.length; i += 1) {
      if (respuesta[i] === '(') start = i;
      if (respuesta[i] === ')') {
        end = i;
        break;
      }
    }
    respuesta = respuesta.substring(0, start)
      + respuesta.substring(start + 1, end).split('').reverse().join('')
      + respuesta.substring(end + 1);
  }

  return respuesta;
};

console.log(decode('sa(u(cla)atn)s'));
// a(bedcf)gh
// afcdebgh
