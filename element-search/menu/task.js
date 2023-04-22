'use strict'

const menu_link = document.getElementsByClassName('menu__link');

let list_link = Array.from(menu_link);

list_link.forEach((p) => {
    console.log(p.textContent)
})