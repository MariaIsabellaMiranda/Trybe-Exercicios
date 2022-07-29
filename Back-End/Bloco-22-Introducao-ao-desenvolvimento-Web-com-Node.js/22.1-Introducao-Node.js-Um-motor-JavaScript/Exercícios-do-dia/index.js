const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const main = () => {
  const qualScript = readline.question(
    `Digite o número do comando que queira executar? 
    1 - Calcular o imc;
    2 - Calcular velocidade do carro;
    3 - Quiz, qual número estou pensando.
    `
    );

  if (qualScript === '1') return imc();
  if (qualScript === '2') return velocidade();
  if (qualScript === '3') return sorteio();
  return console.log('Comando inválido. Saindo.');
};

main();