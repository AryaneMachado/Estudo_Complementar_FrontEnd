var valorEmDolar = 64;
var cotacaoDoDolar = 4.9; // Cotação diária

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2); // Atribuição

alert("R$ " + valorEmReal); // Concatenação
