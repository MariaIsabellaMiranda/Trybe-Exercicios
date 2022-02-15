// >>>>>>>>>>>>>>>Exercício 1<<<<<<<<<<<<<<

// function verificaPalindromo(string) {
//   let palindromo = string.split('').reverse().join('')
//   if (palindromo === string) {
//     return true;
//   }else {
//    return false;
//   }
// }


// >>>>>>>>>>>>>>>Exercício 2<<<<<<<<<<<<<<

// function maiorInteiro(array) {
//  let numeroMaior = Math.max(...array);
//  for (let index in array) {
//    if (array[index] === numeroMaior) {
//      numeroMaior = index
//    }
//  }
//   return numeroMaior;
// }

// >>>>>>>>>>>>>>>Exercício 3<<<<<<<<<<<<<<

// function achaMaiorIndice(array) {
//  let numeroMaior = Math.min(...array);
//  for (let index in array) {
//    if (array[index] === numeroMaior) {
//      numeroMaior = index
//    }
//  }
//   return numeroMaior;
// }

// >>>>>>>>>>>>>>>Exercício 4<<<<<<<<<<<<<<

// function achaMaiorNome(array) {
//   let stringMaior = array[0];
//   for (let index in array) {
//     if (stringMaior.length < array[index].length) {
//       stringMaior = array[index];
//     }
//   }
//   return stringMaior;
// }

// >>>>>>>>>>>>>>>Exercício 5<<<<<<<<<<<<<<

// function queMaisRepete(array) {
//   let contRepete = 0;
//   let maiorRepete = 0;
//   for (let index in array) {
//     contRepete = 0;
//     for (let index2 in array) {
//       if (array[index] === array[index2]) {
//         contRepete += 1;
//       }
//     }
//     if (contRepete > maiorRepete) {
//       maiorRepete = array[index]
//     }
//   }

//   return maiorRepete;
// }

// >>>>>>>>>>>>>>>Exercício 6<<<<<<<<<<<<<<

// function somNumeros(Numero) {
//   let contador =0;
//   for (let index = 1; index <= Numero; index +=1) {
//     contador += index;
//   }
//   return contador;
// }

// >>>>>>>>>>>>>>>Exercício 7<<<<<<<<<<<<<<

// function verificaFimString(word, ending) {
//   let final = true;
//   let stringArray = ending.split('').reverse();
//   let stringMaior = word.split('').reverse();
//   for (let index in stringArray) {
//     if (stringArray[index] != stringMaior[index]) {
//       final = false;
//       return final;
//     }
//   }
//   return final
// }