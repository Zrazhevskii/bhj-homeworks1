'use strict'

const menu_link = document.getElementsByClassName('menu__link');
let list_link = Array.from(menu_link);

list_link.forEach(item => {
    item.onclick = function () {
        let linkUl = item.parentElement.querySelector('ul');
        let linkActive = item.closest('.menu_main').querySelector('.menu_active');

        if (linkUl.classList.contains('menu_active')) {
            linkActive.classList.remove('menu_active');
        } else {
            if(linkActive) {
                linkActive.classList.remove('menu_active');
                linkUl.classList.add('menu_active')
            } else {
                linkUl.classList.add('menu_active')
            }
        }
        return false;
    };
})