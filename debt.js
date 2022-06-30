function genera_tabla() {
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
    var payment=0;
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    var body2 = document.getElementsByTagName("section")[0];
  
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

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var headersRow  = document.createElement("tr");  // creates the first row
    fillRow("installment", "Installment amount", "interest amount", "Deposit", "Balance", headersRow);

    // agrega la row al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(headersRow);
    
      // Crea las celdas 
    for (var i = 0; i <= rowsNumber; i++) {

        var row = document.createElement("tr");  //creates the first data row

        if (i==0){
          const bal = new Intl.NumberFormat('es-MX').format(balance.toFixed(2));
          fillRow(`Installment ${i}`, "--","--","--", bal, row);
        }
        else{
          interestAmount = interestME * balance;
          payment = installment-interestAmount;
          balance = balance-payment;
          
          const c1 = new Intl.NumberFormat('es-MX').format(installment.toFixed(2));
          const c2 = new Intl.NumberFormat('es-MX').format(interestAmount.toFixed(2));
          const c3 = new Intl.NumberFormat('es-MX').format(payment.toFixed(2));
          const c4 = new Intl.NumberFormat('es-MX').format(balance.toFixed(2));

          fillRow(`Installment ${i}`,c1,c2,c3,c4, row);
        }
      // agrega la row al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(row);
      
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body2.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }