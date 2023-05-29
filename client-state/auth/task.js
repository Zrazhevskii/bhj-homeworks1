"use strict";

const signin = document.querySelector(".signin");
const welcome = document.querySelector(".welcome");
const btn = document.getElementById("signin__btn");
const inputName = document.getElementsByName("login")[0];
const inputPassword = document.getElementsByName("password")[0];
const form = document.getElementById("signin__form");
const userId = document.getElementById("user_id");
const requestURL = "https://students.netoservices.ru/nestjs-backend/auth";

if (localStorage.getItem("idUser")) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = `${localStorage.getItem("idUser")}`;
}

async function sendRequest(url, body) {
  if (inputName.value == "" || inputPassword.value == "") {
    alert("Поля должны быть заполнены!");
    form.reset();
  } else {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      let text = await response.text();
      text = JSON.parse(text);
      auth(text["user_id"]);
    } else {
      alert("Ошибка HTTP: " + response.status);
      form.reset();
    }
  }
}

function auth(id) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = `${id}`;
  localStorage.setItem("idUser", id);
}

btn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let body = {
    login: inputName.value,
    password: inputPassword.value,
  };

  sendRequest(requestURL, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
