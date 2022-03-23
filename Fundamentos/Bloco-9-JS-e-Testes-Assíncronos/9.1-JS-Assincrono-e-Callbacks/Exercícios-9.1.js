// Exercício 1:

const { createTestScheduler } = require("jest")

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C


// Exercício 2: 

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // C
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // B


// Exercício 3:

// const getPlanet = () => {
//   setTimeout(() => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     console.log("Returned planet: ", mars);
//   }, 4000);
// };

// getPlanet(); // imprime Marte depois de 4 segundos


// Exercício 4:

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = () => {
//   setTimeout(() => {
//     console.log(`"Mars temperature is: ${getMarsTemperature()} degree Celsius"`);
//   }, messageDelay());
// }

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


// Exercício 5:

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback) => {
//   setTimeout(() => {
//     callback(getMarsTemperature());
//   }, messageDelay());
// };

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo


// Exercício 6:

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);
 
// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback, erro) => {
//   const chance = Math.random() >= 0.6;
//   setTimeout(() => {
//     if (chance) {
//     callback(getMarsTemperature());
//     } else {
//       handleError('Robot is busy');
//     }
//   }, messageDelay());
// };


// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);


// Exercício 7:

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// module.exports = uppercase;



// Exercício 8:

// const pokemons = [
//   {
//     name: 'Bulbasaur',
//     type: 'Grass',
//     ability: 'Razor Leaf',
//   },
//   {
//     name: 'Charmander',
//     type: 'Fire',
//     ability: 'Ember',
//   },
//   {
//     name: 'Squirtle',
//     type: 'Water',
//     ability: 'Water Gun',
//   },
// ];

// function getPokemonDetails(filter, callback) {
//   setTimeout(() => {
//     if (pokemons.find((element) => element.name === filter) === undefined) {
//       return callback(new Error('Não temos esse pokémon para você :('), null);
//     }
//     const pokemon = pokemons.find((element) => element.name === filter); //Mudei para ficar mais fácil, antes era só: pokemons.find(filter) e o escopo da função eu montava no próprio parâmetro.

//     const { name, type, ability } = pokemon;

//     const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

//     callback(null, messageFromProfOak);
//   }, 2000);
// };

// const callback = (err, str) => {
//   if (err === null) {
//     console.log(str);
//   } else {
//     console.log(err);
//   }
// };

// // Antes eu montava a função do finder no próprio parâmetro = getPokemonDetails((element) => element.name === 'Charmander', callback)...
// // getPokemonDetails('Charmander', callback);

// module.exports = {
//   getPokemonDetails,
// };


// Exercício 9:

// const pokemons = [
//   {
//     name: 'Bulbasaur',
//     type: 'Grass',
//     ability: 'Razor Leaf',
//   },
//   {
//     name: 'Charmander',
//     type: 'Fire',
//     ability: 'Ember',
//   },
//   {
//     name: 'Squirtle',
//     type: 'Water',
//     ability: 'Water Gun',
//   },
// ];

// function getPokemonDetails(filter, callback) {
//   setTimeout(() => {
//     if (pokemons.find((element) => element.name === filter) === undefined) {
//       return callback(new Error('Não temos esse pokémon para você :('), null);
//     }
//     const pokemon = pokemons.find((element) => element.name === filter); //Mudei para ficar mais fácil, antes era só: pokemons.find(filter) e o escopo da função eu montava no próprio parâmetro.

//     const { name, type, ability } = pokemon;

//     const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

//     callback(null, messageFromProfOak);
//   }, 2000);
// };

// const callback = (err, str) => {
//   if (err === null) {
//     console.log(str);
//   } else {
//     console.log(err);
//   }
// };

// // Antes eu montava a função do finder no próprio parâmetro = getPokemonDetails((element) => element.name === 'Charmander', callback)...
// // getPokemonDetails('Charmander', callback);

// module.exports = {
//   getPokemonDetails,
// };


// Exercício 10:

// Na pasta de Testes...