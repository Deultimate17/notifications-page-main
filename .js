"use strict"

const mark = document.querySelector('.mark');
const number = document.querySelector('.num');
const fall = document.querySelectorAll('.top');
const below = document.querySelector('.below');
const  under = document.querySelector('.under');
const  circle = document.querySelectorAll('.dot');
//const info = document.querySelectorAll('.info');
const span = document.querySelectorAll('i');
let score=3;
mark.addEventListener('click',function () {
   number.textContent = 0; 
  // fall.style.backgroundColor='transparent';
  fall.forEach(function (mov) {
      mov.classList.add('hidden');
  })
   //below.classList.remove('below');
   //under.classList.remove('under');
   circle.forEach(mov => {
       mov.classList.remove('dot');
   })
})

