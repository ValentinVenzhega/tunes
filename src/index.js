import { radioPlayerInit } from './module/radioPlayer.js';
import { musicPlayerInit } from './module/musicPlayer.js';
import { videoPlayerInit } from './module/videoPlayer.js';



const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const stopRadioPlayer = radioPlayerInit();
const stopVideoPlayer = videoPlayerInit();
const stopAudioPlayer = musicPlayerInit();



// скрытие не нужных блоков
const deactivationPlayer = () => {
   temp.style.display = 'none';
   playerBtn.forEach(item => item.classList.remove('active'));
   playerBlock.forEach(item => item.classList.remove('active'));
   

   stopVideoPlayer();
   stopRadioPlayer();
   // stopAudioPlayer();
};

// действие по нажатию на кнопку
playerBtn.forEach((btn, index) => btn.addEventListener('click', () => {
   deactivationPlayer();
   btn.classList.add('active');
   playerBlock[index].classList.add('active');
}));





