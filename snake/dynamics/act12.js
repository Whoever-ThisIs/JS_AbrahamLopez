window.onload = function() {
    cvs = document.getElementById("snake");
    ctx = cvs.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,velocidad);
}
let velocity = 20;
while(velocity<1 || velocity > 10){
  velocity = prompt("Del 1 al 10, ¿qué tan rápido quieres jugar? (Mientras más rápido mayor puntaje habra")
  if(velocity<1 || velocity > 10){
    alert("Velocidad no válida")
  }
  else if(velocity == 10){
  alert("Has guiado a Serpi a un lugar peor que un infierno");
  }
}

var velocidad = 1000/(10*velocity);
//Posicion
let px = 10;
let py = px;
//Tamaño de tablero y número de casillas
let nc = 0;
while(nc<2){
  nc = prompt("¿De cuánto por cuánto quieres tu tablero? (Mientras más grande sea el tablero, menos se verá la bonita Serpi y su fruta)")
  if(nc<2){
    alert("Número no válido")
  }
}

let tt = 1000/nc;
//Posición de la fruta
let fx = Math.floor(Math.random()*nc);
let fy = Math.floor(Math.random()*nc);
function fruta(){
  ctx.fillStyle="#69CCEF";
  ctx.fillRect(fx*tt,fy*tt,tt-2,tt-2);
}
//Direccion
let xv = 0;
let yv = xv;

let serpi = [];
let cola = 1;
let puntos = 0;

let izquierda = document.getElementById("Izquierda");
let arriba = document.getElementById("Arriba");
let derecha = document.getElementById("Derecha");
let abajo = document.getElementById("Abajo");

var puntaje = document.getElementById("puntaje");

function game() {
    px += xv;
    py += yv;
    if(px < 0) {
        px = nc - 1;
    }
    if(px > nc - 1) {
        px= 0;
    }
    if(py < 0) {
        py = nc-1;
    }
    if(py > nc - 1) {
        py = 0;
    }
    ctx.clearRect(0,0,cvs.width,cvs.height);

    let cont = 0;
    for(var i = 0 ; i < serpi.length ; i++) {
      if(serpi.length != 1){cont++}
      ctx.fillStyle = "#FEE9A9";
      ctx.fillRect(serpi[i].x*tt,serpi[i].y*tt,tt-2,tt-2);
      if(serpi[i].x==px && serpi[i].y==py && cont > 0) {
          cola = 0;
          alert("Has matado a la bella serpi>:(");
          confirm("¿Quieres ser un ser humano decente y revivir a la preciosisima serpi?")?window.location.reload():alert("Espero te quemes en el infierno lejos del alma de la hermosisima serpi");
      }
    }
    serpi.push({x:px,y:py});
    while(serpi.length>cola) {
      serpi.shift();
    }
    if(fx == px && fy == py) {

        cola++;
        puntos = parseInt(puntos) + parseInt(velocity);

        fx=Math.floor(Math.random()*nc);
        fy=Math.floor(Math.random()*nc);
    }
    if(puntos == 0){
      setTimeout(fruta,10000)
    }
    else{
      ctx.fillStyle="#69CCEF";
      ctx.fillRect(fx*tt,fy*tt,tt-2,tt-2);
    }
    puntaje.innerText = puntos;
}
let d = "";
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
          if (d != "D") {
            xv=-1;yv=0;
            d = "A"
          }
            break;
        case 38:
          if (d != "S") {
            xv=0;yv=-1;
            d = "W"
          }
            break;
        case 39:
          if (d != "A") {
            xv=1;yv=0;
            d = "D"
          }
            break;
        case 40:
          if (d != "W") {
            xv=0;yv=1;
            d = "S"
          }
            break;
    }
}
abajo.onclick = function(){
  if (d != "W") {
    xv=0;yv=1;
    d = "S"
  }
}
izquierda.onclick = function(){
  if (d != "D") {
    xv=-1;yv=0;
    d = "A"
  }
}
arriba.onclick = function(){
  if (d != "S") {
    xv=0;yv=-1;
    d = "W"
  }
}
derecha.onclick = function(){
  if (d != "A") {
    xv=1;yv=0;
    d = "D"
  }
}
