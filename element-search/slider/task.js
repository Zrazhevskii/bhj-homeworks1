'use strict'

const slidItem = Array.from(document.querySelectorAll('.slider__item'));
const slidArrow = document.querySelectorAll('.slider__arrow');
const slidDot = document.querySelectorAll('.slider__dot');


for (let i = 0; i < slidArrow.length; i++) {
    slidArrow[i].onclick = () => changeSlide(i);
}


function changeSlide(i) {
    let index = slidItem.findIndex((value) => value.classList.contains('slider__item_active'));
    slidItem[index].classList.remove('slider__item_active')

    if (slidArrow[i].classList.contains('slider__arrow_next')) {
        i = (index == slidItem.length - 1) ? (0) : (index + 1);
        slidItem[i].classList.add('slider__item_active');
    } else {
        i = (index == 0) ? (slidItem.length - 1) : (index - 1);
        slidItem[i].classList.add('slider__item_active');
    }
};


for (let i = 0; i < slidDot.length; i++) {
        slidDot[i].onclick = () => changeDot(i);
};


function changeDot(i) {
    let index = slidItem.findIndex((value) => value.classList.contains('slider__item_active'));
    slidItem[index].classList.remove('slider__item_active');
    slidItem[i].classList.add('slider__item_active');
};





// let n = 0;
// function changeSlide(item) {
//     slidItem[n].classList.remove('slider__item_active');
    
//     if ((n == slidItem.length - 1) && (item == slidNext)) {
//         n = 0;
//         slidItem[n].classList.add('slider__item_active');
//     } else if (item == slidNext) {
//             n++;
//             slidItem[n].classList.toggle('slider__item_active');
//         } else {
//             if (n == 0) {
//                 n = slidItem.length - 1;
//                 slidItem[n].classList.add('slider__item_active');
//             } else if ((n !== 0) || (n === slidItem.length - 1)) {
//                 n--;
//                 slidItem[n].classList.add('slider__item_active');   
//             }
//         }
// }


// for (let i = 0; i < slidDot.length; i++) {
//     slidDot[i].onclick = () => {
//         changeDot(i);
//     };
// }


// function changeDot(i) {
//     slidItem[n].classList.remove('slider__item_active');
//     slidItem[i].classList.add('slider__item_active');
//     n = i;
// }

    
