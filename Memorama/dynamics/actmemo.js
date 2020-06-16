//Función que recupera cookies y regresa "no" en caso de no encontrar una
function getCookie(name)
{
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : "no";
}

//Se le asigna una variable a cada cookies
var a = getCookie("cartas");
var ab = getCookie("encontradas");
var abc= getCookie("restantes");
var abcd = getCookie("hp");
var abcde = getCookie("found");
var abcdef = getCookie("missing");

//En caso de no haber cookies
if (a == "no"||ab == "no"||abcd == "no"||abcde == "no"||abcdef == "no") {
  //Se establecen valores iniciales
  var cartas = [];
  var encontradas = [];
  var restantes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var pares = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];
  var found = 0;
  var missing = 15;
  var hp = 10;
  //Se randomizan las cartas
  while (pares.length > 0) {
    let r = Math.floor(Math.random()*(pares.length-1));
    let ra = pares[r];
    pares.splice(r,1);
    cartas.push(ra);
  }
}
//Si si hay cookies, se toman esas como valores
else{
  var cartas = a.split(",");
  for (var i = 0; i < a.length; i++) {
    a[i] = parseInt(a[i]);
  }
  if (ab!="no") {
    var encontradas = ab.split(",");
  }
  else {
    var encontradas = [];
  }
  var restantes = abc.split(",");
  var hp = abcd;
  var found = abcde;
  var missing = abcdef;
}
//Se organizan las cartas para imprimirlas en el html
var cards = "";
for (var i = 0; i < cartas.length; i++) {
  let valor = cartas[i];
  if (valor == 0) {
    //Cada que un pa rde cartas es encontrado, sus valores en el arreglo principal se vuelve 0, lo que representa una carta invisible con la que no se puede interactuar
    cards += "<div class='cartaoff'></div>";
  }
  else {
    //El id se recupera con un onClick="reply_click(this_id)", para que así se voltee y cambie la imagén de la carta clickeada
    cards += "<div class='carta' id='" + i + "' name='" + valor + "' style=\"background-image: url('../statics/imagenes/pattern.png');opacity: 1\" onClick='reply_click(this.id)'></div>";
  }
}
//Se recupera el tablero, y los "marcadores"
$(".cuerpo").html(cards);
$("#missing").html("Faltantes: "+missing);
$("#found").html("Encontradas: "+found);
$("#HP").html("Vidas restantes: "+hp);
let clicks = [];

//La variable available es la responsable de que sólo se puedan tomar de dos cartas a la vez
let available = 0;


//Reinicio
//Si se le da click al boton de reinicio se imprime una ventana que pide confirmacion
$("button").click(function(evento){
  var reinicio ="<div class='ventana'><div class='mensaje' align='center'><p>¿Estas seguro de que quieres reiniciar?</p></div><div class='opciones'><button class='si'>Reinicia a estos gatos>:D</button><button class='no'>No :C, yo amo a estos gatitos</button></div></div>"
  $(".cuerpo").html(reinicio);
  //En caso de confirmarlo, se eliminan todas las cookies
  $(".si").click(function(evento){
    document.cookie = "cartas=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "encontradas=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "restantes=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "hp=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "found=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "missing=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    window.location.reload();
  });
  //De lo contrario tan solo se recarga la ventana
  $(".no").click(function(evento){
    window.location.reload();
  });
});

