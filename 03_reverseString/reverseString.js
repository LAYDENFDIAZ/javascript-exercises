const reverseString = function (str) {
  let splitString = str.split("");
  console.log(splitString);
  let reverseArray = splitString.reverse();

  let reversedString = reverseArray.join("");
  console.log(reversedString);
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
