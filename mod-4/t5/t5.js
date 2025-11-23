'use strict';

async function vitsi(){
  try {
    const query = `https://api.chucknorris.io/jokes/random`;
    const response = await fetch(query);
    const jsonData = await response.json()
    console.log(jsonData['value'])
  } catch (error) {

  }
}

vitsi();

