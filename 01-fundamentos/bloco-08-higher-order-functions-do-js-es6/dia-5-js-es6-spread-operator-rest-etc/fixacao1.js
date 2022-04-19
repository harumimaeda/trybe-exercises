// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Abacaxi', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melão', 'Laranja', 'Maçã'];

const fruitSalad = (fruit, additional) => {
  const all = [...fruit, ...additional];
  return all;
};

console.log(fruitSalad(specialFruit, additionalItens));