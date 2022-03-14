// HEIGHT E WIDTH
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const listaAnimais = document.querySelector(".animais-lista");

console.log(listaAnimais.clientHeight); // height + padding
console.log(listaAnimais.offsetHeight); // height + padding + border
console.log(listaAnimais.scrollHeight); // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth ...
console.log(listaAnimais.clientWidth);

// OFFSETTOP E OFFSETLEFT

const copyright = document.querySelector(".copy");

// Distância entre o topo do elemento e o topo da página
console.log(listaAnimais.offsetTop);
console.log(copyright.offsetTop);

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log(listaAnimais.offsetLeft);
console.log(copyright.offsetLeft);

// GETBOUNDINGCLIENTRECT()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const rect = copyright.getBoundingClientRect();
console.log(rect); // retorna todas as distâncias
console.log(rect.height); // height do elemento
console.log(rect.width); // width do elemento
console.log(rect.top); // distância entre o topo do elemento e o scroll

//WINDOW
//Utilize um media-querie como no CSS para verificar a largura do browser

console.log(window.innerWidth); // width do janela
console.log(window.outerWidth); // soma dev tools também

console.log(window.innerHeight); // height do janela
console.log(window.outerHeight); // soma a barra de endereço (pouco usado)

console.log(window.pageYOffset); // distância total do scroll vertical
console.log(window.pageXOffset); // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

// MATCHMEDIA();

// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Sua tela é menor que 600px");
} else {
  console.log("Sua tela é maior que 600px");
}
