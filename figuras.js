var area1 = document.getElementById("canvas1");
var lienzo1 =area1.getContext("2d");
console.group("lienzos");
var area2 = document.getElementById("canvas2");
var lienzo2 =area2.getContext("2d");
var area3 = document.getElementById("canvas3");
var lienzo3 =area3.getContext("2d");
console.log(lienzo1, lienzo2, lienzo3);
console.groupEnd();

const ladoCuadrado = 5;

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

const radio = 3;
const diametro = 2*radio;
const pi = Math.PI;

function perimetroCirculo(diam){
    return pi*diam;
}

function areaCirculo(rad){
    return (pi*rad*rad);
}

function drawLine(lienzo, color, xi, yi, xf, yf)  //PASOS ORIGINALES PARA CREAR UNA LÍNEA
{
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
function drawSquare(){
    lienzo1.clearRect(0, 0, 150,150);
    ancho = area1.width;
    alto = area1.height;
    drawLine(lienzo1, "blue", ancho/6, alto/6, ancho*5/6, alto/6);
    drawLine(lienzo1, "blue", ancho*5/6, alto/6, ancho*5/6, alto*5/6);
    drawLine(lienzo1, "blue", ancho*5/6, alto*5/6, ancho/6, alto*5/6);
    drawLine(lienzo1, "blue", ancho/6, alto*5/6, ancho/6, alto/6);
}
function drawTriangle(height, base){
    lienzo3.clearRect(0, 0, 150, 150);
    var ancho = Number(area3.width);
    var alto = Number(area3.height);
    //now, to scale, the base and heights of the triangle are converted for a maximum of 100px.
    if (height>base){
        const convers = 100/height;
        height=100;
        base = base*convers;    //here, the smaller dimension gets converted into a proportionally factor
    }else{
        const convers = 100/base;
        base=100;
        height = height*convers;
    }
    drawLine(lienzo3, "green", ancho/2, (alto-height)/2, (ancho+Number(base))/2, (alto+Number(height))/2);
    drawLine(lienzo3, "green", (ancho+Number(base))/2, (alto+Number(height))/2, (ancho-base)/2, (alto+Number(height))/2);
    drawLine(lienzo3, "green", (ancho-base)/2, (alto+height)/2, ancho/2, (alto-height)/2);
}

function drawCircle(color){
    lienzo2.clearRect(0, 0, 150,150);
    ancho = area2.width;
    alto = area2.height;
    lienzo2.beginPath();
    lienzo2.strokeStyle = color;
    lienzo2.arc(ancho/2,alto/2,ancho/3,0,2*Math.PI);
    lienzo2.stroke();
    lienzo2.closePath();
}

function computeP(){
    const inputSquare = document.getElementById("square-input");
    const inputValue = inputSquare.value;
    var perim = perimetroCuadrado(inputValue);
    const squarePerimField = document.getElementById("square-perim-result");
    squarePerimField.innerText = `Perimeter = ${perim.toFixed(2)} cm`;
}

function computeA(){
    const inputSquare = document.getElementById("square-input");
    const inputValue = inputSquare.value;
    var area = areaCuadrado(inputValue);
    const squareAreaField = document.getElementById("square-area-result");
    squareAreaField.innerText = `Area = ${area.toFixed(2)} cm2`;
    drawSquare();
}
function computeCP(){
    const inputRad = document.getElementById("circle-input");
    const radValue = inputRad.value;
    var perim = perimetroCirculo(radValue*2);
    const circlePerimField = document.getElementById("circle-perim-result");
    circlePerimField.innerText = `Perim = ${perim.toFixed(2)} cm`;
}

function computeCA(){
    const inputRad = document.getElementById("circle-input");
    const radValue = inputRad.value;
    var area = areaCirculo(radValue);
    const circleAreaField = document.getElementById("circle-area-result");
    circleAreaField.innerText = `Area = ${area.toFixed(2)} cm2`;
    drawCircle("red");
}
function computeTP(){
    const inputTrian1 = document.getElementById("trian1-input");
    const lado1 = Number(inputTrian1.value);
    const inputTrian2 = document.getElementById("trian2-input");
    const lado2 = Number(inputTrian2.value);
    const inputTrian3 = document.getElementById("trianB-input");
    const base = Number(inputTrian3.value);
    var perim = perimetroTriangulo(lado1, lado2, base);
    const triangPerimField = document.getElementById("triangle-perim-result"); 
    triangPerimField.innerText = "Perim: " + perim.toFixed(2) + " cm";
}


function computeTA(control){
    const inputTrian1 = document.getElementById("trian1-input");
    const lado1 = Number(inputTrian1.value);
    const inputTrian2 = document.getElementById("trian2-input");
    const lado2 = Number(inputTrian2.value);
    const inputTrian3 = document.getElementById("trianB-input");
    const base = inputTrian3.value;
    if (lado1==0 || lado2==0 || base==0){
        alert("Error, all triangle sides must be indicated");
    }
    else{
        if (lado1 == lado2){
            if (base/2>=lado1){
                alert("Sorry, this triangle is not possible, the base is too large in comparisson with the sides.");
                inputTrian3.innerText ="";
            }
            else{
                var hipo = Math.sqrt(Math.pow(lado1,2)-(Math.pow(base,2)/4));
                const heightField = document.getElementById("height-box");
                heightField.innerText = "Height: " + hipo.toFixed(2) + "cm";
                if(control==2){
                    var area = areaTriangulo(base, hipo);
                    const triangAreaField = document.getElementById("triangle-area-result");
                    triangAreaField.innerText = "Area: " + area.toFixed(2) + " cm2";
                    drawTriangle(hipo, base);
                    }
                }
        }
        else{
            alert("Error, no isosceles triangle. Unable to compute since sides 1 and 2 are different");
        }
    }
}