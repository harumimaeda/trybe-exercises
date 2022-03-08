let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for(let i = 0; i < numbers.length; i += 1) {
    console.log('Exercicio 1: ' + numbers[i]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let result = 0;

for (let i = 0; i < numbers.length; i +=1) {
    result += numbers[i];
}

console.log('Exercício 2: ' + result);