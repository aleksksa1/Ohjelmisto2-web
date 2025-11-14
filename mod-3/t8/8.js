'use strict';

const p = document.querySelector('#result')

const button = document.querySelector('#start');
button.addEventListener('click', function(evt){

  const num1 = +document.getElementById("num1").value;
  const num2 = +document.getElementById('num2').value;

  myFunction()
  if (myFunction() === 'add') {
    const sum = num1 + num2
    p.append(`Result: ${sum}`);
  }
  else if (myFunction() === 'sub') {
    const sub = num1 - num2
    p.append(`Result: ${sub}`);
  }
  else if (myFunction() === 'multi') {
    const multi = num1 * num2
    p.append(`Result: ${multi}`);
  }
  else if (myFunction() === 'div') {
    const div = num1 / num2
    p.append(`Result: ${div}`);
  }
});

function myFunction() {
  var selection = document.getElementById("operation").value;
  if (selection === 'add') {
    return 'add'
  }
  else if (selection === 'sub') {
    return 'sub'
  }
  else if (selection === 'multi') {
    return 'multi'
  }
  else if (selection === 'div') {
    return 'div'
  }
}