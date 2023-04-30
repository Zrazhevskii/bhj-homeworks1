'use strict'

const slidItem = Array.from(document.querySelectorAll('.slider__item'));
const slidArrow = document.querySelectorAll('.slider__arrow');
const slidDot = Array.from(document.querySelectorAll('.slider__dot'));


for (let i = 0; i < slidArrow.length; i++) {
    slidArrow[i].onclick = () => changeSlide(i);
}

for (let i = 0; i < slidDot.length; i++) {
    slidDot[i].onclick = () => changeDot(i);
}

function changeSlide(i) {
    let index = slidItem.findIndex((value) => value.classList.contains('slider__item_active'));
    slidItem[index].classList.remove('slider__item_active');
    slidDot[index].classList.remove('slider__dot_active');

    if (slidArrow[i].classList.contains('slider__arrow_next')) {
        i = (index == slidItem.length - 1) ? (0) : (index + 1);
        slidItem[i].classList.add('slider__item_active');
        slidDot[i].classList.add('slider__dot_active');  
    } else {
        i = (index == 0) ? (slidItem.length - 1) : (index - 1);
        slidItem[i].classList.add('slider__item_active');
        slidDot[i].classList.add('slider__dot_active');
    }
};


function changeDot(i) {
    let index = slidDot.findIndex((value) => value.classList.contains('slider__dot_active'));
    slidDot[index].classList.remove('slider__dot_active');
    slidDot[i].classList.add('slider__dot_active');   
    slidItem[index].classList.remove('slider__item_active'); 
    slidItem[i].classList.add('slider__item_active');
};
