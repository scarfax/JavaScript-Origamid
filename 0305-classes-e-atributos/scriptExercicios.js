// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt

const images = document.querySelectorAll("img");

images.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu

const externalLink = document.querySelector("a[href^='http']");

externalLink.setAttribute("href", "http://www.uol.com.br");

console.log(externalLink);
