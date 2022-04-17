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

// const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const respostasEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const verificacao = (gabarito, resposta) => {
//     if (gabarito === resposta) {
//       return 1;
//     } else if (resposta === 'N.A' ) {
//       return 0;
//     } else {
//       return -0.5
//     }
// };

// const checaProva = (gabarito, respostas, callback) => {
//   let pontuacao = 0;
//   for (i = 0; i < gabarito.length; i += 1) {
//     pontuacao += verificacao(gabarito[i], respostas[i]);
//   }
//   return `Pontuação final: ${pontuacao}`;
// }

// console.log(checaProva(gabarito, respostasEstudante, verificacao));

// Exercícios Bônus:

// const mage = {
//   healthPoints: 130,
//   intelligence: 45,
//   mana: 125,
//   damage: undefined,
// };

// const warrior = {
//   healthPoints: 200,
//   strength: 30,
//   weaponDmg: 2,
//   damage: undefined,
// };

// const dragon = {
//   healthPoints: 350,
//   strength: 50,
//   damage: undefined,
// };

// const battleMembers = { mage, warrior, dragon };