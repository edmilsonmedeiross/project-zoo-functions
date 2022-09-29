const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((animal) => ids.some((id) => animal.id === id));
// retorna o animal correspondente ao id ou ids se for verdadeiro.

/* console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46',
  'baa6e93a-f295-44e7-8f70-2bcdc6f6948d')); */

module.exports = getSpeciesByIds;
