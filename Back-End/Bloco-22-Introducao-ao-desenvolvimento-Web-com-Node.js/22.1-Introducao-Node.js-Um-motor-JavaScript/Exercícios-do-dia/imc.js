const readline = require('readline-sync');

const imc = (peso, altura) => {
  const alturaEmMetros = altura / 100;
  const calcImc = (peso / alturaEmMetros ** 2);
  return calcImc.toFixed(1);
};

const imcTable = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso(magreza)';
  } else if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso normal';
  } else if (imc >= 25.0 && imc <= 29.9) {
    return '	Acima do peso (sobrepeso)'
  } else if (imc >= 30.00 && imc <= 34.9) {
    return 'Obesidade grau I';
  } else if (imc >= 35.00 && imc <= 39.9) {
    return 'Obesidade grau II';
  } else if (imc >= 40.00) {
    return 'Obesidade graus III e IV';
  }
};


const main = () => {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.question('Qual sua altura? ');

  const resultImc = imc(peso, altura);
  console.log(resultImc);
  return console.log(imcTable(resultImc));
}

module.exports = main;