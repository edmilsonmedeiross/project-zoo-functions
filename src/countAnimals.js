const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// conta os animais e as quantidades se nao for passado nenhum parametro
const objCountAnimals = species.reduce((acc, animal) => {
  /* return console.log('acumulador' + ' ' + acc + ' ' + 'current' + ' ' + specie) */
  acc[animal.name] = animal.residents.length;
  return acc;
}, {});

// acha o objeto correspondente ao parametro e faz um reduce para contar quantidade do sexo atribuido como parametro
const quantiAnimalsSex = (animal) => {
  const guardObjAnimal = species.find((obj) =>
    obj.name === animal.specie).residents;
  const animalsZoo = guardObjAnimal.reduce((acc, type) =>
    ((type.sex === animal.sex) ? (acc + 1) : (acc)), 0);
  return animalsZoo;
};

// conta quantos residentes da especie atribuida como parametro
const qtdResident = (animal) => species.reduce((acc, resid) => ((resid.name === animal.specie)
  ? (resid.residents) : (acc)), 0).length;

/* console.log(objCountAnimals); */

function countAnimals(animal) {
  if (!animal) {
    return objCountAnimals;
  }
  if (Object.values(animal).length === 1) {
    return qtdResident(animal);
  }
  return quantiAnimalsSex(animal);
}

/* console.log(countAnimals({ specie: 'penguins' })); */

module.exports = countAnimals;
