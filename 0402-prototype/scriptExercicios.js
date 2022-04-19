// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const fernando = new Pessoa("Fernando", "Mesquita", 38);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li;
console.log(li.constructor.name); // ("HTMLLIElement");

li.click;
console.log(li.click.constructor.name); // Function

li.innerText;
console.log(li.innerText.constructor.name); // String

li.value;
console.log(li.value.constructor.name); // Number

li.hidden;
console.log(li.hidden.constructor.name); // Boolean

li.offsetLeft;
console.log(li.offsetLeft.constructor.name); // Number

li.click();
console.log(li.click()); // undefined

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name); //String
