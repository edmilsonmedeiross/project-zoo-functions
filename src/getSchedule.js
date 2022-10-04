const { data, species, hours } = require('../data/zoo_data');

const week = Object.keys(hours);
/* console.log(week); */

const workLog = week.reduce((acc, chave) => {
  acc[chave] = {
    officeHour: `Open from ${hours[chave].open}am until ${hours[chave].close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes(chave)).map((specie) => specie.name),
  };
  return acc;
}, {});

workLog.Monday = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
};

console.log((workLog));

/* const ani = Object.entries(workLog); */
/* console.log(ani); */

/* const zzz = ani.find((dia) => dia.includes('Tuesday'));
console.log(zzz); */

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return workLog;

  const validate = species.some((animal) => animal.name === scheduleTarget); // valida se algum animal foi passado como parametro

  if (!week.includes(scheduleTarget) && !validate) return workLog;

  if (week.includes(scheduleTarget)) return { [scheduleTarget]: workLog[scheduleTarget] };

  return species.find((animali) => animali.name === scheduleTarget).availability;
}

/* console.log(getSchedule('supimpa')); */
module.exports = getSchedule;
