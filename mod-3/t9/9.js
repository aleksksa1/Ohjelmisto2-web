'use strict';

const p = document.querySelector('#result')

const button = document.querySelector('#start');
button.addEventListener('click', function(evt){

  p.append(`Result: ${solve()}`);

});

function solve() {
  const equation = document.getElementById("calculation").value;
  let result;

  if (equation.includes('+')) {
    const [a, b] = equation.split('+');
    result = parseInt(a) + parseInt(b);
  }
  else if (equation.includes('-')) {
    const [a, b] = equation.split('-');
    result = parseInt(a) - parseInt(b);
  }
  else if (equation.includes('*')) {
    const [a, b] = equation.split('*');
    result = parseInt(a) * parseInt(b);
  }
  else if (equation.includes('/')) {
    const [a, b] = equation.split('/');
    result = parseInt(a) / parseInt(b);
  }
  return result;
}