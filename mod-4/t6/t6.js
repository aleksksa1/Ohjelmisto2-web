'use strict';

const hakulomake = document.querySelector('#hakulomake')

const vitsit = document.querySelector('#vitsit')

async function vitsi(evt){
  evt.preventDefault()
  try {
    const hakusana = document.querySelector('input[name=q]').value;
    const query = `https://api.chucknorris.io/jokes/search?query=${hakusana}`;
    const response = await fetch(query);
    const jsonData = await response.json()

    for (const vastaus of jsonData.result) {
      const joke = document.createElement('p')
      joke.innerText = vastaus.value
      vitsit.append(joke)
      console.log(joke)
    }

  } catch (error) {
    console.log(error.message)
  }
}

hakulomake.addEventListener('submit', vitsi)