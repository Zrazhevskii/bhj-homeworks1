const time = function() {
    let text = document.getElementById("timer");
    text.textContent -= 1;
    if (text.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
        document.location.assign('https://netology.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=brand_all_ou_ya_retarget_abtest_rassrochka_tomi_test&utm_content=13783431871&utm_term=%D0%BD%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F&_openstat=ZGlyZWN0LnlhbmRleC5ydTs4NTQ5MzE5NTsxMzc4MzQzMTg3MTt5YW5kZXgucnU6cHJlbWl1bQ&yclid=8773369652516225023');
    }
}

const intervalId = setInterval(time, 1000);

