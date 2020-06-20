$(document).ready(()=>{
  body();
  var titulo = document.getElementsByClassName("titulo").value;
  if (titulo == undefined) {
    titulo = "Gráfica";
  }
  if (graphic.length > 0) {

    for (var i = 0; i < graphic.length; i++) {
      labels.push(graphic[i].name);
      bgColors.push(graphic[i].color);
      values.push(graphic[i].value);
    }
  }
  var type = document.getElementById("type").value;
  let ctx = $("#canvas")[0].getContext("2d");
  if (labels.length != 0 && bgColors.length != 0 && values.length != 0) {
    console.log("xd");
    let grafica = new Chart(ctx, {

      type: type,
      data: {
        labels: inlabels(),
        datasets: [{
          backgroundColor: inbg(),
          data: invalues(),
        }]
      },

      options: {
        title:{
          display: true,
          text: titulo
        }
      }
    });
  }
  $(".go").click(()=>{
    for (var i = 0; i < elements; i++) {
      var name = document.getElementsByClassName("name");
      console.log(name);
      var value = document.getElementsByClassName("value");
      console.log(value);
      var color = document.getElementsByClassName("color");
      console.log(color);
      if (name[0].value != undefined && value[0].value != undefined && color[0].value != undefined) {
        var data = {
          name: name[i].value,
          value: value[i].value,
          color: color[i].value
        }
        graphic.push(data)
      }
    }
    console.log(graphic);
  })
});

let elements = 1;
let graphic = [];
let labels = [];
let bgColors = [];
let values = [];

function body(){
  let formA = "<form class='' action='index.html' method='post'>"+
  "<fieldset>"+
  "Ingresa el título:<br><input type='text' id='titulo'><br>"+
  "Escoge el tipo:<br><select id='type'>"+
  "<option value='pie'>De pastel</option>"+
  "<option value='bar'>Barra</option>"+
  "<option value='polarArea'>Área polar</option>"+
  "</select><br>"+
  "Ingresa tus datos:<br>"+
  "<button type='button' class='go'>Graficar</button>"+
  "<button type='button' class='add'>Agregar dato</button><br>";
  let element = "<input type='text' class='name' placeholder='Nombre'>"+
  "<input type='text' class='value' placeholder='Valor'>"+
  "<input type='color' class='color'>"+
  "<button type='button' class='delete'>Eliminar</button><br>";
  let formB = "</fieldset>"+
  "</form>";

  for (var i = 0; i < elements; i++) {
    formA += element
  }
  formA += formB
  document.getElementById('myform').innerHTML = formA;
  $(".delete").click(()=>{
    if (elements>1) {
      elements--;
    }
    body();
  })
  $(".add").click(()=>{
    elements++;
    body();
  })
}
function inlabels(){
  let x = "["
  for (var i = 0; i < labels.length; i++) {
    x += "'"+labels[i]+"'";
    if (labels[i] != labels.length - 1) {
      x += ","
    }
  }
  x += "]";
  return x;
}
function inbg(){
  let y = "["
  for (var i = 0; i < bgColors.length; i++) {
    y += "'"+bgColors[i]+"'";
    if (bgColors[i] != bgColors.length - 1) {
      y += ","
    }
  }
  y += "]";
  return y;
}
function invalues(){
  let z = "["
  for (var i = 0; i < values.length; i++) {
    z += values[i];
    if (values[i] != values.length - 1) {
      z += ","
    }
  }
  z += "]";
  return z;
}
