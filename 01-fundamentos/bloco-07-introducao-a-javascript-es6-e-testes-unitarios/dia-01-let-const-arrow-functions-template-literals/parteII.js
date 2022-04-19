// 1. Crie uma função que receba um número e retorne seu fatorial.
// Source: https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript

const fatorial = numero => {
  let resultado = 1;
  for (let i = 2; i <= numero; i += 1){
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

// const findLongestWord = (string) => {
//   // Dividindo a string em um array com as palavras
//   let str = string.split(' ');
//   console.log(str);
//   // Definindo uma variável para guardar o conteúdo da maior palavra. Por enquanto, podemos definir que a primeira palavra é a maior até agora.
//   let longestWord = str[0];
//   // For para percorrer a array str
//   for (let i = 0; i < str.length; i += 1){
//     // 1. Se 0 (linha 25) < 7 (Antonio === str[0]), substitua 0 por 7, depois, defina word = Antônio
//     // 2. Se 7 (Antonio) < 3 (foi === str[1]) === false
//     // 3. Se 7 (Antonio) < 2 (no === str[2]) === false
//     // 4. Se 7 (Antonio) < 8 (banheiro === str[3]), substitua 7 por 8, depois, defina word = banheiro
//     if (longestWord.length < str[i].length) {
//       longestWord = str[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

const findLongestWord2 = (string) => {
  let str = string.split(' ');
  let comparation = str.sort((a, b) => b.length - a.length);
  return comparation[0];
}

console.log(findLongestWord2('Antônio foi no banheiro e não sabemos o que aconteceu'));