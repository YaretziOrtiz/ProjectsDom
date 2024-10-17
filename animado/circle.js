const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let radio = 1; 
let sentido = true;

setInterval(() => {
    // ctx.clearRect(0,0,600,400);
    ctx.beginPath();
    ctx.fillStyle = `hsl(${radio}, 50%, 60%)`; 
    ctx.arc(300, 200, radio, 0, Math.PI * 2); 
    ctx.fill();
    radio = sentido? radio + 1: radio -1;
    sentido = radio > 300? !sentido: sentido;
    sentido = radio < 1? !sentido: sentido;
}, 5);
