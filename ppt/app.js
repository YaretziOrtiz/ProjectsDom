const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceuser');
const imgCompu = document.querySelector('#choicecompu');
const resultMessage = document.querySelector('.result span');

const choices = ['rock', 'paper', 'scissors'];

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageUser = image.src;

    imgUser.src = imageUser;

    play(choiceUser);
}

const play = (choiceUser) => {
    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    let message = '';

    imgCompu.src = `./${choiceCompu}.png`;

    if (choiceUser === choiceCompu) {
        message = 'Empate!';
    } else if (
        (choiceUser === 'rock' && choiceCompu === 'scissors') ||
        (choiceUser === 'paper' && choiceCompu === 'rock') ||
        (choiceUser === 'scissors' && choiceCompu === 'paper')
    ) {
        message = 'Ganaste! 😎';
    } else {
        message = 'Perdiste. 😭😭';
    }

    resultMessage.textContent = message;
}

images.forEach(image => image.addEventListener('click', getChoiceUser));
