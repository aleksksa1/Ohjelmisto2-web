'use strict';

const lomake = document.querySelector('#source');
lomake.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const formData = new FormData(lomake);
  const etunimi = formData.get('firstname')
  const sukunimi = formData.get('lastname')

  document.querySelector('#target').innerText = `Your name is: ${etunimi} ${sukunimi}`
});


// jos pitää lähettää data getillä
  // const queryString = new URLSearchParams(formData)