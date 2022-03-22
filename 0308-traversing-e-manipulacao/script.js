// OUTERHTML, INNERHTML E INNERTEXT
// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

/*

const h1 = document.querySelector("h1");

const text = document.querySelector(".animais-descricao");

console.log(text.outerHTML); // todo o html do elemento
h1.innerHTML; // html interno
console.log(h1.innerText); // texto, sem tags

h1.innerText = "<p>Texto</p>"; // a tag vai como texto
h1.innerHTML = "<h1>Animais Perigosos</h1>"; // a tag é renderizada
text.outerHTML = "<p>apaga tudo</p>";

*/

// TRASVERSING
// Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector(".animais-lista");

console.log(lista.parentElement); // pai
console.log(lista.parentElement.parentElement); // pai do pai
console.log(lista.previousElementSibling); // elemento acima
console.log(lista.nextElementSibling); // elemento abaixo

console.log(lista.children); // HTMLCollection com os filhos
console.log(lista.children[0]); // primeiro filho
console.log(lista.children[--lista.children.length]); // último filho

console.log(lista.querySelectorAll("li")); // todas as LI's
console.log(lista.querySelector("li:last-child")); // último filho

// ELEMENT VS NODE
// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

const list = document.querySelector(".animais-lista");

console.log(list.previousElementSibling); // elemento acima
console.log(list.previousSibling); // node acima

console.log(list.firstChild); // primeiro node child
console.log(list.childNodes); // todos os node child

// - MANIPULANDO ELEMENTOS
// É possível mover elementos no dom com métodos de Node.

const indice = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

//contato.appendChild(indice); // appendChild - move lista para o final de contato
//contato.insertBefore(indice, titulo); // insertBefore - insere a lista antes de titulo
//contato.removeChild(titulo); // removeChild - remove titulo de contato
// contato.replaceChild(indice, titulo); // replaceChild - substitui titulo por lista

// NOVOS ELEMENTOS
// Podemos criar novos elementos com o método createElement()

const mapa = document.querySelector(".mapa");
const novoH1 = document.createElement("h1");

novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");

mapa.appendChild(novoH1);

// - CLONAR ELEMENTOS
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const title = document.querySelector("h1");
const faq = document.querySelector(".faq");
const newTitle = title.cloneNode(true);

faq.appendChild(newTitle); // clona o título e insere após o Faq
newTitle.classList.add("azul");

//true sinaliza para incluir os filhos
