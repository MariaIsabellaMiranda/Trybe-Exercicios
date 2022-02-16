let ondeEstou = document.querySelector("#elementoOndeVoceEsta");
let filhoOndeEstou = document.createElement('p');
ondeEstou.appendChild(filhoOndeEstou);
let filhoP = document.querySelector('p').innerText = 'Esse é meu garoto';

let paiDeOndeEstou = document.querySelector("#paiDoPai");
let irmaoDeOndeEstou = document.createElement('h1');
irmaoDeOndeEstou.innerText = 'Treinando a bessa';
irmaoDeOndeEstou.style.color = 'green'
paiDeOndeEstou.appendChild(irmaoDeOndeEstou);

let primeiroFilho = document.querySelector("#primeiroFilhoDoFilho");
let filhoDoPrimeiro = document.createElement('p');
filhoDoPrimeiro.innerText = '#VQV';
filhoDoPrimeiro.style.backgroundColor = 'yellow';
primeiroFilho.appendChild(filhoDoPrimeiro);

let acharTerceiro = filhoDoPrimeiro.parentElement.parentElement.nextElementSibling;

let pai = document.querySelectorAll('#pai');
for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    let percorreNósFilhos = pai.childNodes.length[index];
    if (percorreNósFilhos.id != 'elementoOndeVoceEsta') {
        percorreNósFilhos.remove();
    }
}
let segundoEUltimo = document.querySelector('#segundoEUltimoFilhoDoFilho');
segundoEUltimo.remove();
