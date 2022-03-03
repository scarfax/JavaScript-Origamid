// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

//Escopo evita o conflito entre nomes.

//VARIÁVEL GLOBAL (ERRO)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// 'use strict' impede isso.

// ESCOPO DE FUNÇÃO (PAI)
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro2 = "Corcel";

function mostrarCarro2() {
  var frase = `Meu carro é um ${carro2}`;
  console.log(frase);
}

mostrarCarro2(); // Meu carro é um Corcel
console.log(carro2); // Corcel

//ESCOPO DE BLOCO
//Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if (true) {
  var carro3 = "Belina";
  console.log(carro3);
}
console.log(carro3); // Carro

if (true) {
  let carro4 = "Parati";
  console.log(carro4);
}
// console.log(carro4); // carro4 is not defined

// VAR VAZA O BLOCO
// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var carro5 = "Opala";
  console.log(carro5);
}
console.log(carro5); // undefined

// CONST E LET NO LUGAR DE VAR
// A partir de agora vamos utilizar apenas const e let para declarmos variáveis.

if (true) {
  const carro6 = "Monza";
  console.log(carro6);
}
// console.log(carro6); // erro, carro is not defined

// {} CRIA UM BLOCO
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro7 = "Variante";
  const ano = 2018;
}
console.log(carro7); // Variante
// console.log(ano); // erro ano is not defined

// FOR LOOP
// Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

// FOR LOOP COM LET
// Com o let evitamos que o número vaze.

let item = 100;

for (let item = 0; item < 10; item++) {
  console.log(`Número ${item}`);
}
console.log(item * 5); // 500 -> Não é afetado pelo que está no bloco

// CONST
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Dezembro";
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
// data = 'Janeiro'; // erro

// LET
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável
ano = 2020;
console.log(ano);
//Geralmente vamos utilizar o const.
