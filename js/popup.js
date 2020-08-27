 const button1 = document.getElementById('privacy1');
const button2 = document.getElementById('privacy2');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


button1.addEventListener('click', ()=>{
    popup.style .display = 'block';
});

button2.addEventListener('click', ()=>{
    popup.style .display = 'block';
});

close.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});