'use strict';

const sides = +prompt('How many sides are in your dice?');

function rollDice() {
  return Math.floor(Math.random() * sides) + 1;
}

let tulos = 0;

while (tulos !== sides) {
  tulos = rollDice();
  document.querySelector('#target').
      insertAdjacentHTML('beforeend', `<li>${tulos}</li>`);
}

