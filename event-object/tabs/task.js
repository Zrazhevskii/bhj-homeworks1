'use strict'

const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));


tab.forEach((evt) => {
    evt.addEventListener('click', () => {
        const tabActive = tab.findIndex(((value) => value.classList.contains('tab_active')));
        
        tab[tabActive].classList.remove('tab_active');
        tabContent[tabActive].classList.remove('tab__content_active');
        evt.classList.add('tab_active');

        tabContent[tab.findIndex(((value) => value.classList.contains('tab_active')))].classList.add('tab__content_active');
    });
});

