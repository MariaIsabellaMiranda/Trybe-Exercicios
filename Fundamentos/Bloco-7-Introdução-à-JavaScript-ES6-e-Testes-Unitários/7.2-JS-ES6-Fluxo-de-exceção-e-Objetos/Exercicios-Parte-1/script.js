

function verificaNumeros(valorPego1, valorPego2) {
  if (valorPego1 === '' || valorPego2 === ''){
    throw new Error (`Preencha os dois campos`);
  }
  if (isNaN(valorPego1) || isNaN(valorPego2)) {
    throw new Error (`Preencha os dois campos com números!`)
  }
}

function sum() {
  const paragrafo = document.getElementById('result');
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verificaNumeros(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    paragrafo.innerHTML = `Resultado: ${result}`;
  } catch (error) {
    paragrafo.innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
