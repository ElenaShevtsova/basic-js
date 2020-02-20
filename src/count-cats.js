module.exports = function countCats(backyard) {
  throw 'Not implemented';

  let number = 0;
  for (let j = 0; j < backyard.length; j++) {
    if (typeof (backyard[j]) === 'object') {
      for (let i = 0; i < backyard[j].length; i++) {
        if (backyard[j][i] === '^^') {
          number += 1;
        }
      }
    } else {
      if (backyard[j] === '^^') {
        number += 1;
      }
    }
  }
  return number;
};
