"use strict";

const pollTitle = document.querySelector(".poll__title");
const pollAnswer = document.querySelector(".poll__answers");
const poll = document.querySelector(".poll");

const xhr = new XMLHttpRequest();

xhr.timeout = 1000;
xhr.ontimeout = function () {
  alert("Превышено время запроса, попробуйте еще раз");
};

xhr.addEventListener("readystatechange", function () {
  if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
    const json = JSON.parse(this.responseText);
    const obj = Object.values(json.data.answers);

    pollTitle.innerHTML = json.data.title;

    for (let i = 0; i < obj.length; i++) {
      const btn = document.createElement("button");
      btn.classList.add("poll__answer");
      btn.textContent = obj[i];
      pollAnswer.append(btn);
    }
    const buttons = Array.from(document.querySelectorAll(".poll__answer"));

    buttons.forEach((elem) => {
      elem.addEventListener("click", () => {
        for (let i = 0; i < obj.length; i++) {
          if (obj[i] == elem.textContent) {
            postRequest(`${json.id}`, `${i}`);
            alert("Спасибо, ваш голос засчитан!");
          }
        }
      });
    });
  }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

function postRequest(vote, answer) {
  const xhrPost = new XMLHttpRequest();

  xhrPost.addEventListener("readystatechange", function () {
    if (xhrPost.readyState === xhrPost.DONE) {
      const json = JSON.parse(this.responseText);
      pollAnswer.innerHTML = "";
      let div = document.createElement("div");
      for (let stat of json.stat) {
        div.innerHTML += `<div>${stat.answer}: ` + `${stat.votes}%</div>`;
      }
      pollAnswer.append(div);
    }
  });
  xhrPost.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
  xhrPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhrPost.send(`vote=${vote}&answer=${answer}`);
}
