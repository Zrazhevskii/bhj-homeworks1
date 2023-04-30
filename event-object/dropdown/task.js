'use strict'

const drop_link = document.getElementsByClassName('dropdown__link');
const drop_item = Array.from(document.querySelectorAll('.dropdown__item'));
const drop_list = document.querySelector('.dropdown__list');
const dropdown_value = document.querySelector('.dropdown__value');

dropdown_value.addEventListener("click", () => {
    drop_list.classList.toggle("dropdown__list_active");
});

drop_item.forEach((evt) => {
    evt.addEventListener('click', function(evt) {
        evt.preventDefault();
        dropdown_value.textContent = this.textContent;
        drop_list.classList.toggle("dropdown__list_active");
        
    })
})