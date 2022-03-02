// Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002

let wonCup = [1958, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < wonCup.length; i++) {
  console.log(`O brasil ganhou a copa de ${wonCup[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var fruits = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var fruit = 0; fruit < fruits.length; fruit++) {
  console.log(fruits[fruit]);
  if (fruits[fruit] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.

var lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);
