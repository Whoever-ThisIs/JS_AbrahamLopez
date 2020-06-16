var entero = prompt("Dame un número entero mayor a uno");
let primos = [];
let divisores = [];
let regex = /\d+/i;
if (entero <= 1) {
  var oye = "T e   d i j e   q u e   m a y o r   a   u n o  >:(";
  console.log(oye);
}
else if (entero.search(regex) == "-1") {
  var oye = "Solo acepto números, mi buen.";
  console.log(oye);
}
else {
  for (var numero = 1; numero < entero; numero++) {
    var validador = 0;
    for(var contador = 1; contador < numero; contador++){
      if(numero % contador == 0){
        validador++;
      }
    }
    if (validador == 1) {
      primos.push(numero);
    }
  }
  var validador2 = 0;
  for (var i = 0; i < primos.length; i++) {
    var primo = primos.shift();
    if (entero % primo == 0) {
      divisores.push(primo);
    }
  }
  if (divisores.length === 0) {
    var frase = "El número " + entero +" es un número primo por si mismo.";
  }
  else {
    var frase = "Los números primos " + divisores + " son divisores del número " + entero + ".";
  }
  console.log(frase);
}
