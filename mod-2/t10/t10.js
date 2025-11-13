'use strict';

const participants = [];

const num = +prompt('Input the number of participants');

for (let i = 1; i <= num; i++) {
  const name = prompt(`Input the name of the participant ${i}`);
  participants.push({
    name: name,
    votes: 0,
  });
}

const voters = +prompt('How many voters?');

for (let i = 1; i <= voters; i++) {
  const vote = prompt(`Who do you vote for?`);
  for (let partic of participants) {
    if (vote === partic.name) {
      partic.votes += 1;
    }
  }
}

participants.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${participants[0].name} with ${participants[0].votes} votes!`)
console.log('results:')
for (let i = 0; i <= num-1; i++) {
  console.log(`${participants[i].name}: ${participants[i].votes} votes.`)
}