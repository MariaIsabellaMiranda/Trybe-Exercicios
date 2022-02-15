// >>>>>>>>>>>>>> Exercício 1 <<<<<<<<<<<<<<

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log('Bem-vinda ' + info.personagem);


// >>>>>>>>>>>>>> Exercício 2 <<<<<<<<<<<<<<

// info['recorrent'] = 'Sim';
// console.log(info);


// >>>>>>>>>>>>>> Exercício 3 <<<<<<<<<<<<<<

// for (let index in info) {
//     console.log(index);
// };


// >>>>>>>>>>>>>> Exercício 4 <<<<<<<<<<<<<<

// for (let index in info) {
//     console.log(info[index]);
// };


// >>>>>>>>>>>>>> Exercício 5 <<<<<<<<<<<<<<

// let segundoObjeto = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrent: 'Sim'
//   };

// for (let index in info) {
//   if (index === 'recorrent' && info[index] === segundoObjeto[index]) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[index] + ' e ' + segundoObjeto[index])
//   }
// };


// >>>>>>>>>>>>>> Exercício 6 <<<<<<<<<<<<<<

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '"');


// >>>>>>>>>>>>>> Exercício 7 <<<<<<<<<<<<<<

// leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }
// );
// console.log(leitor);


// >>>>>>>>>>>>>> Exercício 8 <<<<<<<<<<<<<<

// console.log('"' + leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos' + '".');