//Cartas
function reply_click(clicked_id){
  //Si hay clicks disponibles
  if (available < 2){
    available++;
    //Se recupera el id de la carta clickeada, para con esto también recuperar su nombre
    var click = "#" + clicked_id;
    var img = $(click).attr("name");
    //Se le cambia la imágen y se mete la animación. Igualmente se retira el onClick para evitar que sea posible presionar la misma carta 2 veces
    $(click).attr("style","background-image: url('../statics/imagenes/" + img +".png');animation:turn .4s ease-in-out");
    $(click).attr("onClick","");
    //Para evitar que al voltear la tarjeta la animación de alzamiento tome lugar, se cambia su clase
    $(click).removeClass("carta");
    $(click).addClass("cartano");
    //Si la carta regresa su id, en un arreglo se mete dicho id y el nombre de la carta
    if (clicked_id !== 0) {
      clicks.push(img);
      clicks.push(click);
    }
    //Se revisa que se haya presionado ya 2 cartas validas
    if (clicks.length == 4) {
      setTimeout(()=>{
        //El timeout veita que se pueda abusar el tiempo de la animación para girar más de dos cartas
        if (clicks[0] === clicks[2]) {
          //Si los nombres son iguales, significa que las cartas son un par. Resta un número de missing y le suma uno a found
          found++;
          missing--;
          //Vuelve a la cartas cartas off, a.k.a. las cartas invisibles y les aplica la animación de salida
          $(clicks[1]).removeClass("carta");
          $(clicks[1]).addClass("cartaoff");
          $(clicks[3]).removeClass("carta");
          $(clicks[3]).addClass("cartaoff");
          $(clicks[1]).attr("style","animation:fadeout 1s ease-in-out");
          $(clicks[3]).attr("style","animation:fadeout 1s ease-in-out");
          //Encuentra en el arreglo de cartas restantes el número del par encontrado y lo saca de ahí, y este lo pasa al arreglo de encontradas
          var index = restantes.indexOf(parseInt(img));
          restantes.splice(index,1)
          encontradas.push(img);
          //Del arreglo que es el que pone las cartas en su lugar, si se encuentra el numero del par encontrado lo vuelve un cero
          for (var w = 0; w < cartas.length; w++) {
            if(cartas[w]==img){
              cartas[w] = 0;
            }
          }
        }
        else{
          //En cambio si no son la misma, resta uno de vida y lo regresa a su estado original
          hp--;
          $(clicks[1]).attr("style","background-image: url('../statics/imagenes/pattern.png');animation:turnback .4s ease-in-out");
          $(clicks[3]).attr("style","background-image: url('../statics/imagenes/pattern.png');animation:turnback .4s ease-in-out");
          $(clicks[1]).removeClass("cartano");
          $(clicks[1]).addClass("carta");
          $(clicks[3]).removeClass("cartano");
          $(clicks[3]).addClass("carta");
          $(clicks[1]).attr("onClick","reply_click(this.id)");
          $(clicks[3]).attr("onClick","reply_click(this.id)");
        }
        //Se recuperan los "marcadores" y se actualizan
        $("#missing").html("Faltantes: "+missing);
        $("#found").html("Encontradas: "+found);
        $("#HP").html("Vidas restantes: "+hp);
        //Se vacía el arreglo de los ids y los nombres para el siguiente par
        for (var i = 0; i < 4; i++) {
          clicks.pop();
        }
        //Y se establecen las cookes
        document.cookie = "cartas="+cartas;
        document.cookie = "encontradas="+encontradas;
        document.cookie = "restantes=" + restantes;
        document.cookie = "hp="+hp;
        document.cookie = "found=" + found;
        document.cookie = "missing=" + missing;
      },1000);
    }
    else {
      //Esté timeout es para volver a vaciar available y que se puedan voltear otras dos cartas
      setTimeout(()=>{
        available = 0;
      },1500)
    }
  }
  //Si se gana o se pierde el juego, se borran las cookies
  if (encontradas.length == 15 || hp == 0) {
    document.cookie = "cartas=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "encontradas=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "restantes=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "hp=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "found=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    document.cookie = "missing=0;expires=Thu, 04 Jun 2010 00:00:00 GMT";
    //Si se gana se imprime una ventana con el mensaje de que hás ganado
    if (encontradas.length == 15) {
      var res = "<div class='ventana2'><div class='mensaje'>¡Has ganado!</div></div>"
    }
    //Si se ha perdido se imprime una ventana que con ayuda de los arreglos de encontradas y restantes muestra las cartas halladas y las faltantes
    if (hp == 0) {
      if (encontradas.length != 0) {
        var bien="<div class='bien'><div class='titu'><h1>Pares encontrados</h1></div><div class='Karte'>";
        for (i = 0; i < encontradas.length; i++) {
          bien += "<div class='carta' style=\"background-image: url('../statics/imagenes/"+ encontradas[i] +".png')\"></div>";
        }
        bien += "</div></div>";
      }
      else {
        var bien = "<div class='bien'><div class='titu'><h1>Pares encontrados</h1></div><div class='Karte'><h2>No encontraste ningún par :C</h2></div></div>";
      }
      var mal="<div class='mal'><div class='titu'><h1>Pares restantes</h1></div><div class='Karte'>";
      for (i = 0; i < restantes.length; i++) {
        mal += "<div class='carta' style=\"background-image: url('../statics/imagenes/"+ restantes[i] +".png')\"></div>";
      }
      mal += "</div></div>";
      var res="<div class='res'>"+ bien + mal +"</div>";
    }
    //Se inserta el resultado al html
    $(".cuerpo").html(res);
  }
}
