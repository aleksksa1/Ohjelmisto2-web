'use strict';

const nums = [];
const reverse = [];

for (let i = 1; i <= 5; i++) {
  const num = +prompt('Input number');
  nums.push(num);
}

for (let i = 1; i <= 5; i++) {
  reverse.push(nums.pop());
}

console.log(reverse);