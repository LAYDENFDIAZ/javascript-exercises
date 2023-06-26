const repeatString = function (str, howManyItterations) {
  let resultStr = "";

  for (let i = 0; i < howManyItterations; i++) {
    resultStr += str;
  }

  if (howManyItterations < 0) {
    return "ERROR";
  } else {
    return resultStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
