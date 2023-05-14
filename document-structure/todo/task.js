'use strict'

// const taskRemove = Array.from(document.querySelectorAll('.task__remove'))
const taskList = document.querySelector('.tasks__list')
const tasksInput = document.querySelector('.tasks__input')
const tasks = document.querySelector('.tasks')
const divInput = Array.from(document.querySelectorAll('.task'))
const task = document.querySelector('.task')

const taskAdd = document.querySelector('.tasks__add');

taskAdd.addEventListener('click', (evt) => {
    createMessege(evt)
})

tasks.addEventListener('keydown', (evt) => {
    if (evt.code === 'Enter') { 
        createMessege(evt);
    }  
})

function createMessege(evt) {

    if (tasksInput.value === '') {
        return
    } else {
        const div = document.createElement("div");
        div.className = 'task'
        div.innerHTML += `<div class="task__title">${tasksInput.value}</div>
                        <a href="#" class="task__remove">&times;</a>`;
        taskList.prepend(div);
        tasksInput.value = ''
    }
    
}

taskList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains("task__remove")) {
        evt.target.parentElement.remove();
      }
})
