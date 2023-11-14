const mario = document.querySelector('.mario');
const tunel = document.querySelector('.tunel');
const botao = document.getElementById('botao');
const distancia = document.getElementById("distancia");

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); 
    } , 500);
}

const loop = setInterval(() => {
    console.log('loop')

    const tunelPosition = tunel.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPosition);

    if (tunelPosition <= 120 && tunelPosition && marioPosition < 70) {

        tunel.style.animation = 'none';
        tunel.style.left = `${tunelPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/mario-over.png';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);