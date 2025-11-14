'use strict';

const lista = [
  'First item',
  'Second item',
  'Third item'];

const kohde = document.querySelector('#target');

for (let n of lista) {
  kohde.innerHTML += `<li>${n}</li>`;
}