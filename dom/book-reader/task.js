"use strict";

const fontSizeElement = Array.from(document.querySelectorAll(".font-size"));

let index = fontSizeElement.findIndex((value) => value.classList.contains('font-size_active'));

const colorTitle = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'));

const colorBackground = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'));

const book = document.querySelector(".book");

fontSizeElement.forEach((evt) => {
    evt.addEventListener('click', function(evt) {
        let index = fontSizeElement.findIndex((value) => value.classList.contains('font-size_active'));
        
        fontSizeElement[index].classList.remove('font-size_active');
        this.classList.add('font-size_active');
        // change();
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
        book.classList.add(`book_fs-${this.dataset.size}`)

        evt.preventDefault();
    })
});

colorTitle.forEach((evt) => {
    evt.addEventListener('click', function(evt) {
        
        let colorIndex = colorTitle.findIndex((value) => value.classList.contains('color_active'));
        
        colorTitle[colorIndex].classList.remove('color_active');
        this.classList.add('color_active');
        
        book.classList.remove("book_color-black");
        book.classList.remove("book_color-gray");
        book.classList.remove("book_color-whitesmoke");
        book.classList.add(`book_color-${this.dataset.textColor}`)

        evt.preventDefault();
    })
});

colorBackground.forEach((evt) => {
    evt.addEventListener('click', function(evt) {
        
        let backgroundIndex = colorBackground.findIndex((value) => value.classList.contains('color_active'));
        
        colorBackground[backgroundIndex].classList.remove('color_active');
        this.classList.add('color_active');
        
        book.classList.remove("book_bg-black");
        book.classList.remove("book_bg-gray");
        book.classList.remove("book_bg-white");
        book.classList.add(`book_bg-${this.dataset.bgColor}`);

        evt.preventDefault();
    })
});


