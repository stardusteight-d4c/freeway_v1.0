const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

const backgroundMusic = new Audio('sounds/bensound-psychedelic.mp3')
const hit = new Audio('sounds/hitExplosion.mp3');
const ponto = new Audio('sounds/ponto.mp3');

let pontosPostivos = 0;
function marcaPonto() {
  if (yAlien < 10) {
    pontosPostivos++
    ponto.play();
    yAlien = 355;
  } 
}

function mostraPontos(pontos, x, y, cor='white') {
  pincel.font = "40px Georgia";
  pincel.fillStyle = cor;
  pincel.fillText(pontos, x, y); 
}

function limpaTela() {
  pincel.clearRect(0, 0, 700, 400);
} 

function atualizaJogo() {
  backgroundMusic.play();
  limpaTela();
  carregaCenario();
  moveNaves();
  marcaPonto();
  mostraPontos(pontosPostivos, 250, 40, 'blue')
  mostraPontos(pontosNegativos, 450, 40, 'red');
  verificaColisao();
  resetNavePosition();
  moveAlien();  
}

setInterval(atualizaJogo, 20);
