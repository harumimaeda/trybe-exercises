// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. 
// Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro.
// Dica: use array destructuring e abbreviation object literal .

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
// const toObject = (array) => {};

const [modelo, montadora, dataFabricacao] = palio;

console.log(palio);

// Stack Overflow:
// const obj = yourArray.reduce((o, key) => ({ ...o, [key]: whatever}), {})

// const toObject = palio.reduce((obj, key) => ({ ...o, [key]:}), {});


const toObject = palio.reduce((acc, elem) => {
  acc[elem] = elem;
  return acc;
}, {});
console.log(toObject);


// [
//   { id: 10, color: "red" },
//   { id: 20, color: "blue" },
//   { id: 30, color: "green" }
// ].reduce((acc, cur) => ({ ...acc, [cur.color]: cur.id }), {})
// // Expected output: {red: 10, blue: 20, green: 30}