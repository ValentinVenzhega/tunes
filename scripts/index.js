import { radioPLayerInit } from './radioPlayer.js';
import { musicPLayerInit } from './musicPlayer.js';
import { videoPLayerInit } from './videoPlayer.js';



const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


// скрытие не нужных блоков
const deactivationPlayer = () => {
   temp.style.display = 'none';
   playerBtn.forEach(item => item.classList.remove('active'));
   playerBlock.forEach(item => item.classList.remove('active'));
   
};

// действие по нажатию на кнопку
playerBtn.forEach((btn, index) => btn.addEventListener('click', () => {
   deactivationPlayer();
   btn.classList.add('active');
   playerBlock[index].classList.add('active');
}));


radioPLayerInit();
musicPLayerInit();
videoPLayerInit();
