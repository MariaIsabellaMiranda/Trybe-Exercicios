const readline = require('readline-sync');

const sorteio = (num) => {
  const numeroAleatorio =  Math.floor(Math.random() * (10 + 1));
  if (numeroAleatorio !== num) {
    return `Opa, não foi dessa vez. O número era ${numeroAleatorio}`;
  }
    return 'Parabéns, número correto!';
};

const jogarNovamente = () => {
  const jogar = readline.question('Deseja jogar novamente (s/n)? ');
  if (jogar === 's') {
    return main();
  }
  if (jogar === 'n') {
    return;
  }
    console.log('Digite a resposta correspondente (s/n)');
    return jogarNovamente();
};

const main = () => {
  const numEscolhido = readline.questionInt('Qual número você acha que estou pensando, de 0 a 10? ');
  console.log(sorteio(numEscolhido));
  return console.log(jogarNovamente());
};

module.exports = main;