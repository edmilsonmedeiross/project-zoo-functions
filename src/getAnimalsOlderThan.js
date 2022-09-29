const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((obj) => obj.name === animal)[0].residents
    .every((num) => num.age >= age);
}

/* console.log(getAnimalsOlderThan('lions', '8')); */

module.exports = getAnimalsOlderThan;
