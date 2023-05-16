'use strict'

const chatWidget = document.querySelector('.chat-widget')
const message = document.querySelector('.chat-widget__messages')
// const newDate = new Date();
// console.log(newDate);
const input = document.querySelector('.chat-widget__input');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
})

chatWidget.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') { 
        answers(event);
    }  
});



function randomMessage () {
	let botMessages = [
	'Добрый день! До Свидания!',
	'Где ваша совесть?',
	'Вы не купили у нас не чего, разговаривать с вами н будем',
	'Кто тут?',
	'Мы ничего не будем вам продавать',
	'К сожалению все операторы сейчас заняты, не пишите сюда больше',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Пи-пи-пи',
    'Анализируя скорость вашей печати, делаем вывод, что интелект вам чужд'
	];

	let index = Math.floor(Math.random() * botMessages.length);

	return botMessages[index];
}

// console.log(randomMessage());

function answers(event) {    
    let newDate = new Date();
    let timMinutes;
    if (newDate.getMinutes() < 10) {
        timMinutes = `0${newDate.getMinutes()}`
    } else {
        timMinutes = newDate.getMinutes()
    }

    let lst = ''
    
    if ((event.target.value).trim() === '') {
        alert('Нельзя отправлять пустое сообщение!')
    } else {
        message.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${newDate.getHours()}:${timMinutes}</div>
            <div class="message__text">${event.target.value}</div>
        </div>
        `;
        input.value = '';

        message.innerHTML += `
        <div class="message">
            <div class="message__time">${newDate.getHours()}:${timMinutes}</div>
            <div class="message__text">${randomMessage()}</div>
        </div>`;
    }
    scrollMessages();
}

function scrollMessages () {
	let messagesContainer = document.querySelector('.chat-widget__messages-container');
	messagesContainer.scrollTop = message.getBoundingClientRect().height;
}


