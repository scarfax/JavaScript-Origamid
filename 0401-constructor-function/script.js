// - OBJETOS
// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

/*

const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000; */

// carro, fiat e honda apontam para o mesmo objeto.

// - CONSTRUCTOR FUNCTIONS
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

function Carro() {
  this.marca = "Marca";
  this.preco = 0;
  this.ano = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;
honda.ano = 2020;

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;
fiat.ano = 2003;

const fusca = new Carro();
fusca.marca = "Fusca";
fusca.preco = 1000;
fusca.ano = 1979;

//Usar Pascal Case, ou seja, começar com letra maiúscula.

// NEW KEYWORD
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
/*
const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
 return honda = {
  marca: 'Marca',
  preco: 0,
} */

// PARÂMETROS E ARGUMENTOS
// Podemos passar argumentos que serão utilizados no momento da criação do objeto.

function Carro(marcaAtribuido, precoAtribuido, anoAtribuido) {
  this.marca = marcaAtribuido;
  this.preco = precoAtribuido;
  this.ano = anoAtribuido;
}

const gol = new Carro("Gol", 1600, 2001);
const opala = new Carro("Opala", 2400, 1984);

// - THIS KEYWORD
// O this faz referência ao próprio objeto construído com a Constructor Function.

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const parati = new Carro("Parati", 1500);

// EXEMPLO REAL
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add("ativo");
  },
};

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = "ul";
Dom.ativo(); // adiciona ativo ao ul

//LEMBRE-SE DE USAR PARÂMETROS

/*

function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function (classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom("ul");
lista.ativo("ativo");

const lastLi = new Dom("li:last-child");
lastLi.ativo("ativo"); 

*/
