>>>>>>>>>>>> Exercício 1 <<<<<<<<<<<

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (i =0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }
// ou 
for (let todosNumeros of numbers) {
    console.log(todosNumeros);
}


>>>>>>>>>>>> Exercício 2 <<<<<<<<<<<

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (i =0; i < numbers.length; i += 1) {
    soma = (numbers[i] + soma);
}
console.log(soma);


// >>>>>>>>>>>> Exercício 3 <<<<<<<<<<<

let media = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i =0; i < numbers.length; i += 1) {
     media += numbers[i]
}

console.log(media / numbers.length);


// // >>>>>>>>>>>> Exercício 4 (Usar com o exercício 3) <<<<<<<<<<<

if (media > 20) {
    console.log('Valor maior que 20.')
}   else {
    console.log('Valor menor ou igual a 20.')
}


>>>>>>>>>>>> Exercício 5 <<<<<<<<<<<

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMaior = [0];

for (i = 1; i < numbers.length; i +=1) {
    if (valorMaior < numbers[i]) {
        valorMaior = numbers[i]
    }
}
console.log(valorMaior);


>>>>>>>>>>>> Exercício 6 <<<<<<<<<<<

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (i = 0; i < numbers.length; i +=1) {
    if (numbers[i] % 2 != 0) {
        resultado += 1;
    } else {
    }
}

if (resultado === 0) {
    console.log('Nenhum valor ímpar encontrado.');
} else {
    console.log(resultado);
}  

>>>>>>>>>>>> Exercício 7 <<<<<<<<<<<

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMenor = numbers[0];

for (i = 1; i < numbers.length; i +=1) {
    if (numbers[i] < valorMenor) {
        valorMenor = numbers[i];
    } else {
    }
}
 console.log(valorMenor);


>>>>>>>>>>>> Exercício 8 <<<<<<<<<<<

let array = [];

for (let i = 1; i <= 25; i += 1) {
 array.push(i)   
}

console.log(array);


>>>>>>>>>>>> Exercício 9 <<<<<<<<<<<

let result = 0;

for (index = 0; index < array.length; index += 1) {
    result = (array[index] / 2);
    console.log(result);
}