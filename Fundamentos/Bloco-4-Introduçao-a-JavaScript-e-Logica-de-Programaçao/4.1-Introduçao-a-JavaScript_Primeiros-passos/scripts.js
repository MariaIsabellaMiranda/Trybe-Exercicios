>>>>>>>>>> EXERCÍCIO - 1 <<<<<<<<<<<

const a = 5;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


>>>>>>>>>> EXERCÍCIO - 2 <<<<<<<<<<<

const c = 42;
const d = 22;

if (c > d) {
  console.log(c)
} else {
  console.log(d)
}


>>>>>>>>>> EXERCÍCIO - 3 <<<<<<<<<<< 

const numero1 = 84;
const numero2 = 32;
const numero3 = 18;

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1)
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2)
  } else {
    console.log(numero3)
  }


>>>>>>>>>> EXERCÍCIO - 4 <<<<<<<<<<<
const valor = 0;
if (valor > 0) {
  console.log('positive')
} else if (valor < 0) {
  console.log('negative')
}  else {
  console.log('zero')
}


>>>>>>>>>> EXERCÍCIO - 5 <<<<<<<<<<<
const angulo1 = 0;
const angulo2 = -70;
const angulo3 = 10;

let anguloTriangulo = (angulo1 + angulo2 + angulo3);

if (anguloTriangulo === 180) {
  console.log(true)
} else if (anguloTriangulo > 0 && anguloTriangulo < 180 || anguloTriangulo > 180) {
  console.log(false)
} else {
  console.log('Erro')
}


>>>>>>>>>> EXERCÍCIO - 6 <<<<<<<<<<<

let peçaXadrez = 'CAVALO';
let peçaXadrezValida = peçaXadrez.toLowerCase();

if (peçaXadrezValida === 'rainha') {
  console.log('Qualquer direção, quantas casas quiser')
} else if(peçaXadrezValida === 'rei') {
  console.log('Qualquer direção mas apenas uma casa')
} else if (peçaXadrezValida === 'bispo') {
  console.log('Diagonal')
} else if (peçaXadrezValida === 'torre') {
  console.log('Horizontal e Vertical')
} else if(peçaXadrezValida === 'cavalo') {
  console.log('Em L')
} else if(peçaXadrezValida === 'peão') {
  console.log('Uma casa pra frente, na primeira jogada pode ir duas porém só come na diagonal')
} else {
  console.log('Erro, essa peça é inválida!')
}


>>>>>>>>>> EXERCÍCIO - 7 <<<<<<<<<<<

const porcentagem = 100;

if (porcentagem >=90 && porcentagem <= 100) {
  console.log('A')
} else if (porcentagem < 90 && porcentagem >= 80) {
  console.log('B')
} else if (porcentagem < 80 && porcentagem >= 70) {
  console.log('C')
} else if (porcentagem < 70 && porcentagem >= 60) {
  console.log('D')
} else if (porcentagem < 60 && porcentagem >= 50) {
  console.log('E')
} else if (porcentagem < 50 && porcentagem >=0) {
  console.log('F')
} else if (porcentagem < 0 || porcentagem > 100) {
  console.log('Erro')
} else {
}

>>>>>>>>>> EXERCÍCIO - 8 <<<<<<<<<<<

const num1 = 11;
const num2 = 13;
const num3 = 22;

let resultado = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  resultado = true;
}
console.log(resultado);


>>>>>>>>>> EXERCÍCIO - 9 <<<<<<<<<<<
const num1 = 98;
const num2 = 40;
const num3 = 22;

let resultado = false;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
  resultado = true;
}
console.log(resultado);

>>>>>>>>>> EXERCÍCIO - 10 <<<<<<<<<<<

const custo = 10;
const venda = 15;

let imposto = (20 / 100 * custo);
let custoTotal = (custo + imposto);
let lucro = (venda - custoTotal);

if (custo >= 0 && venda >= 0) {
  console.log(lucro * 1000)
} else {
  console.log('Erro.')
}

>>>>>>>>>> EXERCÍCIO - 11 <<<<<<<<<<<

let salarioBruto = 3500;
let aliquotaInss = 0;
let salarioBase = 0;
let aliquotaIr = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
  aliquotaInss = (8 / 100) * salarioBruto
    salarioBase = salarioBruto - aliquotaInss
} else if ( salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaInss = (9 / 100) * salarioBruto
    salarioBase = salarioBruto - aliquotaInss
} else if ( salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquotaInss = (11 / 100) * salarioBruto
    salarioBase = salarioBruto - aliquotaInss
} else {
  aliquotaInss = (salarioBruto - 570.88)
  salarioBase = aliquotaInss
}

if (salarioBase <= 1903.98) {
  aliquotaIr = 0
  salarioLiquido = salarioBase
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  aliquotaIr = (7.5 / 100) * salarioBase - 142.80
  salarioLiquido = salarioBase - aliquotaIr
} else if (salarioBruto >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIr = (15 / 100) * salarioBase - 354.80
  salarioLiquido = salarioBase - aliquotaIr
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIr = (22.5 / 100) * salarioBase - 636.13
  salarioLiquido = salarioBase - aliquotaIr
} else {
  aliquotaIr = (27.5 / 100) * salarioBase - 869.36
  salarioLiquido = salarioBase - aliquotaIr
}

console.log(salarioLiquido);