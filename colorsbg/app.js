const body = document.querySelector('body');
const btnChange = document.querySelector('#btnchange');
const span = document.querySelector('h2 span');


const generateColor = () => {
    //let color = '#'
    const colors = "0123456789ABCDEF" 
    let message = '#';
    for( let i = 0; i < 6 ; i++) {
        let color = colors[Math.floor(Math.random() * 16)];
        message = message + color;
    }
    return message;
}

const changeColor = () => {
    //const color = prompt('Escribe un color: ');
    body.style.backgroundColor = generateColor();
    span.innerText = generateColor();
}

btnChange.addEventListener('click', changeColor);