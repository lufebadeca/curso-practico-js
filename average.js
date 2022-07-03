const list1 = [300,400,500,600,700];
const list2 = [300,100000,100,600,500,200];
//100, 200, 300, 500, 600, 100000 => mediana: 300+500/2 = 400
const list3 = [1,2,3,1,2,3,4,2,2,2,1,1,1,1,1];
const list4 = [80, 110,70,110,90];

function getAverage(list){// tailored function, usual for cycle
    let listSum = 0;

    for(let i=0; i<list.length; i++){
        listSum = listSum + list[i];
    }
    
    const average = listSum/list.length;
    return average;
}

const listSum = list1.reduce( // alternate solution, reduce method, uses 1 accumulator and an increment
    function(accumulateVal=0, newElement){
        return accumulateVal+newElement;
    });

console.log(`Promedio por metodo 1 arroja: ${getAverage(list1)}`);
console.log(`Promedio por metodo 2 arroja: ${listSum/list1.length}`);

function getMedian(list){
    list.sort(function(elemA,elemB){return elemA-elemB}); //sorts needs positive, zero and negative values from comparisons
    console.log(list);
    var median = 0.0;
    if(list.length%2==0){
        const halfList = list.length/2;
        median = getAverage([list[halfList],list[halfList-1]]);
    }
    else{
        const halfList = parseInt(list.length/2);
        median = list[halfList];
    }
    return median;
}
console.log(list2);
console.log(getMedian(list2));

const listCount = {}; //objeto para almacenar cada elemento y su cuenta

list3.map(function(element){
    if(listCount[element]){//si el elemento de la lista original existe en la lista indexada de conteo (DICC)...
        listCount[element]+=1;
    }
    else{//si no existe 
        listCount[element]=1;
    }
});
// listCount = {1:7, 2:5, 3:2, 4:1}

console.log(list3);
console.log(listCount);

const listCountArray = Object.entries(listCount); //converts an object into an array (of arrays): [ [1,7],[2,5],[3,2],[4,1] ]
console.log(listCountArray);
const listCountArrayO = listCountArray.sort( // sorts the last array, comparing according to the secod value
    function(elemA, elemB){
        return elemA[1]-elemB[1]; //sort needs a positive, negative or zero for each iteration value to position each element
    });
console.log(listCountArrayO);
const moda = listCountArrayO[listCountArrayO.length-1]; //since array was arranged increasingly, higher count is the last value
console.log(`La moda es ${moda[0]}, con ${moda[1]} repeticiones`);

//Code for computing armonic average
const invertedList = list4.map(
    function(element){
        return 1/element;
});
console.log(invertedList);
const sumInvertedList = invertedList.reduce(function(accum=0, newVal){
    return accum+newVal;
});
console.log(sumInvertedList);
const armonicAverage = list4.length/sumInvertedList;

//Code for computing weighted average
const notas = [ {subject: "calculo", grade: 4.5, weight: 0.3}, {subject: "calculo", grade: 4.2, weight: 0.4},{subject: "calculo", grade: 3.5, weight: 0.3},
{subject: "fisica", grade: 4.0, weight: 0.3},{subject: "fisica", grade: 4.5, weight: 0.3},{subject: "fisica", grade: 4.8, weight: 0.3},
{subject: "dibujo", grade: 5.0, weight: 0.3},{subject: "dibujo", grade: 4.7, weight: 0.3},{subject: "dibujo", grade: 4.8, weight: 0.3} ];

const notasCalculo = notas.filter(function(elem){ //filtro las notas de la amteria calculo
    return elem.subject== "calculo";
})
const notasFisica = notas.filter(function(elem){ //filtro las notas de la subject fisica
    return elem.subject== "fisica";
})
const notasDibujo = notas.filter(function(elem){ //filtro las notas de la subject dibujo
    return elem.subject== "dibujo";
})
console.log(notasCalculo);

function notasPorValor(notasMateria){ //funcion parcial para multiplicar cada grade por su ponderacion
    var notasPorValor = notasMateria.map(
        function(elem){
            return elem.grade*elem.weight;
        });
    return notasPorValor;
}

function sumaDefiniteNote(notasPorValorMateria){ //funcion parcial para sumar los acumulados
    var definite = notasPorValorMateria.reduce(
        function(accum,newVal){
            return accum+= newVal;
        });
    return definite;
    };

function calcularDefinitiva(notasDeMateria){    //funcion final para calcular la definitiva, usando las dos funciones anteriores
    var notesperSub = notasPorValor(notasDeMateria);
    var definite = sumaDefiniteNote(notesperSub);
    return definite;
}

const definitivaCalculo = calcularDefinitiva(notasCalculo);
const definitivaFisica = calcularDefinitiva(notasFisica);
const definitivaDibujo = calcularDefinitiva(notasDibujo);

var definitivas = [];  //create a list to store all the definites
definitivas.push({grade: "calculo",def:definitivaCalculo}, {grade: "fisica", def: definitivaFisica}, {grade: "dibujo",def:definitivaDibujo});
console.log(definitivas);

function computeGrades(){
    const gr1 = document.getElementById("grade1");
    const grade1 = Number(gr1.value);
    const gr2 = document.getElementById("grade2");
    const grade2 = Number(gr2.value);
    const gr3 = document.getElementById("grade3");
    const grade3 = Number(gr3.value);

    const wg1 = document.getElementById("weight1");
    const weight1 = Number(wg1.value/100);
    const wg2 = document.getElementById("weight2");
    const weight2 = Number(wg2.value/100);
    const wg3 = document.getElementById("weight3");
    const weight3 = Number(wg3.value/100);
    if( grade1==0|| grade2==0 || grade3==0|| weight1==0 || weight2==0 || weight3==0){
        alert("Error, you must fill in all fields to continue");
    }
    else{
        if(weight1+weight2+weight3!==1){
            alert("Error, the sum of the grade percentages must be 100%");
        }
        else{
            if(grade1>5 || grade1<0 || grade2>5 || grade2<0 || grade3>5 || grade3<0 || weight1<0 || weight2>5 || weight3<0){
                alert("Error, only possitive values and grades between 0-5 are allowed");
            }
            else{
                const fullGrades = [{subject: "X", grade: grade1, weight: weight1},
                {subject: "X", grade: grade2, weight: weight2},
                {subject: "X", grade: grade3, weight: weight3}  ];
    
                const final = calcularDefinitiva(fullGrades);
                const grades = fullGrades.map(function(elem){return elem.grade});
                const averageSum = grades.reduce(function(accum=0,next){return accum+next;});
                const average = averageSum/fullGrades.length;
    
                const resultAvg = document.getElementById("average-result");
                resultAvg.innerText = average.toFixed(2);
                const resultWeig = document.getElementById("weighted-result");
                resultWeig.innerText = final.toFixed(2);
    
                const periods = fullGrades.map(function(elem, i){
                return {period: i+1, grade: elem.grade};
                });
    
                const orderedGrades = fullGrades.sort(function(elemA, elemB){return elemB.grade-elemA.grade;});
                const highestVal = orderedGrades[0].grade;
    
                const highest = document.getElementById("highest-result");
                highest.innerText = highestVal;
    
                const sortedPeriods = periods.sort(function(elemA,elemB){return elemB.grade-elemA.grade;});
                bestPeriod = sortedPeriods[0].period;
    
                const bestP = document.getElementById("period-result");
                bestP.innerText = bestPeriod;
                }
            }

        }
}

