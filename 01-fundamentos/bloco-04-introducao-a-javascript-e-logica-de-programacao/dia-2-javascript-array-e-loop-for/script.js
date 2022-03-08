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

// 3. Calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let average = result / numbers.length

console.log('Exercício 3: ' + average);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(average > 20){
    console.log("Valor maior que 20.")
}else if(average < 20){
    console.log("Valor menor que 20.")
}else{
    console.log("Erro!")
}