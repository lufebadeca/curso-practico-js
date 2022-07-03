const salariesCol = colombia.map(function(person){
    return person.salary;    
});

const salariesColSorted = salariesCol.sort(function(salA,salB){return salA-salB;});
console.group("Colombia's salaries, sorted");
console.log(salariesColSorted);
console.groupEnd();

function computeAverage(salaryList){
    const sumAverages = salaryList.reduce(
        function(accum=0, newElem){
            return accum+newElem;
        });
    var aver = sumAverages/salaryList.length;
    return aver;
}

function computeMedian(list){
    //mediana es el valor del medio
    var median =0;
    if (list.length%2==0){
        halfList = list.length/2;
        median = computeAverage([list[halfList],list[halfList-1]]);
    }
    else {
        median = parseInt(list.length);
    }
    return median;
}

function computeMode(salaryList){
    //crear una lista objeto con {numero: vecesRepetidas}
    const listCount = {};
    salaryList.forEach(function(elem){
        //elem exists in countList?
        if(listCount[elem]){
            listCount[elem]+=1;
        }
        else{
            listCount[elem]=1;
        }
    });
    //countlist has already been fed with {1:xn, 2:yn, 3:zn...}
    //to be able to sort the count list, it has to be converted into a pure array (not object)
    const listCountArray = Object.entries(listCount);
    listCountArraySorted = listCountArray.sort(function(elemA,elemB){return elemB[1]-elemA[1]}); //sorted inversally
    const mode = listCountArraySorted[0];
    return mode;
}
//top 10% averages
function topSalaries(list, top=10){
    const numberOfSal = parseInt(list.length)*top/100;
    const topXsalaries = list.splice(length-numberOfSal,numberOfSal);
    const invertedTopXsalaries = topXsalaries.sort(function(eA,eB){return eB-eA;});
    return invertedTopXsalaries;
}

//general averages
console.group("general averages");
console.log(computeAverage(salariesColSorted));
console.log(computeMedian(salariesColSorted));
console.log(computeMode(salariesColSorted));
console.groupEnd();
//top salaries
console.group("top 10"); console.log(topSalaries(salariesColSorted, 10)); console.groupEnd();

function fillInputsColombia(){
    colombia.forEach(function(element, i){
        var fieldBox = document.getElementById(`sal${i}`);    
        fieldBox.value = element.salary;
    });
}

function computeResults(){
    const salaries = [];

    for (let index = 0; index < 20; index++) {
        var fieldBox = document.getElementById(`sal${index}`);    //taking advantage of the input names
        salaries.push(Number(fieldBox.value));
    }
    sortedSalaries = salaries.sort(function(salA,salB){return salA-salB;});
    console.log(sortedSalaries);
    const avgResult = document.getElementById("average-result");
    var formattedAVG = Number(computeAverage(sortedSalaries).toFixed(2));
    formattedAVG = new Intl.NumberFormat('es-MX').format(formattedAVG);
    avgResult.innerText = formattedAVG;

    const medianResult = document.getElementById("median-result");
    var formattedMedian = Number(computeMedian(sortedSalaries).toFixed(2));
    formattedMedian = new Intl.NumberFormat('es-MX').format(formattedMedian);
    medianResult.innerText = formattedMedian;

    const modeResult1 = document.getElementById("mode-result1");
    var formattedMode = Number(computeMode(sortedSalaries)[0]);
    formattedMode = new Intl.NumberFormat('es-MX').format(formattedMode.toFixed(2));
    modeResult1.innerText = formattedMode;

    const modeResult2 = document.getElementById("mode-result2");
    modeResult2.innerText = computeMode(sortedSalaries)[1];
    const topResult = document.getElementById("top-result");
    topResult.innerText = topSalaries(sortedSalaries);
    const top1 = topSalaries(sortedSalaries);
    const top = colombia.filter(function(elem){return elem.salary==100000000;});
    console.log(top.name);
  }
  



