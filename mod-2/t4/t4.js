'use strict';

const kohde = document.querySelector('#target');

const nums = [];
let tulos = null;

function num() {
  tulos = +prompt('Input number. 0 ends');
  nums.push(tulos);
  return tulos;
}

while (tulos !== 0) {
  num();
}
nums.sort((a, b) => b - a);

for (let n of nums) {
  kohde.innerHTML += `<li>${n}</li>`;
}