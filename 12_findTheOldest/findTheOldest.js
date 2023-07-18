const findTheOldest = function (peopleArray) {
  return peopleArray.reduce((currentOldest, currentPerson) => {
    const oldestAge = getAge(
      currentOldest.yearOfBirth,
      currentOldest.yearOfDeath
    );
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : currentOldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;
