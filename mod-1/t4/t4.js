'use strict';

// kysy nimeä
const nimi = prompt('Syötä nimi');

// arvo huone numero 1-4
const huone = Math.floor(Math.random() * 4) + 1;

// switch case
switch (huone) {
  case 1:
    document.querySelector(
        '#target').innerHTML = `${nimi}, huoneesi on Gryffindor`;
    break;
  case 2:
    document.querySelector(
        '#target').innerHTML = `${nimi}, huoneesi on Hufflepuff`;
    break;
  case 3:
    document.querySelector(
        '#target').innerHTML = `${nimi}, huoneesi on Ravenclaw`;
    break;
  case 4:
    document.querySelector(
        '#target').innerHTML = `${nimi}, huoneesi on Slytherin`;
    break;
}