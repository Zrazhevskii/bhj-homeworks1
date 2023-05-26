'use strict'

let textarea = document.querySelector('textarea')
let save = document.querySelector('.save')
let clear = document.querySelector('.clear')
let show = document.querySelector('.show')

textarea.value = localStorage.getItem('value')

save.addEventListener('click', function(){
    localStorage.setItem('value', textarea.value)
})

clear.addEventListener('click', function(){
    textarea.value = ''
    localStorage.removeItem('value')
})

console.log(localStorage.getItem('value'));
