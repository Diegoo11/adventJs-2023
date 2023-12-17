function transformTree(tree) {
  if (tree.length === 0) return null;
  const generateTree = (direcction, floor) => {
    const currentCount = parseInt(direcction, 2) + (2 ** floor) - 1;
    if (currentCount >= tree.length) return null;
    if (tree[currentCount] === null) return null;
    return ({
      value: tree[currentCount],
      left: generateTree(`${direcction}0`, floor + 1),
      right: generateTree(`${direcction}1`, floor + 1),
    });
  };

  const treeObj = {
    value: tree[0],
    left: generateTree('0', 1),
    right: generateTree('1', 1),
  };

  return treeObj;
}
console.log(transformTree([]));
console.log(JSON.stringify(transformTree([1, 2, 3, 4, 5]), null, 2));
// console.log(transformTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
/* console.log(
  JSON.stringify(
    transformTree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
    null,
    2,
  ),
);

// var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
// var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']

// 2 4 8 16

// 0 2-1 | 2-1 4-1 | 4-1 8-1 | 8-1 16-1 | 16-1 32-1 | 32-1 64-1 |

// 0 1 | 1 3 | 3 7 | 7 15 | 15 31 | 31 63 | 63 127 | 127 255 |

/*
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
*/
