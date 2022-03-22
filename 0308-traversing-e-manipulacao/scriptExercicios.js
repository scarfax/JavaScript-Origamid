// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
const firstDt = faq.querySelector("dt");
console.log(firstDt);

// Selecione o DD referente ao primeiro DT

const nextDD = firstDt.nextElementSibling;
console.log(nextDD);

// Substitua o conteúdo html de .faq pelo de .animais

const animals = document.querySelector(".animais");

faq.innerHTML = animals.innerHTML;
