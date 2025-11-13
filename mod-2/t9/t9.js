'use strict';

function even(numers) {
  const evenNums = [];
  for (let num of numers) {
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  }
  return evenNums;
}

const nums = [12, 2, 3, 6, 5, 7, 34, 22, 33, 67];

const result = even(nums);

console.log(nums)
console.log(result)