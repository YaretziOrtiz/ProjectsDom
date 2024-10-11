const container = document.querySelector('.container');
const inputWidth = document.querySelector('#width');
const inputHeight = document.querySelector('#height');
const inputBorderRadius = document.querySelector('#borderRadius');
const inputSombra = document.querySelector('#sombra');

let width = 300;
let height = 300;
let borderRadius = 0;
let sombra = 0;

const generateDiv = () => {
    return `Ancho: ${width}px, Alto: ${height}px, Radio: ${borderRadius}px, Sombra: ${sombra}px`;
};

inputWidth.addEventListener('input', () => {
    width = inputWidth.value;
    container.style.width = width + 'px';
    console.log(generateDiv());
});

inputHeight.addEventListener('input', () => {
    height = inputHeight.value;
    container.style.height = height + 'px';
    console.log(generateDiv());
});

inputBorderRadius.addEventListener('input', () => {
    borderRadius = inputBorderRadius.value;
    container.style.borderRadius = borderRadius + 'px';
    console.log(generateDiv());
});

inputSombra.addEventListener('input', () => {
    sombra = inputSombra.value;
    container.style.boxShadow = `0px 0px ${sombra}px rgba(235, 52, 126, 1)`;
    console.log(generateDiv());
});