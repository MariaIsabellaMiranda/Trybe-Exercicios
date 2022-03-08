const sum = require('./sum')

describe ('A função soma', () => {
  it('Testa se o retorno de 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('Testa se o retorno de 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('Testa se a função sum retorna erro quando dada uma string em um dos parâmetros', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })

  it('Testa se a mensagem de erro é "parameters must be numbers" quando colocada uma string em algum dos parâmetros', () => {
    expect(() => {sum(4, '5')}).toThrow("parameters must be numbers");
  })
})

