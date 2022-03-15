// Para Fixar: 1

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const terceiroObj = {
//   ...user,
//   ...jobInfos,
// }
// console.log(terceiroObj);


// Para Fixar: 2

// const chvesUsadas = ({name, age, nationality}, {profession, squadInitials, squad}) => {
//   console.log(`Olá, meu nome é ${name}, tenho ${age} e sou ${nationality}. Trabalho com ${profession} e minha especialidade é ${squadInitials}-${squad}. `);
// }

// chvesUsadas(user, jobInfos)


// Para Fixar: 3

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao, funcao] = saudacoes;
// funcao(saudacao);


// Para Fixar: 4

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida, animal, bebida] = ['arroz', 'gato', 'água']
// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


// Para Fixar: 5

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo


// Para Fixar: 6

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


// Para Fixar: 7

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));


// Para Fixar: 8

const multiply = (number, value = 2) => {
  return number * value;
};

console.log(multiply(8));