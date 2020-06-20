$(document).ready(()=>{
  body();
});

//Variables
let elements = 1;
let labels = [];
let bgColors = [];
let values = [];

//Pinta el formulario
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
  "<input type='number' class='value' placeholder='Valor'>"+
  "<input type='color' class='color'>"+
  "<button type='button' class='delete'>Eliminar</button><br>";
  let formB = "</fieldset>"+
  "</form>";

//Dependiendo del número de datos, agrega datos
  for (var i = 0; i < elements; i++) {
    formA += element
  }
  formA += formB
  document.getElementById('myform').innerHTML = formA;
  //Borra un dato
  $(".delete").click(()=>{
    if (elements>1) {
      elements--;
    }
    body();
  })
  //agrega un dato
  $(".add").click(()=>{
    elements++;
    body();
  })
  //Manda a pintar en el canvas
  rest();
}
function rest(){
  //Si se apreta graficar...
  $(".go").click(()=>{
    //...recupera los valores del formulario
    let validador = 0;
    let validador2 = 0;
    var name = $(".name").each(function(){labels.push($(this).val())});
    var value = $(".value").each(function(){values.push($(this).val())});
    var color = $(".color").each(function(){bgColors.push($(this).val())});
    var titulo = $("#titulo").val();
    //Si no hay título pone el preestablecido
    if (titulo == undefined) {
      titulo = "Gráfica";
    }
    var type = document.getElementById("type").value;
    let ctx = $("#canvas")[0].getContext("2d");
    //Revisa que no haya datos vacíos
    for (var i = 0; i < labels.length; i++) {
      if (labels[i] == "" || bgColors[i] == "" || values[i] == ""){
        validador++;
      }
      //o negativos en los valores
      if (values[i] < 0) {
        validador2++;
      }
    }
    //Si todo esta en orden
    if (validador == 0 && validador2 == 0) {
      //Pinta la gráfica con los valores establecidos
      let grafica = new Chart(ctx, {

        type: type,
        data: {
          labels: labels,
          datasets: [{
            backgroundColor: bgColors,
            data: values,
          }]
        },

        options: {
          title:{
            display: true,
            text: titulo
          }
        }
      });
      //Borra el formulario e inserta un boton que recarga la página
      $("#myform").html("<button id='reset'>Crear nueva gráfica</button>");
      $("#reset").click(()=>{
        window.location.reload();
      })
    }
    //Si hay algo faltante o negativo
    else{
      //Borra los datos antes proporcionados
      labels.splice(0,labels.length);
      bgColors.splice(0,bgColors.length);
      values.splice(0,values.length);
      //E imprime el mensaje correspondiente
      if (validador != 0) {
        alert("Revisa que no te haya faltado ningún dato por llenar")
      }
      if (validador2 != 0) {
        alert("Asegurate de haber ingresado valores válidos")
      }
    }
  })
}
