const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employer = employees.find((person) =>
    person.id === id).responsibleFor[0];
  const responsFor = species.find((animal) =>
    animal.id === employer).residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(responsFor);
}

/* console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); */
module.exports = getOldestFromFirstSpecies;
