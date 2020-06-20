function getName() {
  return "name=" + document.getElementById("clave").value;
}

function getProducts() {
  fetch(`dynamics/getProducts.php?${getName()}`, {
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
  })
}

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  getProducts();
})
