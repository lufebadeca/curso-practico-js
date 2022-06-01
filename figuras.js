console.group("cuadrado");

const ladoCuadrado = 5;
console.log("Lado del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
}

console.log("Perimetro del cuadrado mide: " + perimetroCuadrado(ladoCuadrado) + "cm");

function areaCuadrado(lado){
    return lado*lado;
}

console.log("Area del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm2");

console.groupEnd();

console.group("Triangulo");
const ladoTriangulo1 = 3;
const ladoTriangulo2 = 3;
const baseTriangulo = 2;
const alturaTriangulo = 2.5;
console.log("Lados del Triangulo: " + ladoTriangulo1 + " y " + ladoTriangulo2 + "cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

console.log("Perimetro del Triangulo es: " + perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo) + "cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.log("Area del Triangulo es: " + areaTriangulo(baseTriangulo,alturaTriangulo) + "cm2");
console.groupEnd();

console.group("Circulo");
const radio = 3;
const diametro = 2*radio;
const pi = Math.PI;

console.log("Radio del Circulo: " + radio + "cm");

function perimetroCirculo(diam){
    return pi*diam;
}

console.log("Perimetro del Circulo es: " + perimetroCirculo(diametro) + "cm");

function areaCirculo(rad){
    return (pi*rad*rad);
}

console.log("Area del Circulo es: " + areaCirculo(radio) + "cm2");
console.groupEnd();

function computeP(){
    const inputSquare = document.getElementById("square-input");
    const inputValue = inputSquare.value;
    var perim = perimetroCuadrado(inputValue);
    alert(perim);
}

function computeA(){
    const inputSquare = document.getElementById("square-input");
    const inputValue = inputSquare.value;
    var area = areaCuadrado(inputValue);
    alert(area);
}