burger = document.getElementById('hello');
list =  document.querySelector('.list');
right =  document.querySelector('.right');



document.getElementById('hello').addEventListener('click', ()=>{
    list.classList.toggle('dis');
    right.classList.toggle('dis');
})

