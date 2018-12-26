'use strict';

const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const displayCount = document.querySelector('.result p');
displayCount.textContent = localStorage.count;

plusButton.addEventListener ('click', increasing);
minusButton.addEventListener ('click', decreasing);

function increasing() {
  localStorage.count++;
  displayCount.textContent = localStorage.count;
}

function decreasing() {
  if (localStorage.count > 0) {
    localStorage.count--;
    displayCount.textContent = localStorage.count;
  }
}