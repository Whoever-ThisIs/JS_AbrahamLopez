/////Agregamos los <option> con los tipos de productos/////
fetch('dynamics/getTipos.php')
  .then((response) => {
    return response.json();
  }).then((data) => {
    let select = document.getElementById('tipo');
    data.forEach(element => {
      let new_option = document.createElement("option");
      new_option.value = element.id;
      new_option.innerText = element.name;
      select.appendChild(new_option);
    });
  });

/////Se encaraga de hacer la petición para guardar los datos/////
function saveDataAsync() {
  let data = new FormData(document.getElementById('miForm'));
  fetch('dynamics/save.php', {
      method: 'POST',
      body: data
    })
    .then((response) => {
      return response.json();
    }).then((data) => {
      document.getElementById('mensaje').innerHTML = "<h1>El nuevo producto ha sido creado exitosamente</h1>";
      document.getElementById('miForm').reset();
    }).catch((message)=>{
      alert(message);
    });
}

/////Añadimos un manejador de eventos para cuando el formulario se envíe/////
document.getElementById('miForm').addEventListener('submit', (e) => {
  e.preventDefault();
  saveDataAsync();
})
