const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let array = [];
  for (let i = 0; i < letters[0].length; i++) {
    array.push(letters.map((array) => array[i]));
  }

  const verticalJoin = array.map((ls) => ls.join(""));
  //console.log(verticalJoin);
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
