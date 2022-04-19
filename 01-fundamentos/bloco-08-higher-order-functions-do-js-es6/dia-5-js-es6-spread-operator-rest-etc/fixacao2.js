// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa 
// trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

// Arrow function
// const employee = (user, jobInfos) => {
//   const data = {...user, ...jobInfos};
//   return data;
// };

// console.log(employee(user, jobInfos));

// Só const:
const employee2 = {...user, ...jobInfos};

console.log(employee2);



// // Desestruturando o objeto
const { name, age, nationality, profession, squadInitials, squad } = employee2;

// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as ${profession} and my squad is ${squadInitials} - ${squad}.`);
