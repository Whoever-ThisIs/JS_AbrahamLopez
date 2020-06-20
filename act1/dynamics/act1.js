//Variables
var elevadorA = 3;
var elevadorB = -2;
var pisoGama = 0;

//Calculo de diferencia entre cada piso y el actual
var distA = elevadorA - pisoGama;
var distB = elevadorB - pisoGama;

//Si es negativo, se vuelve positivo para poder ser comparados
if (distA < 0) {
  var distA = distA * -1;
}
if (distB < 0) {
  var distB = distB * -1;
}

//Respuesta
if (distA < distB) {
  var cercano = "Gama, el elevador A se encuentra más cerca de tu piso.";
}
else if (distA > distB) {
  var cercano = "Gama, el elevador B se encuentra más cerca de tu piso.";
}
else {
  var cercano = "Gama, ambos elevadores están a la misma distancia de ti.";
}

console.log(cercano);
