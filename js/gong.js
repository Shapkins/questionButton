'use strict';

let time;
let timer;
const button = document.querySelector('.gong');
const timerScreen = button.querySelector('p');
const audio = document.querySelector('audio');
button.addEventListener('click', timerRun);

function timerRun(event) {
  event.stopPropagation();

  time = 71;
  button.removeEventListener('click', timerRun);
  timer = setInterval(tick, 1000); 
}

function tick() {
  if(time > 0) {
    time--;
    beep();
    if(time > 10) {
      timerScreen.textContent = 'Время: ' + (time - 10) + ' секунд';
    } else {
      timerScreen.textContent = 'Время вышло. Сдаем ответы: ' + time + ' секунд';
    }
  } else if (time === 0) {
    audio.src = './sounds/beep-final.mp3';
    audio.play();
    clearInterval(timer);
    timerScreen.textContent = 'Время';
    audio.src = './sounds/beep-final.mp3';
    button.addEventListener('click', timerRun);
  }
}

function beep() {
  switch (time) {
    case 21:
    case 11:
    case 3:
    case 2:
    case 1:
      audio.play();
      break;
  }
}