'use strict';

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky']

function concat(list) {
  let result = '';
  for (let str of list) {
    result += str;
  }
  return result;
}

const kohde = document.querySelector('#target');

kohde.innerText = `${concat(names)}`