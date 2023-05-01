'use strict'

let menu_link = document.getElementsByClassName('menu__link');
let list_link = Array.from(menu_link);

list_link.forEach((item) => {
	item.onclick = () => {
	let linkUl = item.parentElement.querySelector('ul');

    if (linkUl == null) {
        linkUl.classList.add('menu_active');
    }

	if(linkUl) {
		let disActive = linkUl.className.includes('menu_active');
		let linkActive = item.closest('.menu_main').querySelector('.menu_active');

		if(linkActive) {
			linkActive.classList.remove('menu_active');
		}
		if (disActive) {
			linkUl.classList.remove('menu_active');
		} else {
			linkUl.classList.add('menu_active');
		}
	}
	return false;
	}
});

