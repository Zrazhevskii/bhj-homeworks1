"use strict";

const controlDec = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
);
const controlInc = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
);
const quantityValue = Array.from(
  document.querySelectorAll(".product__quantity-value")
);
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const product = Array.from(document.querySelectorAll(".product"));
const img = Array.from(document.querySelectorAll(".product__image"));
const cartProducts = document.querySelector(".cart__products");

for (let i = 0; i < controlInc.length; i++) {
  controlInc[i].addEventListener("click", () => {
    quantityValue[i].textContent++;
  });
}

for (let i = 0; i < controlDec.length; i++) {
  controlDec[i].addEventListener("click", () => {
    if (quantityValue[i].textContent === "0") {
      return;
    } else {
      quantityValue[i].textContent--;
    }
  });
}

for (let i = 0; i < productAdd.length; i++) {
  productAdd[i].addEventListener("click", () => {
    const dataId = product[i].getAttribute("data-id");
    const imgSrc = img[i].getAttribute("src");
    const products = Array.from(document.querySelectorAll(".cart__product"));

    let allCardId = [];

    for (let s = 0; s < products.length; s++) {
      allCardId[s] = products[s].getAttribute("data-id");
    }

    if (allCardId.indexOf(dataId) !== -1) {
      for (let i = 0; i < allCardId.length; i++) {
        if (allCardId[i] === dataId) {
          let productCount = products[i].querySelector(".cart__product-count");
          productCount.textContent = quantityValue[i].textContent;
        }
      }
    } else {
      cartProducts.innerHTML += `<div class="cart__product" data-id="${dataId}">
                <img class="cart__product-image" src="${imgSrc}">
                <div class="cart__product-count">${quantityValue[i].textContent}</div>
                </div>`;
    }
  });
}
