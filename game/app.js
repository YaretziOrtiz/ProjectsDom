const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = "20px serif";

let score = 0;
let highScore = localStorage.getItem('highScore') || 0; 
document.getElementById('highScore').textContent = `Mayor puntaje: ${highScore}`;

let snake = [ 
    {
        x: 2,
        y: 1,
        show: function(){
            ctx.fillText('🟢', this.x * 20, this.y * 20);
        }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        show: function(){
            ctx.fillText('🟢', this.x * 20, this.y * 20);
        }
    },
    {
        x: 0,
        y: 1,
        xSig: 1,
        ySig: 1,
        show: function(){
            ctx.fillText('🟢', this.x * 20, this.y * 20);
        }
    }
];

const food = {
    x: 0,
    y: 0, 
    show: function(){
        ctx.fillText('🍎', this.x * 20, this.y * 20);
    },
    aparece: function(){
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 1;
    }
}

function checkCollision() {
    const head = snake[0]; 
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function checkEat(){
    if(snake[0].x === food.x && snake[0].y === food.y){
        food.aparece();
        snake.push({...snake[1]});
        
        score++;
        document.getElementById('score').textContent = `Puntaje: ${score}`;
        
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore); 
            document.getElementById('highScore').textContent = `Mayor puntaje: ${highScore}`;
        }
    }
}

function nextMove(x, y){
    snake.forEach((item, idx) => {
        if(idx === 0){
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx - 1].x;
            item.ySig = snake[idx - 1].y;
        }
    })
}

function resetGame() {
    score = 0;
    document.getElementById('score').textContent = `Puntaje: ${score}`;

    snake = [ 
        { x: 2, y: 1, show: snake[0].show },
        { x: 1, y: 1, xSig: 2, ySig: 1, show: snake[1].show },
        { x: 0, y: 1, xSig: 1, ySig: 1, show: snake[2].show }
    ];
    
    food.aparece();
    
    direction = 1;
    x = 2;
    y = 1;
}

let direction = 1;
let x = 2;
let y = 1;

food.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    snake.forEach(i => i.show());
    food.show();
    checkEat();
    
    if (checkCollision()) {
        alert("¡Perdiste! 😿");
        resetGame();
    }

    if(direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;
    
    // Validar límites
    if(x > 29) x = 0;
    else if(x < 0) x = 29;
    if(y > 20) y = 1;
    else if(y < 1) y = 20;
}, 150);

document.querySelector('body')
    .addEventListener('keydown', e => {
        if(e.key === 'ArrowRight') direction = 1;
        if(e.key === 'ArrowDown') direction = 2;
        if(e.key === 'ArrowLeft') direction = 3;
        if(e.key === 'ArrowUp') direction = 4;
});
