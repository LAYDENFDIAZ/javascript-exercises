const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (numberArray) {
  let result = 0;
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
  }
  return result;
};

const multiply = function (...numArray) {
  let result = 1;
  for (let i = 0; i < numArray.length; i++) {
    result *= numArray[i];
    // console.log(result);
  }
  return result;
};

const power = function (multiple, power) {
  let result = multiple;
  for (let i = 1; i < power; i++) {
    result *= multiple;
    console.log(multiple);
  }
  return result;
};

const factorial = function (num) {
  let result = 1;

  if (num < 1) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    for (let i = num; i > 0; i--) {
      result *= i;
    }

    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
