// DOCUMENT OBJECT MODEL (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

const href = window.location.href;

console.log(href);

//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

// WINDOW E DOCUMENT
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert("Isso é um alerta");
// alert("Isso é um alerta"); // Funciona

const h1Selector = document.querySelector("h1"); // Seleciona o primeiro h1
document.body; // Retorna o body

// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// NODE
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector("h1");

const h1Classes = h1Selector.classList;
console.log(h1Classes[1]);

h1Selector.addEventListener("click", function () {
  console.log("clicou em ", h1Selector.innerText);
});

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

// Outro exemplo

const paragrafo = document.querySelector("p");
const paragrafoClass = paragrafo.classList;

function callbackp() {
  console.log("clicou em ", paragrafo.innerText);
}

paragrafo.addEventListener("click", callbackp);

// titulo.addEventListener("click", callback);
// ativa a função callback ao click no titulo
