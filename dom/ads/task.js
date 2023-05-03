"use strict";

const rotatorElement = Array.from(document.querySelectorAll(".rotator__case"));
let index = rotatorElement.findIndex((value) =>
  value.classList.contains("rotator__case_active")
);

let timeId = setInterval(() => {
  let dataSet = rotatorElement[index].dataset;
  rotatorElement[index].classList.remove("rotator__case_active");

  if (index == rotatorElement.length - 1) {
    index = 0;
    rotatorElement[index].classList.add("rotator__case_active");
    rotatorElement[index].style.color = dataSet.color;
    rotatorElement[index].style.speed = dataSet.speed;
  } else {
    rotatorElement[index + 1].classList.add("rotator__case_active");
    rotatorElement[index + 1].style.color = dataSet.color;
    rotatorElement[index + 1].style.speed = dataSet.speed;

    index++;
  }
}, 1000);
