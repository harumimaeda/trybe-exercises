// Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(word){
    let reverse = word.split('').reverse().join('');

    if(word === reverse ){
        console.log('true');
    }else{
        console.log('false');
    }
}

verificaPalindrome('desenvolvimento');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .


function maiorValor(array){ 
    let arrayItems = 0;

    for (i = 0; i <= array; i += 1){
        if(array[i] > )
    }
}

maiorValor([2, 3, 6, 7, 10, 1]);

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function soma(number){
    let result = 0;
    let numbers = [];
        
    for(let i = 1; i <= number; i += 1){
        numbers.push(i)
    }
    console.log(numbers); 
}

soma(5);

// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
let soma = 0;
let array = [];

for (let i = 0; i <= 50; i += 1) {
    array.push(i + 50)
}
console.log(array);

for (let index = 0; index <= 50; index += 1) {
    soma += array[index]
}

for (let x = 50; x <= 100; x +=1) {
    soma += x;
}
console.log(soma);