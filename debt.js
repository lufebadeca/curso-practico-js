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
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    var headersRow = document.createElement("tr");  // creates the first row
      var header1 = document.createElement("td");
      var textHeader1 = document.createTextNode("Instalment");
      header1 .appendChild(textHeader1);
      headersRow.appendChild(header1);

      var header2 = document.createElement("td");
      var textHeader2 = document.createTextNode("Instalment amount");
      header2.appendChild(textHeader2);
      headersRow.appendChild(header2);

      var header3 = document.createElement("td");
      var textHeader3 = document.createTextNode("Interest amount");
      header3.appendChild(textHeader3);
      headersRow.appendChild(header3);

      var header4 = document.createElement("td");
      var textHeader4 = document.createTextNode("Deposit");
      header4.appendChild(textHeader4);
      headersRow.appendChild(header4);

      var header5 = document.createElement("td");
      var textHeader5 = document.createTextNode("balance");
      header5.appendChild(textHeader5);
      headersRow.appendChild(header5);

      // agrega la row al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(headersRow);
      alert(`InterestME: ${interestME} x balance: ${balance} = ${interestME * balance}`);
    
      // Crea las celdas 
    for (var i = 0; i <= rowsNumber; i++) {

        var row = document.createElement("tr");  //creates the first data row

        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la row de la tabla
        var celda0 = document.createElement("td");
        var textoCelda0 = document.createTextNode(`Installment ${i}`);
        celda0.appendChild(textoCelda0);
        row.appendChild(celda0);

        if (i==0){
          var celda1 = document.createElement("td");
          var textoCelda1 = document.createTextNode("--"); //
          celda1.appendChild(textoCelda1);
          row.appendChild(celda1);

          var celda2 = document.createElement("td");
          var textoCelda2 = document.createTextNode("--"); //
          celda2.appendChild(textoCelda2);
          row.appendChild(celda2);

          var celda3 = document.createElement("td");
          var textoCelda3 = document.createTextNode("--"); //installment-interestAmount
          celda3.appendChild(textoCelda3);
          row.appendChild(celda3);

          var celda4 = document.createElement("td");
          var textoCelda4 = document.createTextNode(balance.toFixed(2)); //balance-abono
          celda4.appendChild(textoCelda4);
          row.appendChild(celda4);

        }
        else{
          interestAmount = interestME * balance;
          payment = installment-interestAmount;
          balance = balance-payment;
          
          // Crea las hileras de la tabla
          var celda1 = document.createElement("td");
          var textoCelda1 = document.createTextNode(installment.toFixed(2)); //
          celda1.appendChild(textoCelda1);
          row.appendChild(celda1);

          var celda2 = document.createElement("td");
          var textoCelda2 = document.createTextNode(interestAmount.toFixed(2)); //
          celda2.appendChild(textoCelda2);
          row.appendChild(celda2);

          var celda3 = document.createElement("td");
          var textoCelda3 = document.createTextNode(payment.toFixed(2)); //installment-interestAmount
          celda3.appendChild(textoCelda3);
          row.appendChild(celda3);

          var celda4 = document.createElement("td");
          var textoCelda4 = document.createTextNode(balance.toFixed(2)); //balance-abono
          celda4.appendChild(textoCelda4);
          row.appendChild(celda4);
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