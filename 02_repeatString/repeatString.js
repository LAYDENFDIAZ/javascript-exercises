const repeatString = function (str, howManyItterations) {
  let resultStr = "";
  for (let i = 0; i < howManyItterations; i++) {
    resultStr += str;
  }

  console.log(resultStr);

  if (str > 0) {
    return "ERROR";
  } else {
    return resultStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
