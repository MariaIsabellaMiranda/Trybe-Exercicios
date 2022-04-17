const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const novaLista = (array1, array2) => {
  const result1 = array1.map((element, index) => ({element: array2[index]}))

console.log(novaLista(products, prices));