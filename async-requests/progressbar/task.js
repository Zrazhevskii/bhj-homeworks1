'use strict'

const requestURL = "https://students.netoservices.ru/nestjs-backend/upload"
const formt = document.getElementById('form')
const progress = document.querySelector('#progress')
const fileInput = document.getElementById('file')

formt.addEventListener('submit', function(evt) {
    evt.preventDefault()

    try {
        const fileUpload = fileInput.files[0]
        const formData = new FormData()
        let xhr = new XMLHttpRequest();

        formData.append('file', fileUpload)
        
        xhr.upload.onprogress = function (event) {
            progress.value = (event.loaded / event.total);
        }

        xhr.open("POST", requestURL);
        xhr.send(formData);
    } catch (err) {
        alert(err.stack);
        alert(err); 
    }
})
