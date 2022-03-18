const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
/* 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
No CSS, existe uma classe (tech) na linha 68 que recebe uma declaração que reposiciona a classe verticalmente. */

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addTechClass(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', addTechClass);
secondLi.addEventListener('click', addTechClass);
thirdLi.addEventListener('click', addTechClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
// Source: https://www.w3schools.com/jsref/prop_text_placeholder.asp
window.onload = function(event) {
  document.getElementById('input').placeholder = 'Altere o conteúdo do quadrado selecionado...';
  document.getElementById('input').style.width = '21em';
}

input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
  // Pq input.value = ''; não funciona aqui?
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
// Source: https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript
function doubleClickPortfolio(event) {
  let portfolio = 'https://harumimaeda.github.io/trybe-portfolio/';
  window.open(portfolio);
}

myWebpage.addEventListener('dblclick', doubleClickPortfolio);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', function() {
  this.style.color = '#006dfb';
});

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.