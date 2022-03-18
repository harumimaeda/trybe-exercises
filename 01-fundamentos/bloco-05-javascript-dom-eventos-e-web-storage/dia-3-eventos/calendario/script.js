function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  
function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dayNumber = dezDaysList[i];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = dayNumber;
    dayListItem.className = 'day';

    daysList.appendChild(dayListItem);
    
    if (dayNumber === 24 || dayNumber === 31) {
      dayListItem.className = 'day holiday';
    }
    if(dayNumber === 4 || dayNumber === 11 || dayNumber === 18) {
      dayListItem.className = 'day friday';
    }
    if(dayNumber === 25) {
      dayListItem.className = 'day friday holiday';
    }
  };
};

createDaysOfMonth();

// 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function feriados(Feriado) {
  const newButton = document.createElement('button');

  document.getElementsByClassName('buttons-container')[0].appendChild(newButton);
  document.getElementsByTagName('button')[0].innerText = Feriado;
  document.getElementsByTagName('button')[0].id = 'btn-holiday';
}

feriados("Feriado");

// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function colorHolidays(event) {
  const holidays = document.querySelectorAll('.holiday');
  let newBackgroundColor = 'rgb(238,238,238)';
  let newColor = 'red';

  for (i = 0; i <= holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === newColor) {
      holidays[i].style.backgroundColor = newBackgroundColor;
      holidays[i].style.color = '#666';
    } else {
      holidays[i].style.backgroundColor = newColor;
      holidays[i].style.color = 'white';
    }
    }
  }

document.getElementById('btn-holiday').addEventListener('click', colorHolidays);

// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function sextou(string) {
  const newButton = document.createElement('button');

  document.getElementsByClassName('buttons-container')[0].appendChild(newButton);
  document.getElementsByTagName('button')[1].innerText = string;
  document.getElementsByTagName('button')[1].id = 'btn-friday';
}

sextou('Sexta-feira');

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function colorFridays(event) {
  const fridays = document.querySelectorAll('.friday');
  let newBackgroundColor = 'rgb(238,238,238)';
  let newColor = 'olive';

  for (i = 0; i <= fridays.length; i += 1) {
    if (fridays[i].style.backgroundColor === newColor) {
      fridays[i].style.backgroundColor = newBackgroundColor;
      fridays[i].style.color = '#666';
    } else {
      fridays[i].style.backgroundColor = newColor;
      fridays[i].style.color = 'white';
    }
    }
  }

document.getElementById('btn-friday').addEventListener('click', colorFridays);