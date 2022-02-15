// >>>>>>>>>>>>>>>>>Exercício 1<<<<<<<<<<<<<<<<<

// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }
// console.log(fatorial)


// >>>>>>>>>>>>>>>>>Exercício 2<<<<<<<<<<<<<<<<<

// let palavraInvertida = "";
// let word = 'tryber';
// for (let index = word.length - 1; index >= 0; index -= 1) {
//   palavraInvertida += word[index];
// }
// console.log(palavraInvertida);


// >>>>>>>>>>>>>>>>>Exercício 3<<<<<<<<<<<<<<<<<

// Retorne a maior palavra:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maiorPalavra.length) {
//     maiorPalavra = array[index];
//   }
// }
// console.log(maiorPalavra);

// // Retorne a menor palavra:
// let menorPalavra = array[0];
// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < menorPalavra.length) {
//     menorPalavra = array[index];
//   }
// }
// console.log(menorPalavra);


// >>>>>>>>>>>>>>>>>Exercício 4<<<<<<<<<<<<<<<<<

// let maiorPrimo = 0;

// for (let index = 0; index <= 50; index += 1) {
//   let primo = true;
//   for (let index2 = 2; index2 < index; index2 += 1) {
//     if (index % index2 === 0) {
//       primo = false;
//     }
//   }
//   if (primo) {
//     maiorPrimo = index;
//   }
// }

// console.log(maiorPrimo);