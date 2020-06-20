function getAll() {
  var name = "name=" + document.getElementById("clave").value;
  var radios = document.getElementsByName("tipo");
  for (var i = 0; i < radios.length; i++) {
    if(radios[i].checked){
      var radio = "tipo=" + radios[i].value;
    }
  }
  return name + "&" + radio;
}

function getProducts() {
  fetch(`dynamics/getProducts.php?${getAll()}`, {
    method: 'GET'
  }).then((response) => {
    return response.json();
  }).then((data) => {
    let table = document.getElementById('table-content');
    table.innerHTML = "";
    data.forEach(element => {
      let new_td = document.createElement("tr");
      new_td.innerHTML = `<td>${element.id}</td><td>${element.name}</td><td>${element.disponibilidad}</td><td>${element.tipo}</td>`;
      table.appendChild(new_td);
    });
  }).catch((message)=>
  console.log(message))
}



var form2 = "<br><br><form class='formy' id='formy'><fieldset class='formy'><h2>ID del producto a modificar</h2><input type='number' name='idpro' id='idpro' required><h2>Nuevo nombre:</h2><input type='text' name='nName' id='nName' required><h2>Nueva cantidad:</h2><input type='number' name='nCantidad' id='nCantidad' required><br><input type='submit' name='beditar' value='Actualizar'></fieldset></form><br>"
function editar() {
  document.getElementById("cajita").innerHTML=form2;
  document.getElementById('formy').addEventListener('submit', (e) => {
    e.preventDefault();
    saveDataAsync();
  })
}
document.getElementById("edicion").addEventListener("click",editar);
function saveDataAsync() {
  let data = new FormData(document.getElementById('formy'));
  fetch('dynamics/editar.php', {
      method: 'POST',
      body: data
    })
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      document.getElementById('formy').reset();
    }).catch((message)=>{
      alert(message);
    });
}





// function Editar() {
//   fetch(`dynamics/editar.php?${getTodo()}`, {
//     method: 'GET'
//   }).then((response) => {
//     document.getElementById("cajita").innerHTML="<h2>Se ha actualizado la base de datos exitosamente</h2>";
//   }).catch((message)=>
//   console.log(message))
// }
