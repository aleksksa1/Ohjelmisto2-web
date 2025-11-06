'use strict';

const q = confirm('Should I calculate the square root?');

if (q === true) {
  const num = parseFloat(prompt('Insert number'));

  if (num >= 0) {
    const sqr = Math.sqrt(num);
    document.querySelector(
        '#target').innerHTML = `The square root is: ${sqr}`;
}
  else {
    document.querySelector(
        '#target').innerHTML = `The square root of a negative number is not defined`;
}
}

else {
  document.querySelector(
      '#target').innerHTML = `The square root is not calculated.`;
}
