const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'black';
pincel.fillRect(0, 0, 700, 400); 

let xNave = 600;

carregaImagem('images/space.png', 0, 0, 700, 400);
carregaImagem('images/alien.png', 100, 360, 45, 40);
carregaImagem('images/nave1.png', xNave, 65, 50, 50);


function carregaImagem(url, xLocation, yLocation, maxWidth, minHeight) {
  const image = new Image();
  image.src = url;
  image.onload = () => {
    pincel.drawImage(image, xLocation, yLocation, maxWidth, minHeight);
  }
}


function moveNave(x, y) {
  xNave = x;
  xNave -= 2;
}





