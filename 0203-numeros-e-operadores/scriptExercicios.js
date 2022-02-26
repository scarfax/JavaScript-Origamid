// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
// 10 + 5 + 20 = 35
console.log(total);

// Crie duas expressões que retornem NaN
var retornaNan1 = "sorvete" * 3;
var retornaNan2 = "moto";

console.log(retornaNan1);
console.log(+retornaNan2);

// Somar a string '200' com o número 50 e retornar 250

var numero1 = "200";
var numero2 = 50;
var total = +numero1 + numero2;

console.log(total);

// Incremente o número 5 e retorne o seu valor incrementado

var numero3 = 5;
console.log(++numero3);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
console.log(peso);
