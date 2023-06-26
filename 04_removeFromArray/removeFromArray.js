const removeFromArray = function (array, ...toRemove) {
  //
  let modifiedArray = [...array];
  for (i = 0; i < toRemove.length; i++) {
    if (modifiedArray.includes(toRemove[i])) {
      modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1);
    }
  }
  console.log(modifiedArray);
  return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
