// // Arrays
// // Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

// // const instrumentos = ["Guitarra", "Baixo", "Violão"];
// // const precos = [49, 99, 69, 89];

// // const dados = [
// //   new String("Tipo 1"),
// //   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
// //   function andar(nome) {
// //     console.log(nome);
// //   },
// // ];

// // dados[2]("Ford");
// // dados[1][2].cor; // azul

// // Construção de Arrays:
// // Toda array herda os métodos e propriedades do protótipo do construtor Array.

// // const instrumentos = ["Guitarra", "Baixo", "Violão"];
// // const carros = new Array("Corola", "Mustang", "Honda");

// // console.log(carros[1]); // Mustang
// // console.log(carros[2]); // Honda
// // carros[2] = "Ferrari";
// // console.log(carros[2]); // Ferrari
// // console.log(carros.length); // 3
// // carros[10] = "Parati";
// // console.log(carros.length); // 11

// // Array.from()
// // Array.from() é um método utilizado para transformar array-like objects, em uma array.

// // let li = document.querySelectorAll("li");
// // li = Array.from(li);

// // const carros = {
// //   0: "Fiat",
// //   1: "Honda",
// //   2: "Ford",
// //   length: 4,
// // };

// // const carrosArray = Array.from(carros);

// // Array.isArray()
// // console.log(Array.isArray(carros));
// // console.log(Array.isArray(carrosArray));

// // Array.of(), Array() e new Array()
// // A palavra chave new não é necessária para utilizar o construtor Array.
// // Array.of(10); // [10]
// // Array.of(1, 2, 3, 4); // [1,2,3,4]
// // new Array(5); // [,,,,]
// // Array(5); // [,,,,]
// // Array(1, 2, 3, 4); // [1,2,3,4]

// // Propriedades e Métodos do Prototype
// // const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
// // console.log(frutas.length); // 3

// // console.log(frutas[0].length); // 6
// // console.log(frutas[1].length); // 4
// // console.log(frutas[2].length); // 2

// // Métodos Modificadores [].sort()
// // Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// console.log(instrumentos); // ['Guitarra', 'Baixo', 'Violão']
// instrumentos.sort();
// console.log(instrumentos); // ['Baixo', 'Guitarra', Violão]

// const idades = [32, 21, 33, 43, 1, 12, 8];
// console.log(idades);
// idades.sort();
// console.log(idades); // [1, 12, 21, 32, 33, 43, 8]

// // [].unshift() e [].push()
// // [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

// const carros = ["Ford", "Fiat", "VW"];
// console.log(carros);

// carros.unshift("Honda", "Kia");
// console.log(carros);

// carros.push("Ferrari");
// console.log(carros);

// // [].shift() e [].pop()
// // [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

// const primeiroCarro = carros.shift();
// console.log(carros);

// const ultimoCarro = carros.pop();
// console.log(carros);

// // [].reverse()
// // [].reverse() inverte os itens da array e retorna a nova array.
// carros.reverse();
// console.log(carros);

// // [].splice()
// // [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

// carros.splice(1, 0, "Kia", "Mustang");
// console.log(carros); // ['VW', 'Kia', 'Mustang', 'Fiat', 'Ford', 'Kia']

// carros.splice(3, 2, "Ferrari");
// console.log(carros); // ['VW', 'Kia', 'Mustang', 'Ferrari', 'Kia']

// // [].copyWithin()
// // [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

// console.log(["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3)); // ['Item1', 'Item2', 'Item1', 'Item2']

// console.log(["Item1", "Item2", "Item3", "Item4"].copyWithin(-1)); // ['Item1', 'Item2', 'Item3', 'Item1']

// // [].fill()
// // [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

// console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana")); // ['Banana', 'Banana', 'Banana', 'Banana']

// console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2)); // ['Item1', 'Item2', 'Banana', 'Banana']

// console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3)); // ['Item1', 'Banana', 'Banana', 'Item4']

// // Métodos de Acesso [].concat()
// // Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

// const transporte1 = ["Barco", "Aviao"];
// const transporte2 = ["Carro", "Moto"];
// const transportes = transporte1.concat(transporte2);
// console.log(transportes); // ['Barco', 'Aviao', 'Carro', 'Moto'];

// const maisTransportes = [].concat(transporte1, transporte2, "Van");
// console.log(maisTransportes); // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

// // [].includes(), [].indexOf() e [].lastIndexOf()
// // [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

// const linguagens = ["html", "css", "js", "php", "python", "js"];

// console.log(linguagens);
// console.log(linguagens.includes("css")); // true
// console.log(linguagens.includes("ruby")); // false
// console.log(linguagens.indexOf("python")); // 4
// console.log(linguagens.indexOf("js")); // 2
// console.log(linguagens.lastIndexOf("js")); // 5

// // [].join()
// // [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

// console.log(linguagens.join()); // 'html,css,js,php,python'
// console.log(linguagens.join(" ")); // 'html css js php python'
// console.log(linguagens.join("-_-")); // 'html-_-css-_-js-_-php-_-python'

// // [].slice()
// // [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

// console.log(linguagens.slice(3)); // ['php', 'python', 'js']
// console.log(linguagens.slice(1, 4)); // ['css', 'js', 'php']

// const cloneLinguagens = linguagens.slice();
// console.log(cloneLinguagens);

// Exercícios:
// 1.
// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
// Resolução:

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
console.log(comidas);

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComidaRemovida = comidas.shift();
console.log(primeiraComidaRemovida);
console.log(comidas);

// Remova o último valor de comidas e coloque em uma variável
const ultimaComidaRemovida = comidas.pop();
console.log(comidas);

// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

// 2.
// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
// Resolução:

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
console.log(estudantes);

// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);

// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));

// 3.
// let html = `<section>
// <div>Sobre</div>
// <div>Produtos</div>
// <div>Contato</div>
// </section>`
// Substitua section por ul e div com li utilizando split e join

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

html = html.split("section").join("ul").split("div").join("li");
console.log(html);

// 4. const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover salve a array original em outra variável

const carros = ["Ford", "Fiat", "VW", "Honda"];
const carrosOriginais = carros.slice();
carros.pop();
console.log(carros);
