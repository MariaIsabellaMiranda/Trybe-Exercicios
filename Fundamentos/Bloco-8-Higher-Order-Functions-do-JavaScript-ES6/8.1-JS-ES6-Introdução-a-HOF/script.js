// Para Fixar:

// const acordar = () => 'Acordando!!';
// const cafe = () => 'Bora tomar café!!!';
// const dormir = () => 'Partiu dormir!!';

// const doingThings = (func) => console.log(func());

// doingThings(dormir)


// Exercício - 1:

// const novoUsuario = (nome) => {
//   const email = nome.toLowerCase().split(' ').join('_');
//   const nomeEmail = {
//     nomeCompleto: nome,
//     email: `${email}@trybe.com`
//   };
//   return nomeEmail;
// }

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback ('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback ('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback ('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   };
//   return employees;
// };

// console.log(newEmployees(novoUsuario));


// Exercício - 2:

// const comparaSorteio = (aposta, sorteado) => {
//   const comparacao = aposta === sorteado ?`Parabéns você ganhou`:`Tente novamente`;
//   return comparacao;
// }

// const sorteio = (aposta, callback) => {
//   const sorteado = parseInt((Math.random() * 5) + 1);
//   const result = callback(aposta, sorteado);

//   return result;
// }


// Exercício 3:

const verificacao = (gabarito, resposta) => {
  let pontuacao = 0;
  let respostasCertas = 0;
  for (i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === resposta[i]) {
      respostasCertas += 1;
      pontuacao += 1;
    } else if (gabarito[i] !== resposta[i] && resposta[i] !== 'N.A' ) {
      pontuacao -= 0.5;
    }
  }
  return pontuacao;
}

const checaProva = (gabarito, respostas, callback) => {
  callback(gabarito, respostas)
  return total;
}

console.log(checaProva(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], verificacao));