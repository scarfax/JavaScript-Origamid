// Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome

const personalData = {
  name: "Sérgio",
  surname: "Campos",
  age: 45,
  hasCollege: true,
};

personalData.age = 46;

console.log(
  personalData.name,
  personalData.surname,
  personalData.age,
  personalData.hasCollege
);

// Crie um método no objeto anterior, que mostre o seu nome completo

personalData.lastName = "Mesquita";

personalData.fullName = function () {
  return `${this.name} ${this.surname} ${this.lastName}`;
};

console.log(personalData.fullName());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.marca, carro.portas, carro.preco);

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

const dog = {
  breed: "labrador",
  color: "preto",
  age: 10,
  bark(genre) {
    if (genre === "man") {
      return "late";
    } else {
      return "não late";
    }
  },
};

console.log(dog.breed, dog.color, dog.age, dog.bark("woman"));
console.log(dog.bark("man"));
