'use strict';

const vuosi = parseFloat(prompt('Syötä vuosi'));

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0)
  document.querySelector(
      '#target').innerHTML = `Vuosi ${vuosi} on karkausvuosi.`;
else
  document.querySelector(
      '#target').innerHTML = `Vuosi ${vuosi} ei ole karkausvuosi`;
