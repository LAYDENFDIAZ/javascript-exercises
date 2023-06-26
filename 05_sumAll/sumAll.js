const sumAll = function (x, y) {
  // add current number to previous number
  if (x < 0 || y < 0) {
    console.log("ERROR");
    return "ERROR";
  } else if (
    isNaN(x) ||
    isNaN(y) ||
    typeof x != "number" ||
    typeof y != "number"
  ) {
    return "ERROR";
  }

  if (x > 0 && y > 0 && typeof x === "number" && typeof y == "number") {
    valorX = x;
    valorY = y;
    let sumOfAll = 0;

    if (x < y) {
      for (let i = valorX; i <= valorY; i++) {
        sumOfAll += i;
      }
      return sumOfAll;
    } else if (y < x) {
      for (let i = valorY; i <= valorX; i++) {
        sumOfAll += i;
      }
      return sumOfAll;
    }
  }
};
//let previousNumber = floorNumber + 1;

// Do not edit below this line
module.exports = sumAll;
