const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

// key codes 
const teclaW = 87;
const teclaS = 83;
const teclaA = 65;
const teclaD = 68;

var xAlien = 100;
var yAlien = 360;

window.onload = function() {
  var space = document.getElementById('space');
  var alien = document.getElementById('alien');
  var nave1 = document.getElementById('nave1');
  pincel.drawImage(space, 0, 0, 700, 400);
  pincel.drawImage(alien, 100, 360, 45, 40);
  pincel.drawImage(nave1, 680, 65, 50, 50);
}

var xNave = 680;
function moveNave(){
    pincel.drawImage(nave1, xNave, 65, 50, 50);
    xNave -= 2;
}

function moveAlien(evento) {
  if (evento.keyCode == teclaA) {
      xAlien -= 4;
  } else if (evento.keyCode == teclaD) {
      xAlien += 4;
  } else if (evento.keyCode == teclaW) {
      yAlien -= 4;
  } else if (evento.keyCode == teclaS) {
      yAlien += 4;
  }
}

function limpaTela() {
  pincel.clearRect(0, 0, 700, 400);
}  

function atualizaJogo() {
  limpaTela();
  pincel.drawImage(space, 0, 0, 700, 400);
  pincel.drawImage(alien, xAlien, yAlien, 45, 40);
  moveNave();
  moveAlien();
}


document.onkeydown = moveAlien;
setInterval(atualizaJogo, 20);