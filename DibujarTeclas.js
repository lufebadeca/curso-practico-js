var txcolor = document.getElementById("texto_color");
var txpaso = document.getElementById("texto_paso");
var area = document.getElementById("canvas1");
var lienzo = area.getContext("2d");

//var teclas ={UP:38,  DOWN:40,  LEFT:37,  RIGHT:39};
var punto ={XI: area.width/2, YI:area.height/2, XF:area.width/2, YF:area.height/2};

document.addEventListener("keydown", Dibujar);//keyup/keydawn: presionar o soltar tecla
DibujarLinea("black", punto.XI-10, punto.yI-10, punto.XI+10, punto.yI+10);

function Dibujar(evento)
{
  var colore = txcolor.value; //estas variables deben estar dentro de la función
  var paso = parseInt(txpaso.value); //esta también

  switch (evento.keyCode) {
    case 37: punto.XF -= paso; break; //izquierda
    case 38: punto.YF -= paso; break; //arriba
    case 39: punto.XF += paso; break; //derecha
    case 40: punto.YF += paso; break; //abajo

    default: ;
  }
  DibujarLinea(colore, punto.XI, punto.YI, punto.XF, punto.YF);
  punto.XI = punto.XF;
  punto.YI = punto.YF;

console.log(evento.keyCode);
}

function DibujarLinea(color, xi, yi, xf, yf)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xi, yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}
