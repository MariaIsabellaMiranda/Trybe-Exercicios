const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getBigger = (contador, number) => {
  if (number % 2 === 0) {
  contador + number
  }
 return contador;
}

const pares = numbers.reduce(getBigger, 0);
console.log(pares); // 85