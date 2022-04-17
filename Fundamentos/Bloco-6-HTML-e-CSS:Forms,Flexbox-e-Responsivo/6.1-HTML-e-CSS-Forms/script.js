const button = document.querySelector('#botaoEnviar');
const enviarImagens = document.querySelector('#radio3')
const paiImagens = document.querySelector('#autorização');
const naoEnviarImagens = document.querySelector('#radio3-1');

button.addEventListener('click', function(event) {
  event.preventDefault();
});

enviarImagens.addEventListener('click', function(event) {
  if (event) {
    const criaBotaoImagem = document.createElement('input');
  paiImagens.appendChild(criaBotaoImagem);
  criaBotaoImagem.setAttribute('type', 'file');
  criaBotaoImagem.setAttribute('id', 'botaoImagem');
  }
  
});