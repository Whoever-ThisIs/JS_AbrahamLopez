//Recuperación del tamaño
var size = prompt("¿De qué tamaño quieres tu tablero?");

//Variables
let rows = [];
var validador = 2;
var filai = "<tr>";
var filaf = "</tr>";
var columnaA = "<td style=\"width:50px;height:50px;background-color:#59CD90;\"></td>";
var columnaB = "<td style=\"width:50px;height:50px;background-color:#3C3C3C;\"></td>";
//Durante el número del tablero proporcionado, insertar filas y columnas
for (var i = 0; i < size; i++) {
  rows.push(filai);
  for (var j = 0; j < size; j++) {
    if (i % validador === 0) {
      if (j % validador === 0) {
        rows.push(columnaA);
      }
      else {
        rows.push(columnaB);
      }
    }
    else {
      if (j % validador === 0) {
        rows.push(columnaB);
      }
      else {
        rows.push(columnaA);
      }
    }
  }
  rows.push(filaf);
}
var tabelle = rows.join("");
//Inserción en body
var table = document.createElement("table");
table.innerHTML = tabelle;
var body = document.getElementsByTagName("body");
body[0].appendChild(table)
