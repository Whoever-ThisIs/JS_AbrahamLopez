cvs = document.getElementById("canvas");
ctx = cvs.getContext("2d");
setInterval(()=>{
  var canvasColor = document.getElementById("canvascolor").value;
  var shapeColor = document.getElementById("shapecolor").value;
  var border = document.getElementById("border").value;
  var figura = document.getElementById("figura").value;
  // var gradA = document.getElementById("gradA").value;
  // var gradB = document.getElementById("gradB").value;
  cvs.style.backgroundColor = canvasColor;
  ctx.fillStyle=shapeColor;
  ctx.strokeStyle=border;

  ctx.clearRect(0,0,600,600);
  // ctx.clearStroke(300,300,200,0,2 * Math.PI)
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
    ctx.arc(145,190,100,0,2 * Math.PI);//orejas
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(435,190,100,0,2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(300,350,175,0,2 * Math.PI);//cuerpo
    ctx.fill();
    ctx.stroke();
  }
},10);
