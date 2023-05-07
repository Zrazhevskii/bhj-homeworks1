"use strict";

const rotatorElement = Array.from(document.querySelectorAll(".rotator__case"));


let timeId = setInterval(() => {
  let index = rotatorElement.findIndex((value) =>
  value.classList.contains("rotator__case_active")
  );

  let dataSet = rotatorElement[index].dataset;
  
  rotatorElement[index].classList.remove("rotator__case_active");
  let nextElement = rotatorElement[index].nextElementSibling
  
  if (nextElement === null) {
    index = 0;    
    rotatorElement[index].classList.add("rotator__case_active");
    rotatorElement[index].style.color = dataSet.color;
    rotatorElement[index].style.speed = dataSet.speed;
  } else {
    nextElement.classList.add("rotator__case_active")
    nextElement.style.color = dataSet.color;
    nextElement.style.speed = dataSet.speed;
  }
  
    index++;
  
}, 1000);
