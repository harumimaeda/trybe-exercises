// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
const peopleSorted = people.sort((a, b) => a.age - b.age);

console.log(peopleSorted);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
const peopleSortedInverse = people.sort((a, b) => b.age - a.age);

console.log(peopleSortedInverse);