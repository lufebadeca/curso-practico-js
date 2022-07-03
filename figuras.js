var area1 = document.getElementById("canvas1");
var lienzo1 =area1.getContext("2d");
var area2 = document.getElementById("canvas2");
var lienzo2 =area2.getContext("2d");
var area3 = document.getElementById("canvas3");
var lienzo3 =area3.getContext("2d");
lienzo1.font = "14px Arial";
lienzo2.font = "14px Arial";
lienzo3.font = "14px Arial";
console.group("lienzos");
console.log(lienzo1, lienzo2, lienzo3);
console.groupEnd();

const ladoCuadrado = 5;

function perimetroCuadrado(lado, base){
    return lado*2 + base*2;
}

function areaCuadrado(lado, base){
    return lado*base;
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
function drawDashLine(lienzo, color, xi, yi, xf, yf)  //PASOS ORIGINALES PARA CREAR UNA LÍNEA
{
  lienzo.setLineDash([5, 2.5]);
  lienzo.strokeStyle= color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
  lienzo.setLineDash([]);
}
function drawSquare(side, base){
    side = Number(side);
    base = Number(base);
    const b=base;
    const h= side;
    var hipo = Math.sqrt(Math.pow(side,2)+Math.pow(base,2));
    ancho = area1.width;
    alto = area1.height;
    lienzo1.clearRect(0, 0, ancho,alto);
    if ( side > base){
        const convers = 100/side;
        side=100;
        base = base*convers;    //here, the smaller dimension gets converted into a proportionally factor
    }else{
        const convers = 100/base;
        base=100;
        side = side*convers;
    }
    drawLine(lienzo1, "blue", (ancho-base)/2, (alto-side)/2, (ancho+base)/2, (alto-side)/2);
    drawLine(lienzo1, "blue", (ancho+base)/2, (alto-side)/2, (ancho+base)/2, (alto+side)/2);
    drawLine(lienzo1, "blue", (ancho+base)/2, (alto+side)/2, (ancho-base)/2, (alto+side)/2);
    drawLine(lienzo1, "blue", (ancho-base)/2, (alto+side)/2, (ancho-base)/2, (alto-side)/2);
    drawDashLine(lienzo1, "gray", (ancho-base)/2, (alto-side)/2, (ancho+base)/2, (alto+side)/2 );
    lienzo1.fillText(`d=${hipo.toFixed(1)}`, ancho/2, alto/2);
    lienzo1.font = "12px Arial";
    lienzo1.fillText(b.toFixed(1), ancho/2-12, (alto+side)/2+11);
    lienzo1.fillText(h.toFixed(1), (ancho-base)/2-22, alto/2+7);
    lienzo1.font = "14px Arial";
}

function drawTriangle(height, base){
    const h = height;
    height = Number(height);
    base = Number(base);
    lienzo3.clearRect(0, 0, 150, 150);
    var ancho = Number(area3.width);
    var alto = Number(area3.height);
    //now, to scale, the base and heights of the triangle are converted to a maximum of 100px.
    if (height>base){
        const convers = 120/height;
        height=120;
        base = base*convers;    //here, the smaller dimension gets converted into a proportionally factor
    }else{
        const convers = 120/base;
        base=120;
        height = height*convers;
    }
    drawLine(lienzo3, "green", ancho/2, (alto-height)/2, (ancho+base)/2, (alto+height)/2);
    drawLine(lienzo3, "green", (ancho+base)/2, (alto+height)/2, (ancho-base)/2, (alto+height)/2);
    drawLine(lienzo3, "green", (ancho-base)/2, (alto+height)/2, ancho/2, (alto-height)/2);
    drawDashLine(lienzo3, "gray", ancho/2, (alto+height)/2, ancho/2, (alto-height)/2 );
    lienzo3.fillText(`h=${h.toFixed(1)}`, ancho/2, alto/2+20);
}

function drawCircle(color, radii){
    lienzo2.clearRect(0, 0, 150,150);
    ancho = area2.width;
    alto = area2.height;
    lienzo2.beginPath();
    lienzo2.strokeStyle = color;
    lienzo2.arc(ancho/2,alto/2,ancho/3,0,2*Math.PI);
    lienzo2.stroke();
    lienzo2.closePath();
    lienzo2.fillText(`r=${radii}`, ancho/2+8, alto/2-5);
    drawDashLine(lienzo2, "gray", ancho/2, alto/2, ancho/2+ancho/3, alto/2);
}

function computeSPA(){
    const inputSquare1 = document.getElementById("square-input1");
    const inputValue1 = inputSquare1.value;
    const inputSquare2 = document.getElementById("square-input2");
    const inputValue2 = inputSquare2.value;
    if (inputValue1==0 || inputValue2==0){
        alert("Error, both base and height must be indicated");
    }
    else{
    var perim = perimetroCuadrado(inputValue1, inputValue2);
    const squarePerimField = document.getElementById("square-perim-result");
    squarePerimField.innerText = `Perimeter = ${perim.toFixed(2)} cm`;
    
    var area = areaCuadrado(inputValue1, inputValue2);
    const squareAreaField = document.getElementById("square-area-result");
    squareAreaField.innerText = `Area = ${area.toFixed(2)} cm2`;
    drawSquare(inputValue1, inputValue2);
    }
}

function computeCPA(){
    const inputDiam = document.getElementById("circle-input");
    const radValue = inputDiam.value/2;
    if (radValue==0 ){
        alert("Error, a radius must be indicated");
    }
    else{
        var perim = perimetroCirculo(radValue*2);
        const circlePerimField = document.getElementById("circle-perim-result");
        circlePerimField.innerText = `Perim = ${perim.toFixed(2)} cm`;
    
        var area = areaCirculo(radValue);
        const circleAreaField = document.getElementById("circle-area-result");
        circleAreaField.innerText = `Area = ${area.toFixed(2)} cm2`;
        drawCircle("red", radValue);
    }
}

function computeTPA(control){
    const inputTrian1 = document.getElementById("trian1-input");
    const lado1 = Number(inputTrian1.value);
    const lado2 = lado1;
    const inputTrian3 = document.getElementById("trianB-input");
    const base = Number(inputTrian3.value);

    if (lado1==0 || lado2==0 || base==0){
        alert("Error, all triangle sides must be indicated");
    }
    else{
        if (lado1 == lado2){    //useless now, before, it was possible to enter the both sides, they they had to be equal
            if (base/2>=lado1){
                alert("Sorry, this triangle is not possible, the base is too large in comparisson with the sides.");
                inputTrian3.innerText ="";
            }
            else{
                var perim = perimetroTriangulo(lado1, lado2, base);
                const triangPerimField = document.getElementById("triangle-perim-result"); 
                triangPerimField.innerText = "Perim: " + perim.toFixed(2) + " cm";
                var hipo = Math.sqrt(Math.pow(lado1,2)-(Math.pow(base,2)/4));
                const heightField = document.getElementById("height-box");
                heightField.innerText = "Height: " + hipo.toFixed(2) + "cm";
                var area = areaTriangulo(base, hipo);
                const triangAreaField = document.getElementById("triangle-area-result");
                triangAreaField.innerText = "Area: " + area.toFixed(2) + " cm2";
                drawTriangle(hipo, base);
                }
        }
        else{
            alert("Error, no isosceles triangle. Unable to compute since sides 1 and 2 are different");
        }
    }
}