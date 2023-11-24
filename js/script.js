const mario = document.querySelector('.mario');
const tunel = document.querySelector('.tunel');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
let score = 0;
let lives = 3;
let loop; // Definição da variável de loop

const updateScore = () => {
    score += 10;
    scoreDisplay.textContent = score;
};

const updateLives = () => {
    lives--;
    livesDisplay.textContent = lives;

    if (lives === 0) {
        gameOver();
    }
};

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); 
    }, 500);
    checkCollision();
};

const checkCollision = () => {
    const tunelPosition = tunel.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (tunelPosition <= 120 && tunelPosition && marioPosition < 70) {
        tunel.style.animation = 'none';
        tunel.style.left = `${tunelPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/mario-over.png';

        updateLives();
    } else {
        updateScore();
    }
};

const gameOver = () => {
    clearInterval(loop);
    const gameOverScreen = document.createElement('div');
    gameOverScreen.classList.add('game-over');
    gameOverScreen.innerHTML = `
        <h2>Game Over!</h2>
        <p>Your Final Score: ${score}</p>
        <button onclick="restartGame()">Restart</button>
    `;

    const gameContainer = document.querySelector('.game__board');
    gameContainer.appendChild(gameOverScreen);
};

const restartGame = () => {
    score = 0;
    lives = 3;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;

    const gameOverScreen = document.querySelector('.game-over');
    if (gameOverScreen) {
        gameOverScreen.remove();
    }

    // Reinicie o loop principal do jogo ao reiniciar o jogo
    startGameLoop();
};

const startGameLoop = () => {
    // Define o loop principal do jogo para movimento contínuo e verificações de colisão
    loop = setInterval(() => {
        // Lógica do loop principal (movimento do túnel, do Mario, etc.)
        // Aqui você pode atualizar as posições, verificar colisões, etc.
    }, 10);
};

// Inicia o jogo ao carregar a página
startGameLoop();

document.addEventListener('keydown', jump);
