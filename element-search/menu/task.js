'use strict'

const linkMenu = document.getElementsByClassName('menu__link');
const linksList = Array.from(linkMenu);


linksList.forEach((link) => {
	link.addEventListener('click', (event) => {
		const hasMenu = event.target.nextElementSibling
		const menuSubList = document.querySelectorAll('.menu_sub')
	
		menuSubList.forEach((menuSub) => {
			if (menuSub.classList.contains('menu_active')) {
				if (menuSub === hasMenu) {
					return
				} else {
					menuSub.classList.remove('menu_active')
				}
			}
		})

		if (hasMenu === null) {
			return
		}

		if (hasMenu !== null) {
			hasMenu.classList.toggle('menu_active')
		}
	})
});
