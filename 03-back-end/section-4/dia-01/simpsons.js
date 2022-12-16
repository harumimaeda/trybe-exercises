const fs = require('fs').promises;
const SIMPSONS_PATH = './simpsons.json';
const SIMPSON_FAMILY = './simpsonFamily.json'

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function readAll() {
  const fileData = await fs.readFile(SIMPSONS_PATH);
  const fileDataParsed = JSON.parse(fileData);
  const strings = fileDataParsed.map(({ id, name }) => `${id} - ${name}`);
  console.log(strings);
}

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
async function findyById(id) {
  const file = await fs.readFile(SIMPSONS_PATH);
  const fileData = JSON.parse(file);

  const chosenSimpson = fileData.find((simpson) => Number(simpson.id) === id);
  if(!chosenSimpson) throw new Error('ID não encontrado');
  console.log(chosenSimpson);
}


// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function filterSimpsons() {
  const fileContent = await fs.readFile(SIMPSONS_PATH, 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile(SIMPSONS_PATH, JSON.stringify(newArray));
}

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function newFilterSimpsons() {
  const fileContent = await fs.readFile(SIMPSONS_PATH);
  const simpsons = JSON.parse(fileContent);
  
  const newArray = simpsons.filter((simpson) => simpson.id <= '1' || simpson.id <= '4');
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
  // console.log(newArray);
}

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addNelson() {
  const fileContent = await fs.readFile(SIMPSON_FAMILY);
  const simpsons = JSON.parse(fileContent);

  simpsons.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile(SIMPSON_FAMILY, JSON.stringify(simpsons));
}

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

async function main() {
  // await findyById(5);
  // await filterSimpsons();
  // await newFilterSimpsons();
  // await addNelson();
  await overwriteNelson();
}

main();