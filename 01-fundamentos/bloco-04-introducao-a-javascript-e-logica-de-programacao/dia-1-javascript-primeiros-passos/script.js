// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 5;
const b = 4;

// Adição (a + b)
console.log("Soma:");
console.log(a + b);

// Subtração (a - b)
console.log("Subtração:");
console.log(a - b);

// Multiplicação (a * b)
console.log("Multiplicação:");
console.log(a * b);

// Divisão (a / b)
console.log("Divisão:");
console.log(a / b);

// Módulo (a % b)
console.log("Módulo - Resto da Divisão:");
console.log(a % b);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let x = 10;
let y = 25;

console.log("Retorna o maior de dois números:")
if(x > y){
    console.log(x)
}else if (x < y){
    console.log(y)
}else if(x === y){
    console.log("X é igual a Y")
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let num1 = 150;
let num2 = 13459;
let num3 = 4905;

console.log("Retorna o maior de três números:")
if(num1 > num2 && num1 > num3){
    console.log(num1);
}else if(num2 > num1 && num2 > num3){
    console.log(num2);
}else if(num3 > num1&& num3 > num2){
    console.log(num3);
}else{
    console.log("Ocorreu um erro!")
}

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const whichState = 32945;

console.log("A constante é positiva, negativa ou igual a zero?")
if(whichState > 0){
    console.log("positive");
}else if(whichState < 0){
    console.log("negative");
}else if(whichState = 0){
    console.log("zero");
}else{
    console.log("Ocorreu um erro!")
}

// 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3;
let somaTrue = 180;

let todosAngulosPositivos =  angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

console.log("A soma dos ângulos internos são válidos para um triângulo?")
if(todosAngulosPositivos){
if(somaAngulos = somaTrue){
    console.log(true);
}else {
    console.log(false);
}
}else {
console.log("Erro! Ângulo inválido.")
}

// 7. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)



// 8. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 43;

if (nota < 0 || nota > 100) {
  console.log("Erro! Nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . Bonus: use somente um if .

const q = 59;
const w = 964;
const e = 63;

if(q % 2 === 0 ||  w % 2 === 0 || e % 2 === 0){
    console.log()
}