const { data, employees, species } = require('../data/zoo_data');

/* const person = (obj) => employees.find((name) => obj.id === name.id || obj.name === name.firstName || obj.name === name.lastName);

const spec = (id) => species.filter((animal) => animal.id.includes(person().responsibleFor)); */

const employersInformation = employees.map((objeto) => {
  const obj = {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return obj;
});

function getEmployeesCoverage(name) {
  if (!name) return employersInformation;

  const parametered = employersInformation.find((person) =>
    person.fullName.includes(name.name) || person.id === name.id);

  if (!parametered) throw new Error('Informações inválidas');

  return parametered;
}

/* console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c' })); */
module.exports = getEmployeesCoverage;
