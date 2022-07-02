var activeTable=0;
function genera_tabla() {
  function fillRow(first, second, third, fourth, fifth, row){
    const rowList = [first, second, third, fourth, fifth];
    for (let index = 0; index < rowList.length; index++) { // Crea un elemento <td> y un nodo de texto, haz que el nodo
      // de texto sea el contenido de <td>, ubica el elemento <td> al final de la fila (row)     
      var cell = document.createElement("td");
      var cellText = document.createTextNode(rowList[index]);
      cell .appendChild(cellText);
      row.appendChild(cell);
    }
  }

  if(activeTable==1){
    const previousTable = document.getElementById("table1");
    previousTable.remove();
  }

  const fullAmountBox = document.getElementById("full-price");
  const fullAmount = fullAmountBox.value;
  const fundedPercBox = document.getElementById("funded-percentage");
  const fundedPerc = fundedPercBox.value;
  const loanAmount = fullAmount*fundedPerc/100;
  const loanAmountBox = document.getElementById("loan-amount");
  loanAmountBox.value = loanAmount;
  const interestAEBox = document.getElementById("interest-rateAE");
  const interestAE = interestAEBox.value/100;
  const loanYearsBox = document.getElementById("years");
  const loanYears = loanYearsBox.value;

  const months = loanYears*12;
  const loanMonthsBox = document.getElementById("months");
  loanMonthsBox.value = months;
  const interestME = (Math.pow((1+interestAE),(1/12))-1);

  const monthInterestBox = document.getElementById("interest-rateME");
  monthInterestBox.value = (interestME*100).toFixed(2);
  const installment = (loanAmount * interestME ) / (1-Math.pow(1+interestME,-months));
  const installmentBox = document.getElementById("installment");
  installmentBox.value = installment.toFixed(2);

  const rowsNumber = months;
  var balance = loanAmount;
  var interestAmount;
  var deposit=0;
  var totalInstallments=installment*months;
  var totalInterest=0;
  var totalDeposit=0;
  // Obtener la referencia del elemento body: not body, section better
  const pageSection = document.getElementsByTagName("section")[0]; //bc I want to insert the table in the section

  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var headersRow  = document.createElement("tr");  // creates the first row
  fillRow("Installment", "Installment amount", "Interest amount", "Deposit to debt", "Balance", headersRow);

  // agrega la row al final de la tabla (al final del elemento tblbody)
  tblBody.appendChild(headersRow);
  
    // Crea las celdas de numeros 
  for (var i = 0; i <= rowsNumber; i++) {
    var row = document.createElement("tr");  //creates the first data row
    if (i==0){
      const bal = new Intl.NumberFormat('es-MX').format(balance.toFixed(2));
      fillRow(`Installment ${i}`, "--","--","--", bal, row);
    }
    else{
      interestAmount = interestME * balance;
      totalInterest += interestAmount;
      deposit = installment-interestAmount;
      totalDeposit+= deposit;
      balance -= deposit;
      
      const c1 = new Intl.NumberFormat('es-MX').format(installment.toFixed(2));
      const c2 = new Intl.NumberFormat('es-MX').format(interestAmount.toFixed(2));
      const c3 = new Intl.NumberFormat('es-MX').format(deposit.toFixed(2));
      const c4 = new Intl.NumberFormat('es-MX').format(Math.abs(balance.toFixed(2)) );

      fillRow(`Installment ${i}`,c1,c2,c3,c4, row);
    }
  // agrega la row al final de la tabla (al final del elemento tblbody)
  tblBody.appendChild(row);
  }
  const t1 = new Intl.NumberFormat('es-MX').format(totalInstallments.toFixed(2));
  const t2 = new Intl.NumberFormat('es-MX').format(totalInterest.toFixed(2));
  const t3 = new Intl.NumberFormat('es-MX').format(totalDeposit.toFixed(2));

  var totalsRow = document.createElement("tr");  //creates the last/totals row
  fillRow("Total:",t1,t2,t3,"--",totalsRow);
  tblBody.appendChild(totalsRow);
  
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  pageSection.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
  tabla.setAttribute("id", "table1");
  activeTable=1;
}