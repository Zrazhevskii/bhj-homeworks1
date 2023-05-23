'use strict'

const xhr = new XMLHttpRequest()
const loader = document.querySelector('.loader')
const items = document.querySelector('#items')

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')

xhr.onreadystatechange = function () {
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        const json = JSON.parse(this.responseText)
        const obj = Object.values(json.response.Valute)
        for (let valut of obj) {
            let div = document.createElement('div')
            div.classList.add('item')
            div.innerHTML = `<div class="item__code">
                ${valut["CharCode"]}
                </div>
                <div class="item__value">
                ${valut["Value"]}
                </div>
                <div class="item__currency">
                    руб.
                </div>`
            items.append(div)    
        }
    loader.classList.remove('loader_active')
    }
}

xhr.send();

