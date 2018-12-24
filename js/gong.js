'use strict';

let time;
let timer;
const button = document.querySelector('.gong');
const timerScreen = button.querySelector('p');
const audio = document.querySelector('audio');
button.addEventListener('click', timerRun);

function timerRun(event) {
  event.stopPropagation();
  audio.src = './sounds/beep.mp3';
  time = 71;
  button.removeEventListener('click', timerRun);
  timer = setInterval(tick, 1000); 
}

function tick() {
  if(time > 0) {
    beep();
    time--;
    if(time > 10) {
      timerScreen.textContent = 'Время на обсуждение: ' + (time - 10) + ' секунд';
      addLetter();
    } else {
      timerScreen.textContent = 'Время вышло. Сдаем ответы: ' + time + ' секунд';
      addLetter();
    }
  } else if (time === 0) {
    audio.src = './sounds/beep-final.mp3';
    audio.play();
    clearInterval(timer);
    timerScreen.textContent = 'Время';
    button.addEventListener('click', timerRun);
  }
}

function beep() {
  switch (time) {
    case 71:
    case 21:
    case 11:
    case 3:
    case 2:
    case 1:
      audio.play();
      break;
  }
}

function addLetter() {
  if (((time % 10 === 2) || (time % 10 === 3) || (time % 10 === 4)) && ((time !== 22) && (time !== 23) && (time !== 24))) {
    timerScreen.textContent += 'ы';
  } else if ((time % 10 === 1) && (time !== 21)) {
    timerScreen.textContent += 'а';
  }
}