var nome = "André"; // String
console.log(typeof nome, nome);

var idade = 28; // Number
console.log(typeof idade, idade);

var possuiFaculdade = true; // Boolean
console.log(typeof possuiFaculdade, possuiFaculdade);

var time; // Undefined
console.log(typeof time, time);

var comida = null; // Null
console.log(typeof comida, comida);

var simbolo = Symbol(); // Symbol
console.log(typeof simbolo, simbolo);

var novoObjeto = {}; // Object
console.log(typeof novoObjeto, novoObjeto);

var melhor = 'Vasco é o "melhor" time';

var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase1, frase2);
