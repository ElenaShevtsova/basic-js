module.exports = function createDreamTeam(members) {
  if (!members || typeof members === 'number') {
    return false;
  } else {
    let array = [];
    let newArr = [];

    for (let j = 0; j < members.length; j++) {
      if (typeof members[j] === 'string') {
        let string = members[j].trim().toUpperCase();
        let y = array.push(string);
      }

    }
    let sortMembers = array.sort();

    for (let i = 0; i < sortMembers.length; i++) {

      let letter = sortMembers[i].charAt(0);
      newArr.push(letter);
    }
    return newArr.join('');
  }

};