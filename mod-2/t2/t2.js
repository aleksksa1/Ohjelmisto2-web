'use strict';

const kohde = document.querySelector('#target');

const num = +prompt('Input the number of participants');
const names = [];

for (let i = 1; i <= num; i++) {
  const name = prompt('Input the names of the participants');
  names.push(name);
}
names.sort();

for (let nimi of names) {
  kohde.innerHTML += `<li>${nimi}</li>`;
}

//turhia:
//const participants = {}
//participants[`name${i}`] = name
//console.log(participants)