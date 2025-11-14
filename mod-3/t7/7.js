'use strict';

const image = document.querySelector('#target')

const p = document.querySelector('#trigger');
p.addEventListener('mouseenter', function(evt){
  image.src = 'img/picB.jpg'
  image.alt = 'example'
});

p.addEventListener('mouseleave', function(evt){
  image.src = 'img/picA.jpg'
  image.alt = 'example'
});
