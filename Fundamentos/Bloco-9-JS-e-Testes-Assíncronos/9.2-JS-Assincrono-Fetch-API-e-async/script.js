// Exercício 1:

// const API_URL = 'https://icanhazdadjoke.com/';

// const h2 = document.querySelector('#jokeContainer')

// const fetchJoke = async () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };
//   try {
//   const response = await fetch(API_URL, myObject);
//   const data = await response.json();
//   h2.innerText = data.joke;
//   } catch (error) {
//     console.log(error);
//   }
// };

// window.onload = () => fetchJoke();


// Exercício 2:

// const appendList = (data) => {
//   const ul = document.querySelector('#lista');
//   const li = document.createElement('li');
//   li.innerHTML = data;
//   ul.appendChild(li);
// };

// const criaListaCrypto = (data) => {
//   const moedaObj = data.filter((element) => element.rank <= 10);
//   moedaObj.forEach((elementFor) => {
//     const { name, symbol, priceUsd } = elementFor
//     const crypto = `${name} (${symbol}): ${priceUsd}`;
//     appendList(crypto);
//   });
// };

// const urlApi = `https://api.coincap.io/v2/assets`;

// const getApiArray = async () => {
//   try {
//   const response = await fetch(urlApi);
//   const data = await response.json();
//   const arrayData = data.data;
//   criaListaCrypto(arrayData);
// } catch (erro) {
//   console.log(erro);
// }
// };

// getApiArray();