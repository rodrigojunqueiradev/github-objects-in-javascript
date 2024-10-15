// Arrays
// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// dados[2]("Ford");
// dados[1][2].cor; // azul

// Construção de Arrays:
// Toda array herda os métodos e propriedades do protótipo do construtor Array.

// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const carros = new Array("Corola", "Mustang", "Honda");

// console.log(carros[1]); // Mustang
// console.log(carros[2]); // Honda
// carros[2] = "Ferrari";
// console.log(carros[2]); // Ferrari
// console.log(carros.length); // 3
// carros[10] = "Parati";
// console.log(carros.length); // 11

// Array.from()
// Array.from() é um método utilizado para transformar array-like objects, em uma array.

// let li = document.querySelectorAll("li");
// li = Array.from(li);

// const carros = {
//   0: "Fiat",
//   1: "Honda",
//   2: "Ford",
//   length: 4,
// };

// const carrosArray = Array.from(carros);

// Array.isArray()
// console.log(Array.isArray(carros));
// console.log(Array.isArray(carrosArray));

// Array.of(), Array() e new Array()
// A palavra chave new não é necessária para utilizar o construtor Array.
// Array.of(10); // [10]
// Array.of(1, 2, 3, 4); // [1,2,3,4]
// new Array(5); // [,,,,]
// Array(5); // [,,,,]
// Array(1, 2, 3, 4); // [1,2,3,4]

// Propriedades e Métodos do Prototype
// const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
// console.log(frutas.length); // 3

// console.log(frutas[0].length); // 6
// console.log(frutas[1].length); // 4
// console.log(frutas[2].length); // 2

// Métodos Modificadores [].sort()
// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

const instrumentos = ["Guitarra", "Baixo", "Violão"];
console.log(instrumentos); // ['Guitarra', 'Baixo', 'Violão']
instrumentos.sort();
console.log(instrumentos); // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
console.log(idades);
idades.sort();
console.log(idades); // [1, 12, 21, 32, 33, 43, 8]

// [].unshift() e [].push()
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

const carros = ["Ford", "Fiat", "VW"];
console.log(carros);

carros.unshift("Honda", "Kia");
console.log(carros);

carros.push("Ferrari");
console.log(carros);

// [].shift() e [].pop()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

const primeiroCarro = carros.shift();
console.log(carros);

const ultimoCarro = carros.pop();
console.log(carros);

// [].reverse()
// [].reverse() inverte os itens da array e retorna a nova array.
carros.reverse();
console.log(carros);
