// >>>>>>>>>>>>>>>>>>Exercicio 1<<<<<<<<<<<<<<<<<<<

// let n = 5;
// for (let index = 0; index < n; index += 1) {
//   let lados = '';
//   for (let index2 = 0; index2 < n; index2 += 1) {
//   lados += '*'
//   }
//   console.log(lados);
// }


// >>>>>>>>>>>>>>>>>>Exercicio 2<<<<<<<<<<<<<<<<<<<

// let n = 5;
// let lados = '';
// for (let index = 0; index < n; index += 1) {
//   lados += '*'
//   console.log(lados);
// }


// >>>>>>>>>>>>>>>>>>Exercicio 3<<<<<<<<<<<<<<<<<<<

// let n = 5;
// let espacos = n;
// for (let index = 0; index < n; index += 1) {
//   let lados = '';
//   for (let index2 = 1; index2 <= n; index2 += 1) {
//     if (index2 < espacos) {
//       lados += ' ';
//     }else {
//       lados += '*'
//     }
//   }
//   console.log(lados);
//   espacos -= 1;
// }


// >>>>>>>>>>>>>>>>>>Exercicio 4<<<<<<<<<<<<<<<<<<<

// let n = 5;
// let meio = (n + 1) / 2;
// let espacosEsquerdo = meio;
// let espacoDireito = meio;
// for (let index = 0; index < meio; index += 1) {
//   let lados = '';
//   for (let index2 = 1; index2 <= n; index2 += 1) {
//     if (index2 >= espacosEsquerdo && index2 <= espacoDireito) {
//       lados += '*';
//     }else {
//       lados += ' '
//     }
//   }
//   console.log(lados);
//   espacosEsquerdo -= 1;
//   espacoDireito += 1
// }

// >>>>>>>>>>>>>>>>>>Exercicio 5<<<<<<<<<<<<<<<<<<<

// let n = 7;
// let meio = (n + 1) / 2;
// let espacosEsquerdo = meio;
// let espacoDireito = meio;
// for (let index = 1; index <= meio; index += 1) {
//   let lados = '';
//   for (let index2 = 1; index2 <= n; index2 += 1) {
//     if (index2 === espacosEsquerdo || index2 === espacoDireito || index === meio) {
//       lados += '*';
//     }else {
//       lados += ' '
//     }
//   }
//   espacosEsquerdo -= 1;
//   espacoDireito += 1
//   console.log(lados);
// }


// >>>>>>>>>>>>>>>>>>Exercicio 6<<<<<<<<<<<<<<<<<<<

let numerosPrimos = [];
let numeros = 25;
  for (index = 0; index <= numeros; index += 1) {
   let primo = true
    for (index2 = 2; index2 < index; index2 += 1) {
      if (index % index2 === 0){
        primo = false;
      }
    }
    if (primo) {
      numerosPrimos.push(index);
    }
  }
console.log(numerosPrimos);