'use strict'

// let elSlidArrow = document.getElementsByClassName('slider__arrow');
// let itemsImg = document.querySelectorAll('.slider__item');
// let elDot = document.querySelectorAll('.slider__dot');
// let indexImg = 0;

// for (let i = 0; i < elSlidArrow.length; i++) {
// 	elSlidArrow[i].onclick = changeSlide;
// }

// for (let i = 0; i < elDot.length; i++) {
// 	elDot[i].onclick = () => {dotChangeSlide(i)};
// }

// function changeSlide (event) {
// 	let classSlideArrow = event.target.classList;
	
// 	itemsImg[indexImg].classList.remove('slider__item_active');

// 	if(classSlideArrow.contains('slider__arrow_prev')) {

// 		if (indexImg == 0) {
// 			indexImg = itemsImg.length - 1;
// 		} else {
// 			indexImg = indexImg - 1;
// 		}
// 	}

// 	if(classSlideArrow.contains('slider__arrow_next')) {

// 		if (indexImg == itemsImg.length - 1) {
// 			indexImg = 0;
// 		} else {
// 			indexImg = indexImg + 1;
// 		}
// 	}

// 	itemsImg[indexImg].classList.add('slider__item_active');
// }

// function dotChangeSlide(i) {
// 	itemsImg[indexImg].classList.remove('slider__item_active');
// 	itemsImg[i].classList.add('slider__item_active')
// 	indexImg = i;
// }

const slidItem = document.querySelectorAll('.slider__item');
const slidArrow = document.querySelectorAll('.slider__arrow');
const slidPrev = document.querySelector('.slider__arrow_prev');
const slidNext = document.querySelector('.slider__arrow_next');

// console.log(slidItem[4])
// console.log(slidNext)
// console.log(slidArrow[1])
// console.log(sliderItem[2])
// const maxIndex = 5;
let n = 0;

// slidItem.forEach(item => {
//     slidNext.onclick = () => {
//         item.classList.toggle('slider__item_active')
//     };
// })



for (let i = 0; i < slidArrow.length; i++) {
    slidArrow[i].onclick = () => {
        changeSlide(slidArrow[i])
    };
}

function changeSlide(item) {
    // console.log(item)
    slidItem[n].classList.remove('slider__item_active');
    
    if ((n == slidItem.length - 1) && (item == slidNext)) {
        n = 0;
        slidItem[n].classList.add('slider__item_active');
    } else if (item == slidNext) {
            n++
            slidItem[n].classList.toggle('slider__item_active');
        } else {
            if (n == 0) {
                n = slidItem.length - 1;
                slidItem[n].classList.add('slider__item_active');
            } else if ((n !== 0) || (n === slidItem.length - 1)) {
                n--
                slidItem[n].classList.add('slider__item_active');   
            }
        };
};

    
