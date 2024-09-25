// str.lenght:
// const comida = 'Pizza';
// const liquido = new String('Água');
// const ano = new String(2018);
// const comida = 'Pizza';
// const frase = 'A melhor comida';
// console.log(comida.length); // 5
// console.log(frase.length); // 15
// console.log(comida[0]) // P
// console.log(frase[0]) // A
// console.log(frase[frase.length - 1]) // a
//
//

// str.charat(n):
// const linguagem = 'JavaScript';
// console.log(linguagem.charAt(0)); // J
// console.log(linguagem.charAt(2)); // v
// console.log(linguagem.charAt(linguagem.length - 1)); // t
//
//

// str.concat(str2, str3, ...):
// const frase = "A melhor linguagem: ";
// const linguagem = "JavaScript";
// const fraseCompleta = frase.concat(linguagem, '!!');
// console.log(fraseCompleta)
//
//

// str.includes(search, position):
// const fruta = "Banana";
// const listaFrutas = "Banana, Melancia, Morango, Laranja";
// console.log(listaFrutas.includes(fruta));
// console.log(listaFrutas.includes("Melancia"));
// console.log(listaFrutas.includes("Melao"));
//
// str.endsWith(search) e str.startsWith(search)
// console.log(fruta.startsWith("B")); //true
// console.log(fruta.startsWith("Ba")); //true
// console.log(fruta.endsWith("nana")); //true
//
//

// str.slice(start, end)
// const transacao1 = "Depósito de cliente";
// const transacao2 = "Depósito de fornecedor";
// const transacao3 = "Taxa de camisas";

// console.log(transacao1.slice(0, 3)); // Dep
// console.log(transacao1.slice(0, -2)); // Depósito de clien
// console.log(transacao1.slice(-5)); // iente
// console.log(transacao1.slice(3, 6)); // ósi
//
//

// str.substring(start, end)
// const linguagem = "JavaScript";
// console.log(linguagem.substring(3, 5)); // aS
// console.log(linguagem.substring(0, 4)); // Java
// console.log(linguagem.substring(4)); // Script
// console.log(linguagem.substring(-3)); // JavaScript
//
//

// str.indexOf(search) e str.lastIndexOf(search)
// const instrumento = "Guitarra";

// console.log(instrumento.indexOf("r")); // 5
// console.log(instrumento.lastIndexOf("r")); // 6
// console.log(instrumento.indexOf("ta")); // 3
//
//

// str.padStart(n, str) e str.padEnd(n, str)
// const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, "."));
// });

// console.log(listaPrecos[0].padStart(10, ".")); // .....R$ 99
// console.log(listaPrecos[0].padEnd(10, ".")); // R$ 99.....
//
//

// str.repeat(n)
// const frase = "Ta";
// console.log(frase.repeat(5)); // TaTaTaTaTa
//
//

// str.replace(regexp|substr, newstr|function)
// let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
// console.log(listaItens);
// listaItens = listaItens.replace(/[ ]+/g, ", ");
// console.log(listaItens);

// let preco = "R$ 1200,43";
// console.log(preco);
// preco = preco.replace(",", "."); // 'R$ 1200.43'
// console.log(preco);

// str.split(padrao)
// Divide a string de acordo com o padrão passado e retorna uma array:

// const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
// console.log(listaItens);
// const arrayItens = listaItens.split(" ");
// console.log(arrayItens);

// const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
// console.log(htmlText);
// const htmlArray = htmlText.split("div");
// console.log(htmlArray);
// const htmlNovo = htmlArray.join("section");
// console.log(htmlNovo);
//
//

// str.toLowerCase() e str.toUpperCase()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
// const sexo1 = "Feminino";
// const sexo2 = "feminino";
// const sexo3 = "FEMININO";

// console.log(sexo1.toLowerCase() === "feminino"); // true
// console.log(sexo2.toLowerCase() === "feminino"); // true
// console.log(sexo3.toLowerCase() === "feminino"); // true
//
//

// str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de uma string.
// const valor = "  R$ 23.00   ";
// console.log(valor.trim()); // 'R$ 23.00'
// console.log(valor.trimStart()); // 'R$ 23.00   '
// console.log(valor.trimEnd()); // '  R$ 23.00'
//
//

// Exercícios:
// 1. Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento:
// const transacoes = [
//     {
//       descricao: 'Taxa do Pão',
//       valor: 'R$ 39',
//     },
//     {
//       descricao: 'Taxa do Mercado',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 99',
//     },
//     {
//       descricao: 'Taxa do Banco',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 49',
//     },
//   ];

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
