// Crie uma função para verificar se um valor é Truthy

function isTruty(valor) {
  return !!valor;
}

console.log(isTruty(""));

// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lados) {
  return lados * 4;
}

console.log(quadrado(5));

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome

function meuNome(nome, sobrenome) {
  return nome + " " + sobrenome;
}

console.log(meuNome("Sérgio", "Campos"));

// Crie uma função que verifica se um número é par

function verificaPar(numero) {
  if (numero % 2 === 0) {
    console.log("É par");
  } else {
    console.log("É impar");
  }
}

verificaPar(233);

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}

console.log(tipoDeDado("A"));

// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer.

addEventListener("click", function () {
  console.log("Sérgio Campos Mesquita");
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

var totalPaises = 193;
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
