var xAlien = 100;
var yAlien = 355;

// key codes 
const teclaW = 87;
const teclaS = 83;
const teclaA = 65;
const teclaD = 68;

function permiteMovimento() {
    return yAlien < 355;
}

velocidadeAlien = 4;
function moveAlien(evento) {
        pincel.drawImage(alien, xAlien, yAlien, 30, 30);
        if (evento.keyCode == teclaW) {
            yAlien -= velocidadeAlien;
        } else if (evento.keyCode == teclaS) {
            if (permiteMovimento()) {
            yAlien += velocidadeAlien;
        }
    }
}

let pontosNegativos = 0;
function verificaColisao() {
    for (let i = 0; i < nave.length; i++) {
        if (xAlien < xNaves[i] + larguraNave - 30 &&
            xAlien + larguraAlien - 30 > xNaves[i] &&
            yAlien < yNaves[i] + alturaNave &&
            yAlien + alturaAlien - 30 > yNaves[i]) {
                yAlien = 355;
                hit.play();
                pontosNegativos--;
        }
    }
}

document.onkeydown = moveAlien;
