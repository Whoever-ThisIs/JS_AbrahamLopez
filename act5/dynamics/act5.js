//Mensajes de resultado,"código" y regex
var encontrado = "Oso oso mentirosos, vete lejos antes de que te lance mis calcetines olor a queso";
var aliado = "¿Bob?\n¿Wade?";
var nada = "No se han encontrado coincidencias.";
let regex1 = /\<script\>.*(equisde.*){5}\<\/script\>/gm;
let regex2 = /equisde/i;
let regex3 = /\<script\>/i;
let regex4 = /\<\/script\>/i;
var codigo = "Lorem ipsum dolor sit eqamet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//Uso de regex para buscar coincidencias
var script = codigo.search(regex1);
var equisde = codigo.search(regex2);
inicio = codigo.search(regex3);
final = codigo.search(regex4);
//Resultados
if (script != "-1") {
  alert(encontrado);
}
else if (equisde != "-1" || inicio != "-1" || final != "-1") {
  alert(aliado);
}
else {
  alert(nada);
}
