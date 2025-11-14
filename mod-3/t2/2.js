'use strict';

const lista = [
  'First item',
  'Second item',
  'Third item'];

const ul = document.querySelector('#target')

for (let i = 0; i <= 2; i++) {
  const li = document.createElement('li')
  li.innerText = lista[i]
  ul.append(li)
}
