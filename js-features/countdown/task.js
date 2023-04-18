const time = function() {
    let text = document.getElementById("timer");
    text.textContent -= 1;
    if (text.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
        document.location.assign('https://blank-dogovor-kupli-prodazhi.com/files/%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%20%D0%BA%D1%83%D0%BF%D0%BB%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F%202020.docx');
    }
}

const intervalId = setInterval(time, 1000);

