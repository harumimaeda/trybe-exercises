// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;

// console.log(nationality); // undefined

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian
console.log(person);

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!