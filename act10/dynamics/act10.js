var pa = new Promise(
  function(resolve, reject){
    var a = Math.floor(Math.random()*(99));
    alert("Tu nuevo número es "+a);
    var ar = prompt("¿Qué número era?")
    if (ar == a) {
      var bien = "Bien hecho :D";
      resolve(bien);
    }else{
      var mal = new Error("Simón está triste, te has equivocado :c");
      reject(mal);
    }
  }
)
var pb = new Promise(
  function(resolve, reject){
    var b = Math.floor(Math.random()*(99));
    alert("Tu nuevo número es "+b);
    var br = prompt("¿Qué número era?")
    if (br == b) {
      resolve(pa);
    }else{
      var mal = new Error("Simón está triste, te has equivocado :c");
      reject(mal);
    }
  }
)
var pc = new Promise(
  function(resolve, reject){
    var c = Math.floor(Math.random()*(99));
    alert("Tu nuevo número es "+c);
    var cr = prompt("¿Qué número era?")
    if (cr == c) {
      resolve(pb);
    }else{
      var mal = new Error("Simón está triste, te has equivocado :c");
      reject(mal);
    }
  }
)
var pd = new Promise(
  function(resolve, reject){
    var d = Math.floor(Math.random()*(99));
    alert("Tu nuevo número es "+d);
    var dr = prompt("¿Qué número era?")
    if (dr == d) {
      resolve(pc);
    }else{
      var mal = new Error("Simón está triste, te has equivocado :c");
      reject(mal);
    }
  }
)
var pe = new Promise(
  function(resolve, reject){
    var e = Math.floor(Math.random()*(99));
    alert("Tu nuevo número es "+e);
    var er = prompt("¿Qué número era?")
    if (er == e) {
      resolve(pd);
    }else{
      var mal = new Error("Simón está triste, te has equivocado :c");
      reject(mal);
    }
  }
)


/*var a = Math.floor(Math.random()*(99))
alert("Tu nuevo número es "+a);
var ar = prompt("¿Qué número era?")
const proma = new Promise(
  function(resolve,reject){
    if (ar == a){
      var exito = "Ganaste B)";
      resolve(exito);
    }
    else {
      var fracaso = new Error("Simón está triste, te has equivocado :c");
      reject(fracaso);
    }
  }
);

var promb = function(exito){
  var b = Math.floor(Math.random()*(99))
  var message = alert("Tu nuevo número es "+b);
  var br = prompt("¿Qué número era?")
  if (br==b) {
    proma
    //un error por aqui
    return Promise.resolve(exito)
  }
}
var promc = function(exito){
  var c = Math.floor(Math.random()*(99))
  var message = alert("Tu nuevo número es "+c);
  var br = prompt("¿Qué número era?")
  if (cr==c) {
    promb
    return Promise.resolve(exito)
  }
}*/

var preguntar = function(){
  pa
  .then(function (fulfilled){
    alert(fulfilled)
  })
  .catch(function(error){
    alert(error.message);
  });
}

preguntar();
