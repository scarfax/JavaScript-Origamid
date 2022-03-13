// CLASSLIST
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

/*

const mymenu = document.querySelector(".menu");

// string
console.log(mymenu.className);
// lista de classes
console.log(mymenu.classList);
mymenu.classList.add("ativo");
mymenu.classList.add("ativo", "mobile"); // duas classes
mymenu.classList.remove("azul");
mymenu.classList.toggle("ativo"); // adiciona/remove a classe
mymenu.classList.contains("ativo"); // true ou false
mymenu.classList.replace("ativo", "inativo");

if (mymenu.classList.contains("azul")) {
  mymenu.classList.add("possui-azul");
} else {
  mymenu.classList.add("nao-possui-azul");
}

*/

// ATTRIBUTES
// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

console.log(animais);
console.log(animais.attributes);
console.log(animais.attributes.class);
console.log(animais.attributes[1]);

// GETATTRIBUTE E SETATTRIBUTE
// Métodos que retornam ou definem de acordo com o atributo selecionado
// É muito comum métodos de get e set;

const img = document.querySelector("img");

console.log(img.getAttribute("alt")); // valor do src

img.setAttribute("alt", "Texto Alternativo"); // muda o alt

console.log(img.getAttribute("alt")); // valor do src alterado pelo atributo acima

console.log(img.hasAttribute("id")); // true / false

img.removeAttribute("alt"); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

// READ ONLY VS WRITABLE
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animals = document.querySelector(".animais");

console.log(animals.className); // string com o nome das classes
animals.className = "azul"; // substitui completamente a string
animals.className += " vermelho"; // adiciona vermelho à string

animals.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''
