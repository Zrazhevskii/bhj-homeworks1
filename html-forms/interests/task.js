'use strict'

const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.forEach(link => {
    link.addEventListener('change', (evt) => {
        let child = Array.from(evt.target.closest('li').querySelectorAll('input'));

        if (evt.target.checked) {
            for (let j = 0; j < child.length; j++) {
                child[j].checked = evt.target.checked;
            }
        } else {
            for (let s = 0; s < child.length; s++) {
                child[s].checked = false;
            }
        }
    })
})
        