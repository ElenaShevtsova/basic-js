module.exports = function countCats(backyard) {
  // throw 'Not implemented';
  let number = 0;
  if (!backyard) {
    return false;
  } else if (backyard.length === 0) {
    return 0;
  } else {
    backyard.forEach(item => {
      if (typeof item === 'object') {
        item.forEach(i => {
          if (i === "^^") {
            number += 1;
          } else return false;
        })
      } else {
        if (item === "^^") {
          number += 1;
        } else return false;
      }
    })
  }
  return number;
};
