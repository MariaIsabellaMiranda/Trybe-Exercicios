const readline = require('readline-sync');

const calcVeloc = (distancia, tempo) => {
  const velocMedia = (distancia / tempo);
  return velocMedia.toFixed(2);
};

const main = () => {
  const distancia = readline.questionInt('Qual sua distância? ');
  const tempo = readline.questionInt('Qual sua tempo? ');

  return console.log(calcVeloc(distancia, tempo));
};

module.exports = main;