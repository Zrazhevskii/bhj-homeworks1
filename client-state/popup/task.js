"use strict";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const allCookie = document.cookie.split(";");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < allCookie.length; i++) {
    console.log(allCookie[i]);
    if (allCookie[i] === "popup=close") {
      modal.classList.remove("modal_active");
    } else {
      modal.classList.add("modal_active");
    }
  }
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  let date = new Date(Date.now() + 86400e3);
  date = date.toUTCString();
  document.cookie = "popup=close; expires=" + date;
});
