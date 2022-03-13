// Retorne no console todas as imagens do site

const allImages = document.querySelectorAll("img");
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imageName = document.querySelectorAll('[src^="img/imagem"]');
console.log(imageName);

// Selecione todos os links internos (onde o href começa com #)

const internalLinks = document.querySelectorAll('[href^="#"]');
console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firtH2 = document.querySelector(".animais-descricao h2");
console.log(firtH2);

// Selecione o último p do site
const paragraph = document.querySelectorAll("p");
console.log(paragraph[--paragraph.length]);
