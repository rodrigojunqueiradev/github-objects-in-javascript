// Array e Iteração
// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// com arrow function:
// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// Arrow Function:
// const li = document.querySelectorAll("li");
// li.forEach((i) => i.classList.add("ativa"));

// const carros = ["Ford", "Fiat", "Honda"];
// carros.forEach((item, index, array) => {
//   array[index] = "Carro " + item;
// });

// [].map()
// const carros = ["Ford", "Fiat", "Honda"];
// const newCarros = carros.map((item) => {
//   return "Carro " + item;
// });

// console.log(carros); // ['Ford', 'Fiat', 'Honda']
// console.log(newCarros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

// const numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// const numerosX2 = numeros.map((n) => n * 2);
// const numerosX3 = numeros.map((n) => n * 3);
// const numerosPot2 = numeros.map((n) => n * n);

// console.log(numeros);
// console.log(numerosX2);
// console.log(numerosX3);
// console.log(numerosPot2);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);
// console.log(tempoAulas); // (4) [15, 10, 20, 25]

// const puxarNomes = (aulas) => aulas.nome;
// const nomesAulas = aulas.map(puxarNomes);
// console.log(nomesAulas);

// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
// const aulas = [10, 25, 30];
// const total1 = aulas.reduce((acumulador, atual) => {
//   return acumulador + atual;
// });
// console.log(total1);

// const numeros = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior;
// });

// console.log(maiorValor); // 60

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});

// const frutas = ["Banana", "Pêra", "Uva"];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
// const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

// console.log(frutasRight); // Uva Pêra Banana
// console.log(frutasLeft); // Banana Pêra Uva

// [].some()
// const frutas = ["Banana", "Pêra", "Uva"];
// const temUva = frutas.some((fruta) => {
//   return fruta === "Uva";
// });
// console.log(temUva); //true

// function maiorQue100(numero) {
//   return numero > 100;
// }
// const numeros = [0, 43, 22, 88, 101, 2];
// const temMaior = numeros.some(maiorQue100); // true
// console.log(temMaior);

// const arraysCheias = frutas.every((fruta) => {
//   return fruta;
// });
// console.log(arraysCheias); // true

// const maiorQue3 = numeros.every((x) => x > 3);
// console.log(maiorQue3); // false

// [].find() e [].findIndex()
// const frutas = ["Banana", "Pêra", "Uva", "Maçã"];
// const buscaUva = frutas.findIndex((fruta) => {
//   return fruta === "Uva";
// });
// console.log(buscaUva); // 2

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find((x) => x > 45);
// console.log(buscaMaior45); // 88

// filter()
// const frutas = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta;
// });
// console.log(arrayLimpa); // ['Banana', 'Uva', 'Maçã']

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.filter((x) => x > 45);
// console.log(buscaMaior45); // [88, 101]

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const aulasMaiores = aulas.filter((aula) => {
//   return aula.min > 15;
// });
// console.log(aulasMaiores); // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

// Exercícios:
// 1.
// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso:

// selecionando os cursos:
const cursos = document.querySelectorAll(".curso");
// transformando em array:
const arrayCursos = Array.from(cursos);

// map() para acessar:
const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetosCurso);

// 2.
// Retorne uma lista com os números maiores que 100:
const numeros = [3, 44, 333, 23, 122, 322, 33];
const buscaMaioresQue100 = numeros.filter((x) => x > 100);
console.log(buscaMaioresQue100);

// 3.
// Verifique se Baixo faz parte da lista de instrumentos e retorne true:
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const temBaixo = instrumentos.some((instrumento) => {
  return instrumento === "Baixo";
});
console.log(temBaixo);

// 4.
// Retorne o valor total das compras:
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Queijo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);

console.log("Valor total = R$ " + valorTotal);

// 5.
// Dada uma lista de números, retorne uma nova lista onde cada número é multiplicado por 2
const multiplicadoPor2 = numeros.map((x) => x * 2);
console.log(multiplicadoPor2);

// 6.
// Dado um array de strings, converta todas as strings para letras maiúsculas
const words = ["hello", "world", "javascript"];
const upperCaseWords = words.map((word) => word.toUpperCase());
console.log(upperCaseWords); // ["HELLO", "WORLD", "JAVASCRIPT"]

// 7.
// Transforme uma lista de objetos que contêm informações de produtos (nome, preço) em um array contendo apenas os preços.
const products = [
  { name: "apple", price: 1.99 },
  { name: "banana", price: 0.99 },
  { name: "orange", price: 1.49 },
];
const prices = products.map((product) => product.price);
console.log(prices); // [1.99, 0.99, 1.49]

// 8.
// Dado um array de números, converta cada número para uma string que representa o número com dois dígitos decimais (exemplo: 2 para "2.00").
const numbers = [2, 5, 8.7, 10];
const formattedNumbers = numbers.map((num) => num.toFixed(2));
console.log(formattedNumbers); // ["2.00", "5.00", "8.70", "10.00"]

// 9.
// Dada uma lista de pessoas com nome e idade, crie um array de strings que descrevam cada pessoa como: "Nome tem X anos".
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mark", age: 22 },
];
const descriptions = people.map(
  (person) => `${person.name} tem ${person.age} anos`
);
console.log(descriptions); // ["John tem 25 anos", "Jane tem 30 anos", "Mark tem 22 anos"]
