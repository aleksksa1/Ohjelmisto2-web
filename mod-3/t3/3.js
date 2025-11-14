'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.querySelector('#target')

for (let i = 0; i <= 2; i++) {
  const li = document.createElement('li')
  li.innerText = names[i]
  ul.append(li)
}