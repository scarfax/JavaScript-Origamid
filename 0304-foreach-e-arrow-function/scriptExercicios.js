// Mostre no console cada parágrado do site

const paragrafo = document.querySelectorAll("p");

paragrafo.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console

paragrafo.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const image = document.querySelectorAll("img");

image.forEach((item, index) => {
  console.log(item, index);
});

let a = 0;
image.forEach(() => {
  console.log(a++);
});

image.forEach(() => a++);
console.log(a);
