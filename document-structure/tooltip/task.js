"use strict";

const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltipActive = document.querySelector(".tooltip_active");
const aTeg = Array.from(document.querySelectorAll("a"));

for (let i = 0; i < hasTooltip.length; i++) {
  hasTooltip[i].addEventListener("click", (evt) => {
    evt.preventDefault();

    const tooltipActive = document.querySelector(".tooltip_active");
    console.log(tooltipActive);
    if (tooltipActive) {
      console.log(true);
      tooltipActive.classList.remove("tooltip_active");
      return;
    }

    const { top, left } = evt.target.getBoundingClientRect();
    const div = document.createElement("div");

    div.className = "tooltip tooltip_active";
    div.textContent = evt.target.getAttribute("title");
    div.setAttribute(
      "style",
      `top: ${top + 20 + "px"}; left: ${left + 20 + "px"};`
    );
    document.body.append(div);
    aTeg[i].insertAdjacentElement("afterEnd", div);
  });
}
