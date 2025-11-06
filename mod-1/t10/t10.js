'use strict';

const dices = parseFloat(prompt('Input the number of dices'));
const guess = parseFloat(prompt('Guess sum of the eye numbers'));

let hits = 0;

for (let i = 0; i <= 1000000; i++) {
  let sum = 0;
  for (let j = 0; j < dices; j++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  if (sum === guess) {
    hits++;
  }
}
const percent = ((hits / 1000000) * 100).toFixed(2);
document.querySelector(
    '#target').innerHTML = `Probability to get sum ${guess} with ${dices} dices is about ${percent}%.`;