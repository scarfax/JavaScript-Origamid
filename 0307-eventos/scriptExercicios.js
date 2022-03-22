// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const internalLinks = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  internalLinks.forEach((links) => {
    links.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
  console.log(event);
}

internalLinks.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

 const allElements = document.querySelectorAll("body *");

function handleElement(event) {
  console.log(event.currentTarget);
}

allElements.forEach((element) => {
  element.addEventListener("click", handleElement);
}); 

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

 const allElements = document.querySelectorAll("body *");

function handleElement(event) {
  event.currentTarget.remove();
}

allElements.forEach((element) => {
  element.addEventListener("click", handleElement);
}); 

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyboard(event) {
  if (event.key === "t") {
    document.body.classList.toggle("fontsize");
  }
}

window.addEventListener("keydown", handleKeyboard);
