// Objetos

// Criando um objeto chamado carro:
// const carro = {
//   marca: "Marca",
//   preco: 0,
// };

// const honda = carro;
// honda.marca = "Honda";
// honda.preco = 50000;

// const fiat = carro;
// fiat.marca = "Fiat";
// fiat.preco = 70000;

// Carro, Fiat e Honda apontam para o mesmo objeto, o que não é usal.

// Função construtora:
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

// const honda = new Carro();
// honda.marca = "Honda";
// honda.preco = 50000;
const honda = new Carro("Honda", 50000);

// const fiat = new Carro();
// fiat.marca = "Fiat";
// fiat.preco = 70000;
const fiat = new Carro("Fiat", 70000);

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);
