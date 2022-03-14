let pizzasDoces = ['chocolate', 'banana', 'morango']

for (let key in pizzasDoces){
    console.log(pizzasDoces);
}
// [ 'chocolate', 'banana', 'morango' ]
// [ 'chocolate', 'banana', 'morango' ]
// [ 'chocolate', 'banana', 'morango' ]

let pizzasDoces = ['chocolate', 'banana', 'morango']
 
for (let key in pizzasDoces){
    console.log(key, pizzasDoces[key])
}

// 0 chocolate
// 1 banana
// 2 morango

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Saab
// Volvo
// BMW

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

//   type Fiat
// model 500
// color white

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
    console.log(position);
  };
//   resultado: 0, 1, 2;

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let index in names) {
      console.log('Olá ' + names[index]);
  }

//  2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car){
      console.log(key, car[key]);
  }