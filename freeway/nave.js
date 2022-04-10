let yNaves = [100, 180, 250, 35, 135];
let xNaves = [680, 700, 800, 680, 1000];
let velocidadeNaves = [8, 5, 6, 10, 8];

function moveNaves() {
    for (let i = 0; i < nave.length; i++) {
        pincel.drawImage(nave[i], xNaves[i], yNaves[i], larguraNave, alturaNave);
        xNaves[i] -= velocidadeNaves[i];
    }
}

function saiuDaTela(xNaves) {
    return xNaves < -50;
}

function resetNavePosition() {
    for (let i = 0; i < xNaves.length; i++) {
        if (saiuDaTela(xNaves[i])) {
            xNaves[i] = 680;
        }
    }
}

