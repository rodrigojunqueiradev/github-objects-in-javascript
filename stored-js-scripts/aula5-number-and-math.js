// Number e Math
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

const ano = 2018;
// const preco = new Number(99);

// Métodos:

// Number.isNaN() e Number.isInteger();
// isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false
Number.isInteger(20); // true
Number.isInteger(23.6); // false

// Number.parseFloat() e Number.parseInt()
// parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

console.log(parseFloat("31231243.43"));
console.log(parseFloat("99.50")); // 99.5
console.log(parseFloat("100 reais")); // 100
console.log(parseFloat("R$ 100")); // NaN

console.log(parseInt("100.5")); //100

// n.toFixed(decimais)

const preco = 2.99;
const preco2 = 2.49;
console.log(preco.toFixed()); // 3
console.log(preco.toFixed(1)); // 3.0
console.log(preco.toFixed(2)); // 2.99
console.log(preco.toFixed(3)); // 2.990
console.log(preco2.toFixed()); // 2
console.log(preco2.toFixed(1)); // 2.5
console.log(preco2.toFixed(2)); // 2.49
console.log(preco2.toFixed(3)); // 2.490

// n.toString(radix)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.
console.log(preco.toString(10)); // '2.99'

// n.toLocaleString(lang, options);
// Formata o número de acordo com a língua e opções passadas.
console.log(
  preco.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // $59.49
console.log(
  preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
); // R$ 59,49

// Math
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);

// Math.abs(), Math.ceil(), Math.floor() e Math.round()
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

// Math.max(), Math.min() e Math.random();
// max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

// Exercícios:
console.log("Exercícios: ");

// 1. Retorne um número aleatório entre 1050 e 2000.
console.log("Exercício 1:");

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

// 2. Retorne o maior número da lista abaixo
// const numeros = '4, 5, 20, 8, 9';
console.log("Exercício 2: ");

const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// 3. Crie uma função para limpar os preços e retornar os números com centavos arredondados, depois retorne a soma total.
// const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
console.log("Exercício 3: ");

const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
