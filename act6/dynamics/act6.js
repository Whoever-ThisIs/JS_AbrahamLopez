//Recuperación de el div del cocumento
var div = document.createElement("div");
div.innerHTML =
  "<h1><u>Soy el más grande...</u></h1>"+
  "<h2>Curso Web 2020</h2>"+
  "<h2><u><i>Mediano</i></u></h2>"+
  "<h3><p>Jelou</p></h3>"+
  "<h3>Estoy medio chiquito :(</h3>";
//Inserción en el cuerpo
var body = document.getElementsByTagName("body");
body[0].appendChild(div);
