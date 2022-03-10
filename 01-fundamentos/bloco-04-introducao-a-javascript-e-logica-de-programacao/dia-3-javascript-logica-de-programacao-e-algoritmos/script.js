// Crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (let x = 10; x > 0; x -= 1) {
  fatorial *= x;
}

console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 

let word = 'persona';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// 3 e 4. Retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let item = "";

for (let index = 0; index < array.length; index += 1){
  item += item[index];
  console.log(item[index]);
}

let item1 = 'oi'
let item2 = 'ole'

if(item1 > item2){
  console.log(item1)
}else{
  console.log(item2)
}

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numeroPrimo = [];

for(i = 0; i == 50; i += 1) {
  if(numeroPrimo % 2 !== 0 && numeroPrimo % 3 !== 0){
    console.log(numeroPrimo);
    numeroPrimo.push[i]
  }else{
    console.log('erro')
  }
}