'use strict';

const kohde = document.querySelector('#target');

const heitot = parseFloat(prompt('How many times do I throw the dice?'));

let summa = 0

for (let i = 0; i <= heitot; i++) {
  const heitto = Math.floor(Math.random() * 6) + 1;
  summa = summa + heitto

  kohde.innerHTML += `<li>${heitto}</li>`;

  document.querySelector(
        '#summa').innerHTML = `Dice throws sum: ${summa}`;
}