"use strict";


const reveal = document.querySelectorAll(".reveal");

reveal.forEach((item) => {
    window.addEventListener("scroll", () => {
        const { top, bottom } = item.getBoundingClientRect();

        if (bottom < 0 || top > window.innerHeight) {
            item.classList.remove("reveal_active");
        } else {
            item.classList.add("reveal_active");
        }
    })
})


