const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const entrants1 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countChild = (array) => {
  if (!array) return 0;
  return array.filter((age) => age.age < 18).length;
};

const countAdult = (array) => {
  if (!array) return 0;
  return array.filter((person) =>
    person.age >= 18 && person.age < 50).length;
};

const countSenior = (array) => {
  if (!array) return 0;
  return array.filter((person) => person.age >= 50).length;
};

/* console.log(countChild(entrants)); */

function countEntrants(array) {
  return { child: countChild(array), adult: countAdult(array), senior: countSenior(array) };
}

/* console.log(countEntrants(entrants)); */

function calculateEntry(arr = 0) {
  if (!arr.length) return 0;
  const priceChild = countEntrants(arr).child * prices.child;
  const priceAdult = countEntrants(arr).adult * prices.adult;
  const priceSenior = countEntrants(arr).senior * prices.senior;

  return priceAdult + priceChild + priceSenior;
}

/* console.log(calculateEntry()); */

module.exports = { calculateEntry, countEntrants };
