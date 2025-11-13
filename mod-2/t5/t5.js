'use strict';

const nums = [];

while (true) {
  const tulos = +prompt('Input number. Duplicate ends');

  if (nums.includes(tulos)) {
    break;
  }

  nums.push(tulos);
}

nums.sort((a, b) => a - b);

alert('You already put that number!');

console.log(nums);
