// // A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.abracar = function () {
//     return this.nome + " abraçou";
//   };
//   this.andar = function () {
//     return this.nome + " andou pelo objeto";
//   };
// }

// Pessoa.prototype.andar = function () {
//   return this.nome + " andou";
// };

// const rodrigo = new Pessoa("Rodrigo", 31);

// // console.log(Pessoa.prototype);
// // console.log(rodrigo.prototype);

// // Construtores nativos

// const pais = "Brasil";
// const cidade = new String("Rio");

// // É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array
// const listaAnimais = ["Cachorro", "Gato", "Cavalo"];
// // Transforma em uma array:
// const listaArray1 = Array.prototype.slice.call(listaAnimais);

// const listaArray2 = Array.from(listaAnimais);

// // Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
// const Carro = {
//   marca: "Ford",
//   preco: 10000,
//   andar() {
//     return true;
//   },
// };

// Exercícios
// 1. Crie uma função construtora de Pessoas Deve conter nome, sobrenome e idade.

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// 2. Crie um método no protótipo que retorne o nome completo da pessoa.
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome + " tem " + this.idade + " anos.";
};

const rodrigo = new Pessoa("Rodrigo", "Junqueira", 31);

// 3. Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// 4. Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

const li = document.querySelector("li");

li; // HTMLLIElement
li.click; // function
li.innerText; // String
li.value; // Number
li.hidden; // Bool
li.offsetLeft; // Number
li.click(); //

// 5. Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

li.hidden.constructor.name; // Retorna uma string
