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

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Event/target

function zoom(){
  // codigo
}

// For para rodar em todos os dias?
// document.getElementsByClassName('days').addEventListener('mouseover', zoom);

// 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function tarefa(nameTask) {
  const newTask = document.createElement('span');
  document.querySelector('.my-tasks').appendChild(newTask);
  newTask.innerText = nameTask;
}

tarefa('cozinhar');

// 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function colorTask(color) {
  const newTask = document.createElement('div');
  document.querySelector('.my-tasks').appendChild(newTask);
  newTask.className = 'task';
  newTask.style.backgroundColor = color;
}

colorTask('red');

// 9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function addEvent(){
  // code;
}

// 10. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada. Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function colorSubtitle(){
  const days = document.querySelectorAll('.day');
  let defaultColor = 'rgb(238,238,238)';
  let newLegendColor = 'color';

  for(i = 0 <= days.length; i +=1;) {
    if(days[i].style.backgroundColor === defaultColor) {
      days[i].style.backgroundColor = newLegendColor;
    }
  }
}
document.querySelectorAll('.day').addEventListener('click', colorSubtitle);

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