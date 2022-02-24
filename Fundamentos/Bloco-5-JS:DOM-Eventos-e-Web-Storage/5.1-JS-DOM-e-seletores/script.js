
//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function mudaTexto() {
  let mudaTextoP = document.querySelectorAll('p');
  mudaTextoP[1].innerText = 'Vou ter um bom emprego, minha casinha e sossego para aproveitar com minha família.'
}
mudaTexto();


function mudaCorTrybe() {
  let corTrybe = document.querySelector('.main-content');
  corTrybe.style.background  = 'rgb(76,164,109)';
}
mudaCorTrybe();


function mudaCorQuadrado() {
  let quadrado = document.querySelector('.center-content');
  quadrado.style.background = 'white';
}
mudaCorQuadrado();


function corrigeTexto() {
  let textoH1 = document.querySelector('h1');
  textoH1.innerText = 'Exercício 5.1 - JavaEscripit';
}
corrigeTexto();


function deixaMaiusculo() {
  let convertText = document.querySelector('p');
  convertText.innerText = convertText.innerText.toUpperCase();
}
deixaMaiusculo();


function exibeP() {
  let mostra = document.querySelectorAll('p');
  for (let index = 0; index < mostra.length; index += 1) {
    console.log(mostra[index].innerText );
    }
}
exibeP();