function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  return newStr;
}

module.exports = {
  capitalizeFirstChar,
  reverseString,
};
