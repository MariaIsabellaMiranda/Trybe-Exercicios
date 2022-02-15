// >>>>>>>>>>>>>>>>>>Exercício Bônus 1<<<<<<<<<<<<<<<<<<

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let index2 = 0; index2 < index; index2 += 1) {
//     if (numbers[index] < numbers[index2]) {
//         let position = numbers[index];
//         numbers[index] = numbers[index2];   
//         numbers[index2] = position;
//     }

//   }
// }
// console.log(numbers);


// >>>>>>>>>>>>>>>>>>Exercício Bônus 2<<<<<<<<<<<<<<<<<<

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let index2 = 0; index2 < index; index2 += 1) {
//     if (numbers[index] > numbers[index2]) {
//         let position = numbers[index];
//         numbers[index] = numbers[index2];   
//         numbers[index2] = position;
//     }

//   }
// }
// console.log(numbers);

// >>>>>>>>>>>>>>>>>>Exercício Bônus 3<<<<<<<<<<<<<<<<<<

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let novoArray = [];
// for (let index = 1; index < numbers.length; index += 1) {
//   for(let index2 = index - 1; index2 != index; index2 += 1) {
//       novoArray.push((numbers[index2] * numbers[index]));
//       if (index === numbers.length - 1) {
//         novoArray.push(((numbers[index] * 2)));
//     }
    
//   }
// }
// console.log(novoArray);