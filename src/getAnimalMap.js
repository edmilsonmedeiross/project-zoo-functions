const { data, species } = require('../data/zoo_data');

const animalAnimal = (includeNames, sorted, sex) => {
  const objAnimal = species.find((specie) => specie.name === includeNames)
    .residents.filter((animal) => {
      if (sex) return animal.sex === sex;
      return animal;
    }).map((animal) => animal.name);
  if (sorted) return objAnimal.sort();
  return objAnimal;
};

/* console.log(animalAnimal({ includeNames: true })); */

const animalNames = (includeNames, sorted, sex) => {
  const regions = ['NE', 'NW', 'SE', 'SW'];

  return regions.reduce((acc, region) => {
    const aniNames = {};

    const regionSpecies = includeNames[region].map((specie) => {
      const newObj = {};
      newObj[specie] = animalAnimal(specie, sorted, sex);
      return newObj;
    });
    aniNames[region] = regionSpecies;

    return Object.assign(acc, aniNames);
  }, {});
};

const getAnimalMap = (options) => {
  const regions = ['NE', 'NW', 'SE', 'SW'];

  const includeNames = regions.reduce((acc, region) => {
    acc[region] = species.filter((specie) => specie.location === region)
      .map((specie) => specie.name);

    return acc;
  }, {});

  if (options && options.includeNames) {
    return animalNames(includeNames, options.sorted, options.sex);
  }
  return includeNames;
};

/* getAnimalMap();
 */
module.exports = getAnimalMap;
