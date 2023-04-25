'use strict'

const slidItem = document.querySelectorAll('.slider__item');
const slidArrow = document.querySelectorAll('.slider__arrow');
const slidPrev = document.querySelector('.slider__arrow_prev');
const slidNext = document.querySelector('.slider__arrow_next');
const slidDot = document.querySelectorAll('.slider__dot');


let n = 0;


for (let i = 0; i < slidArrow.length; i++) {
    slidArrow[i].onclick = () => {
        changeSlide(slidArrow[i]);
    }
}


function changeSlide(item) {
    slidItem[n].classList.remove('slider__item_active');
    
    if ((n == slidItem.length - 1) && (item == slidNext)) {
        n = 0;
        slidItem[n].classList.add('slider__item_active');
    } else if (item == slidNext) {
            n++;
            slidItem[n].classList.toggle('slider__item_active');
        } else {
            if (n == 0) {
                n = slidItem.length - 1;
                slidItem[n].classList.add('slider__item_active');
            } else if ((n !== 0) || (n === slidItem.length - 1)) {
                n--;
                slidItem[n].classList.add('slider__item_active');   
            }
        }
}


for (let i = 0; i < slidDot.length; i++) {
    slidDot[i].onclick = () => {
        changeDot(i);
    };
}


function changeDot(i) {
    slidItem[n].classList.remove('slider__item_active');
    slidItem[i].classList.add('slider__item_active');
    n = i;
}

    
