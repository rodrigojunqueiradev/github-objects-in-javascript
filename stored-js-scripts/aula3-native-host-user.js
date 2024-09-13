// Tipos de objetos: Native, Host e User

// Native: Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.
// Construtores de objetos nativos:
// Object
// String
// Array
// Function

// Host: Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.
// Objetos do browser
// NodeList
// HTMLCollection
// Element

// User: Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.
// const Pessoa = {
//   nome: "Rodrigo",
// };

// Bibliotecas:
// Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.

// Verificar se existe:
// O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
// if (typeof Array.from !== "undefined");
// if (typeof NodeList !== "undefined");
// console.log(typeof Array.from !== "undefined");
// console.log(typeof NodeList !== "undefined");

// API:
// Application Programming Interface, é uma interface de software criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.

// Exercícios:
// 1. Liste 5 objetos nativos:
console.log("Exercício 1: Liste 5 objetos nativos");
console.log(Object);
console.log(String);
console.log(Array);
console.log(Function);
console.log(Number);

// 2. Liste 5 objetos do browser:
// window
console.log("Exercício 2: Liste 5 objetos do browser");
console.log(Window);
console.log(history);
console.log(Document);
console.log(HTMLCollection);
console.log(NodeList);

// 3. Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox:
console.log("Exercício 3: ");
