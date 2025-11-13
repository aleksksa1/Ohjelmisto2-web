'use strict';

const kohde = document.querySelector('#target');

const nimet = [];
const reverse = [];

for (let i = 1; i <= 6; i++) {
  const nimi = prompt('Input name of the dog');
  nimet.push(nimi);
}
nimet.sort();

for (let i = 1; i <= 6; i++) {
  reverse.push(nimet.pop());
}

for (let name of reverse) {
  kohde.innerHTML += `<li>${name}</li>`;
}