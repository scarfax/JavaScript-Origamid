// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
// Chamada de function declaration

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

// Parênteses () executam uma função

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

// PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(94, 1.78)); // 94 e 1.78 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos

//Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

// PARÊNTESES EXECUTA A FUNÇÃO

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else if (cor === "vermelho") {
    return "Você gosta do fogo";
  } else if (cor === "amarelo") {
    return "Você gosta do sol";
  } else {
    return "Você não gosta de nada";
  }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'

//Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

// addEventListener("click", function () {
//  console.log("Clicou");
// });
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//function mostraConsole() {
//  console.log("Duplo clique");
//}

//addEventListener("dblclick", mostraConsole);

// * Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso2, altura2) {
  const imc2 = peso2 / altura2 ** 2;
  console.log(imc2);
}

imc(80, 1.8); // retorna o imc
console.log(imc2(80, 1.8)); // retorna o imc e undefined

// VALORES RETORNADOS
//Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return console.log("É idoso");
  } else {
    return console.log("É um jovem mancebo");
  }
}

console.log(terceiraIdade(58));

//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
// console.log(totalPaises); // erro, totalPaises não definido
console.log(precisoVisitar(36));

//ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

//HOISTING
//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(180, 1.8); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
