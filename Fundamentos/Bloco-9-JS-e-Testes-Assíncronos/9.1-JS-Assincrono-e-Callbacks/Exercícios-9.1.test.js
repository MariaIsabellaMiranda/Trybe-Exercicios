// Exercício 7:

// const uppercase = require("./Exercícios-9.1");

// it('Verifica se callbak trasforma letras em maiúsculas', (done) => {
//   uppercase('teste', (str) => {
//     try {
//       expect(str).toBe('TESTE');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });


// Exercício 9:

// Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require("./Exercícios-9.1");

// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//     const expectedError = new Error('Não temos esse pokémon para você :(')

//     getPokemonDetails('Pickachu', (err, str) => {
//       try {
//       expect(err).toEqual(expectedError);
//       done();
//     } catch (err) {
//       done(err)
//     }
//   })
//   });

//   it("retorna um pokemon que existe no banco de dados", (done) => {
//     const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'

//     getPokemonDetails('Charmander', (err, str) => {
//       try {
//       expect(str).toBe(expectedString);
//       done();
//       } catch (err) {
//         done(err);
//       } 
//     })
//   });
// });

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });