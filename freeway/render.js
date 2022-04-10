let larguraNave = 55;
let alturaNave = 40;
let larguraAlien = 50;
let alturaAlien = 50;
var nave = [nave1, nave2, nave3, nave4, nave5];

window.onload = function() {
    var space = document.getElementById('space');
    var alien = document.getElementById('alien');
    var portal = document.getElementById('portal');
    nave[0] = document.getElementById('nave1');
    nave[1] = document.getElementById('nave2');
    nave[2] = document.getElementById('nave3');
    nave[3] = document.getElementById('nave4');
    nave[4] = document.getElementById('nave5')
    pincel.drawImage(space, 0, 0, 700, 400);
    pincel.drawImage(alien, xAlien, yAlien, larguraAlien, alturaAlien);
    pincel.drawImage(portal, 105, 10, 50, 50);
    for (let i = 0; i < nave.length; i++) {
        pincel.drawImage(nave[i], xNaves[i], yNaves[i], larguraNave, alturaNave);
    }
}

function carregaCenario() {
    pincel.drawImage(space, 0, 0, 700, 400);
    pincel.drawImage(portal, 100, 0, 30, 30);
}