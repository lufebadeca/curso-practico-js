var button = document.getElementById("button_lineas");
var textbox = document.getElementById("label_lineas");

button.addEventListener("click", dibujarFigura);

var area = document.getElementById("canvas1");
var lienzo =area.getContext("2d");

// FUNCIONES:
function dibujarFigura()
{
  var lineas = parseInt(textbox.value); //Importantísimo convertir a número
  var long = area.width;  //MISMA LONGITUD DEL CANVAS
  for (var i = 0; i < long; i+=long/lineas)
  {
    dibujarLinea("pink", 0, i, i, long);  //Esquina Inferior Izquierda
    dibujarLinea("pink", i, long, long, long-i); //Esquina Inferior Derecha
    dibujarLinea("pink", long, i, i, 0); //Esquina Superior Derecha
    dibujarLinea("pink", 0, i, long-i, 0); //Esquina Superior Izquierda
  }
  dibujarLinea("red", 0, 0, long, long);
  dibujarLinea("red", long, 0, 0, long);
  dibujarLinea("black", 0, 0, 0, long);
  dibujarLinea("black", 0, 0, long, 0);
  dibujarLinea("black", 0, long, long, long);
  dibujarLinea("black", long, 0, long, long);
}

function dibujarLinea(color, xi, yi, xf, yf)  //PASOS ORIGINALES PARA CREAR UNA LÍNEA
{
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
