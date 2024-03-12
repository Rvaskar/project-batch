let image = document.querySelector('img')
let prevBtn = document.querySelector('.fa-chevron-left')
let nextBtn = document.querySelector('.fa-chevron-right')


Storage = [
    './img/heeriye.jpg','./img/kahani suno.jpg','./img/shiv spirit.jpg','./img/shiv stotram.jpg','./img/shiv tandav.jpg'
]

let index = 0;

setInterval(() => {
    index = (index + 1) % Storage.length;
    image.src = Storage[index]
}, 3000);

nextBtn.addEventListener('click', ()=>{
    index = (index + 1) % Storage.length;
    image.src = Storage[index]

})
prevBtn.addEventListener('click', ()=>{
     index = (index - 1 + Storage.length) % Storage.length;
    image.src = Storage[index]

})