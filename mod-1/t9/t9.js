'use strict';

const luku = parseFloat(Math.floor(prompt('Syötä luku')))

let alkuluku = true

if (luku < 2 || luku % 2 === 0) {
    document.querySelector(
        '#target').innerHTML = `${luku} ei ole alkuluku.`;
}
else {
    alkuluku = true
    for (let i = 2; i <= luku-1; i++) {
        if (luku % i === 0)
          alkuluku = false;
    }

    if (alkuluku) {
        document.querySelector(
        '#target').innerHTML = `${luku} on alkuluku.`;
    }
    else {
      document.querySelector(
        '#target').innerHTML = `${luku} ei ole alkuluku.`;
    }
}