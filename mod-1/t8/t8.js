'use strict';

const kohde = document.querySelector('#target');

const alku = parseFloat(prompt('Syötä aloitusvuosi'));
const loppu = parseFloat(prompt('Syötä lopetusvuosi'));

for (let i = alku; i <= loppu; i++) {

  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0)
    kohde.innerHTML += `<li>${i}</li>`;
}