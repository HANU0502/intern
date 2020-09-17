//term and condition
const close = document.querySelector('.popup-close');

const button1 = document.getElementById('privacy1');
const popup1 = document.querySelector('.popup-wrapper1');
button1.addEventListener('click', ()=>{
    popup1.style .display = 'block';
});
close.addEventListener('click', ()=>{
    popup1.style.display = 'none';
});

popup1.addEventListener('click', ()=>{
    popup1.style.display = 'none';
});


//privacy

const button2 = document.getElementById('privacy2');
const popup2 = document.querySelector('.popup-wrapper2');
button2.addEventListener('click', ()=>{
    popup2.style .display = 'block';
});
close.addEventListener('click', ()=>{
    popup2.style.display = 'none';
});
popup2.addEventListener('click', ()=>{
    popup2.style.display = 'none';
});


