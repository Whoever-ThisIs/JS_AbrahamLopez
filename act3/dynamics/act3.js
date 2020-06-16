//Elige aquí tus valores:)
var columnas = 3;
var filas = 4;

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

let caracol = [];
for (var i = 0; i < filas; i++) {
  caracol.push([]);
}

var lim = 0;
while (fibo.length != 0) {
  var y = lim;
  for (var x = lim; x < columnas - lim; x++) {
    caracol[y][x] = fibo.shift();
  }
  if (fibo.length != 0) {
    for (y = lim + 1; y < filas - lim; y++) {
      x = columnas - lim - 1;
      caracol[y][x] = fibo.shift();
    }
    if (fibo.length != 0) {
      for (x = columnas - lim - 2; x >= lim; x--) {
        y = filas - lim - 1;
        caracol[y][x] = fibo.shift();
      }
      if (fibo.length != 0) {
        for (y = filas - lim - 2; y > lim ; y--) {
          x = lim;
          caracol[y][x] = fibo.shift();
        }
      }
    }
  }
  lim++;
}
console.log(caracol);
