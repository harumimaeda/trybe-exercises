const myName = 'Isabela';
const birthCity = 'São Paulo';
let birthYear = 1997;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030;

// console.log(birthYear);

// const birthCity = 'Fortaleza';

// console.log(birthCity);
// Ocorre esse erro pois o birthCity é uma CONSTANTE, não podendo ter seu valor reatribuído.

// const base = 5;
// let height = 8;
// const area = base * height;

// console.log(area);

// const perimeter = base * 2 + height * 2;

// console.log(perimeter);

const notaDesafio = 78;

if (notaDesafio >= 80){
    console.log("Parabéns, você foi aprovada(o)!")
}else if (notaDesafio < 80 && notaDesafio >= 60){
    console.log("Você está na nossa lista de espera")
}else if(notaDesafio < 60){
    console.log("Você foi reprovada(o)")
}