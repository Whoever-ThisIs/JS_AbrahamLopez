//Variables
let min = 0;
let intervalos = [];
let forprecise, sek, time;
let centiseconds = 0;

//Canvas
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var radio = cvs.height / 2;
ctx.translate(radio, radio);
radio = radio * 0.90;
boceto(ctx,radio)
movimiento(ctx,radio,centiseconds)
//Boton de inicio
document.getElementById("iniciar").addEventListener("click",()=>{
  document.getElementById("botones").innerHTML = "<button type='button' id='reset'>Reiniciar</button>"+
  "<button type='button' id='halt'>Pausar</button>";
  clock();
});

//Pone el reloj en marcha
function clock(){
  //Botón de reinicio
  document.getElementById("reset").addEventListener("click",()=>{
    window.location.reload();
  });
  //Boton de intervalo mete el nuevo intervalo en un arreglo que se hace tabla
  document.getElementById("interval").addEventListener("click",()=>{
      intervalos.push(min+"."+Math.round(sek));
      let uno = "<tr><th>Número de vuelta</th><th>Tiempo</th></tr>";
      for (var i = 0; i < intervalos.length; i++) {
        uno += "<tr><td>"+i+"</td><td>"+intervalos[i]+"</td></tr>";
        document.getElementById("intervalo").innerHTML = uno;
      }
  });

//Interval que funciona de contador y cronómetro
  var crono = setInterval(()=>{
    centiseconds++;
    time = centiseconds/100;
    sek = Math.round(time - (min*60));
    if (time === 60*(min+1)) {
      min++;
    }
    //Muestra el tiempo
    document.getElementById("mostrarseg").innerText = min+":"+sek;
    //Botón de pausa
    document.getElementById("halt").addEventListener("click",()=>{
      clearInterval(crono);
      document.getElementById("botones").innerHTML = "<button type='button' id='reset'>Reiniciar</button>"+
      "<button type='button' id='weiter'>Reanudar</button>";
      //Botón de reanudar
      document.getElementById("weiter").addEventListener("click",()=>{
        document.getElementById("botones").innerHTML = "<button type='button' id='reset'>Reiniciar</button>"+
        "<button type='button' id='halt'>Pausar</button>";
        clock();
      });
    });
    boceto(ctx,radio)
    movimiento(ctx,radio,centiseconds)
  },10);
}

//Dibuja el reloj
function boceto(ctx, radio) {
  var grad;

  ctx.beginPath();
  ctx.arc(0, 0, radio, 0, 2 * Math.PI);
  //Cambio de colores por minuto
  if (min%2 === 0) {
    ctx.fillStyle = '#FF9F1C';
  }
  else {
    ctx.fillStyle = '#59C9A5';
  }
  ctx.fill();
//Gradiente sútil de marco
  grad = ctx.createRadialGradient(0, 0 ,radio * 0.95, 0, 0, radio * 1.05);
  grad.addColorStop(0, '#23395B');
  grad.addColorStop(0.5, '#302d31');
  grad.addColorStop(1, '#23395B');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radio*0.1;
  ctx.stroke();
}
//Establece segundos a grados
//Desgraciadamente no encontre el número exacto para poder tener cambios perfectos
function movimiento(ctx, radio,centiseconds){
  var centisecondsa = (centiseconds*Math.PI/52.211);
  var centisecondsb = (centiseconds*Math.PI/-52.211);
  drawHand(ctx, centisecondsa,centisecondsb, radio*0.000001);
}

//Dibuja los círculos convirtiendo los grados en radianes
function drawHand(ctx, posA,posB, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.stroke();
  if (min%2 === 0) {
    ctx.arc(0,0, radio*.95, (posB*Math.PI/180)-Math.PI/2, 0-Math.PI/2);
  }else{
    ctx.arc(0,0, radio*.95, (posA*Math.PI/180)-Math.PI/2, 0-Math.PI/2);
  }
  ctx.fillStyle = '#FF9F1C';
  ctx.fill();
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.stroke();
  if (min%2 === 0) {
    ctx.arc(0,0, radio*.95,(posA*Math.PI/180)-Math.PI/2, 0-Math.PI/2);
  }
  else {
    ctx.arc(0,0, radio*.95,(posB*Math.PI/180)-Math.PI/2), 0-Math.PI/2;
  }
  ctx.fillStyle = '#59C9A5';
  ctx.fill();
}
