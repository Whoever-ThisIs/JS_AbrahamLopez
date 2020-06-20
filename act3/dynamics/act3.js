//Elige aquí tus valores:)
var columnas = 3;
var filas = 4;

//Calculo de los números de fibonacci hasta el número proporcionado
var a = 1;
var b = 0;
var c = 0;
var numero = 0;
let fibo = [];
var limite = columnas * filas;
while (numero < limite) {
  numero++;
  fibo.push(c);
  c = a + b;
  a = b;
  b = c;
}

//Arreglo para meter al caracol
let caracol = [];
for (var i = 0; i < filas; i++) {
  caracol.push([]);
}

//Inserción en el arreglo
var lim = 0;
//El while y los demás fors permiten que el programa pare en cuanto choque con una pared
//Cada uno de los bloques se encarga de uno de los lados, arriba, derecha, abajo, izquierda
while (fibo.length != 0) {
  var y = lim;
  //Arriba
  for (var x = lim; x < columnas - lim; x++) {
    caracol[y][x] = fibo.shift();
  }
  //Derecha
  if (fibo.length != 0) {
    for (y = lim + 1; y < filas - lim; y++) {
      x = columnas - lim - 1;
      caracol[y][x] = fibo.shift();
    }
    //Abajo
    if (fibo.length != 0) {
      for (x = columnas - lim - 2; x >= lim; x--) {
        y = filas - lim - 1;
        caracol[y][x] = fibo.shift();
      }
      //Izquierda
      if (fibo.length != 0) {
        for (y = filas - lim - 2; y > lim ; y--) {
          x = lim;
          caracol[y][x] = fibo.shift();
        }
      }
    }
  }
  //El lim representa cada vez que ya se ha dado una vuelta al caracol
  lim++;
}
console.log(caracol);
