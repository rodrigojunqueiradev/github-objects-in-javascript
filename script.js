// Function
// function areaQuadrado(lado) {
//   return lado * lado;
// }
// console.log(areaQuadrado(5));

// function perimetroQuadrado(lado) {
//   return lado * 4;
// }
// console.log(perimetroQuadrado(5));

// // Propriedades:
// // Function.length retorna o total de argumentos da função.
// // Function.name retorna uma string com o nome da função.

// console.log(areaQuadrado.length);
// console.log(areaQuadrado.name);

// function somarNumeros(n1, n2) {
//   return n1 + n2;
// }

// console.log(somarNumeros.length);

// // function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// function descricaoCarro() {
//   console.log(this.marca + " " + this.ano);
// }

// descricaoCarro(); // undefined undefined
// descricaoCarro.call(); // undefined undefined
// descricaoCarro.call(carro); // Ford 2018
// descricaoCarro.call({ marca: "Gurgel", ano: 1980 });

// const carros = ["Ford", "Fiat", "VW"];

// carros.forEach((item) => {
//   console.log(item);
// });

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

// Exemplo real:
// O objeto atribuído a lista será o substituído pelo primeiro argumento de call()

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const lista = new Dom("ul");
// lista.ativo("ativar");
// console.log(lista);

// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).

// const frutas = ["Uva", "Maçã", "Banana"];

// Array.prototype.mostrarThis = function () {
//   console.log(this);
// };

// frutas.mostrarThis();

// array-like
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

// const li = document.querySelectorAll("li");

// const filtro = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains("ativo");
// });

// console.log(filtro);

// function.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

// const numeros = [3, 4, 6, 1, 34, 44, 32];
// Math.max.apply(null, numeros);

// const li = document.querySelectorAll("li");

// function itemPossuiAtivo(item) {
//   return item.classList.contains("ativo");
// }

// const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

// console.log(filtro1);
// console.log(filtro2);

// function.bind()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

// const filtrarLi = Array.prototype.filter.bind(li, function (item) {
//   return item.classList.contains("ativo");
// });

// filtrarLi();

// Argumentos comuns
// Podemos passar argumentos padrões para uma função e retornar uma nova função.

// function imc(altura, peso) {
//   return peso / (altura * altura);
// }

// const imc180 = imc.bind(null, 1.8);

// imc(1.8, 70); // 21.6
// imc180(70); // 21.6

// Exercícios
// Utilize a seção e os parágrafos em seu HTML:
// {
/* <section>
  <p>Lobo-cinzento (nome científico:Canis lupus) é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae.</p>
  <p>Os lobos-cinzentos são tipicamente predadores ápice nos ecossistemas que ocupam. Embora não sejam tão adaptáveis à presença humana como geralmente ocorre com as demais.</p>
  <p>O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude.</p>
  <p>Os lobos são capazes de percorrer longas distâncias com uma velocidade média de 10 quilômetros por hora e são conhecidos por.</p>
</section> */
// }
// 1. Retorne a soma total de caracteres dos parágrafos acima utilizando reduce.
const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracteres);
console.log(paragrafos);

// 2. Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;

  return elemento;
}

console.log(criarElemento("li", "azul", "Esse é o conteúdo"));

// 3. Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo");

const cursosJS = h1Titulo("Cursos de JavaScript");
const cursosHTML = h1Titulo("Cursos de HTML e CSS");

console.log(cursosJS);
console.log(cursosHTML);
