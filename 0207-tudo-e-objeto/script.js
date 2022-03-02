// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = "Calopsita";

console.log(nome.length); // quantidade de letras do nome
console.log(nome.charAt(4)); // exibe a letra indicada no () começa com 0
console.log(nome.replace("ita", "ova")); // substitui o primeiro "" pelo segundo ""
console.log(nome); // Exibe a variavel

// Uma string herda propriedades e métodos do construtor String()

// NÚMEROS
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

var altura = 1.78;

console.log(altura.toString()); // transforma o numero em string
console.log(altura.toFixed()); //  arredonda

// FUNÇÕES

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

// ELEMENTOS DO DOM
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});
