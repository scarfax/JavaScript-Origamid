//ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // Switch
videoGames[2]; // Xbox

console.log(videoGames[1]);

// Acesse um elemento da array utilizando [n]

// MÉTODOS E PROPRIEDADES DE UMA ARRAY

var videoGames = ["Switch", "PS4", "XBox"];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final da array
videoGames.length; // 3

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

// FOR LOOP
// Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console

// WHILE LOOP
var i = 10;
while (i <= 20) {
  console.log(i);
  i = i + 2;
}
// Retorna de 0 a 9 no console
// O for loop é o mais comum

// ARRAYS E LOOPS
// O for loop é o mais comum

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

let madruga = ["Sergio", "Giovane", "Lenon", "Ellen", "Mallu", "Andressa"];
for (let item = 0; item < madruga.length; item++) {
  console.log(madruga[item]);
}

// BREAK
// O loop irá parar caso encontro e palavra break

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "XBox") {
    break;
  }
}

// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

let cachorro = ["Beagle", "Trazan", "Jimmy", "Sorato"];
cachorro.forEach(function (item) {
  console.log(item);
});

let frutas = ["maçã", "pera", "ameixa", "banana"];
frutas.forEach(function (dado, index) {
  console.log(dado, index);
});

// O argumento item será atribuído dinamicamente
// Podemos passar os seguintes parâmetros item, index e array

// NÃO SE CONFUNDA COM A SINTAXE

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
// Não aconselho escrever da forma acima, mas funciona normalmente.
