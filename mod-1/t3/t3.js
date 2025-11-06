const eka = parseFloat(prompt('Syötä numero'));
const toka = parseFloat(prompt('Syötä numero'));
const kolmas = parseFloat(prompt('Syötä numero'));

const summa = eka + toka + kolmas;
const tulo = eka * toka * kolmas;
const ka = (eka + toka + kolmas) / 3;

document.querySelector('#summa').innerHTML = summa;
document.querySelector('#tulo').innerHTML = tulo;
document.querySelector('#keskiarvo').innerHTML = ka;
