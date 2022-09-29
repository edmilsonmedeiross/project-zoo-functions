const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    console.log('foi');
    return employees.filter((person) => person.managers.some((id) => id.includes(managerId)))
      .map((person) => `${person.firstName} ${person.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

/* console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83')); */

module.exports = { isManager, getRelatedEmployees };
