'use strict';

const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');

const closes = document.getElementsByClassName('modal__close');
const show = document.getElementsByClassName('show-success');
const btn_success = document.getElementsByClassName('btn_success');

main.className = 'modal modal_active';

function play() {
    for (let i = 0; i < closes.length; i++) {
        closes[i].onclick = () => {
            closes[i].closest('.modal').className = 'modal';
            if (closes[i] === show[0]) {
                success.className = 'modal modal_active';
            }
        }
    }      
}

play();
        