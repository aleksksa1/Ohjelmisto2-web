'use strict';

const tv = document.querySelector('#tvForm');

tv.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const input_value = tv.querySelector('input[name=q]'.value);

  try {

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input_value}`);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
});
