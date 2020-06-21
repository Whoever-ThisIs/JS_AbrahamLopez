let grad = false;
cvs = document.getElementById("canvas");
ctx = cvs.getContext("2d");
setInterval(()=>{
  var canvasColor = document.getElementById("canvascolor").value;
  var shapeColor = document.getElementById("shapecolor").value;
  var border = document.getElementById("border").value;
  var figura = document.getElementById("figura").value;
  cvs.style.backgroundColor = canvasColor;
  ctx.strokeStyle=border;
  if(document.getElementById("check").checked){
    document.getElementById("form").innerHTML = "Selecciona el color del canvas: <input type='color' id='canvascolor'><br><br>"+
      "Selecciona el color de la figura: <input type='color' id='shapecolor'><br><br>"+
      "Selecciona el color del borde: <input type='color' id='border'><br><br>"+
      "<input type='checkbox' id='check'>¿Sin gradiente?<br><br>"+
      "<input type='radio' name='tipo' id='tipoA'>Linear  <input type='radio' name='tipoB' value='1' id='tipo'>Radial<br><br>"+
      "Selecciona el color 1 del gradiente: <input type='color' id='gradA'><br><br>"+
      "Selecciona el color 2 del gradiente: <input type='color' id='gradB'><br><br>"+
      "Selecciona la figura: <select class='' id='figura'>"+
        "<option value='rectangulo'>Rectángulo</option>"+
        "<option value='circulo'>Círculo</option>"+
        "<option value='mickey'>Mickey</option>"+
      "</select>";
    // grad = true;
    // var gradA = document.getElementById("gradA").value;
    // var gradB = document.getElementById("gradB").value;
    // if(document.getElementById("check").checked){
    //   window.location.reload();
    // }
  }
  // if (!grad) {
    ctx.fillStyle=shapeColor;
  // }
  // else{
  //   ctx.fillStyle=gradient;
  //   if (document.getElementById("tipoA").checked) {
  //     var gradient = ctx.createLinearGradient(10, 90, 200, 90);
  //   }else if (document.getElementById("tipoA").checked){
  //     var gradient = ctx.createRadialGradient(85, 88, 5, 88, 90, 69);
  //   }
  //   gradient.addColorStop(0, gradA);
  //   gradient.addColorStop(1, gradB);
  // }
  ctx.clearRect(0,0,600,600);
  if (figura == "rectangulo") {
    ctx.fillRect(100, 175, 400, 250);
    ctx.strokeRect(100,175,400,250);
  }
  else if (figura == "circulo") {
    ctx.arc(300,300,200,0,2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  else if (figura == "mickey") {
    ctx.beginPath()
    ctx.arc(145,190,100,0,2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(435,190,100,0,2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(300,350,175,0,2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
},10);
