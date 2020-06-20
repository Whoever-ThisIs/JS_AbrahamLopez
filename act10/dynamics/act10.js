function random(min,max){
  return Math.round(Math.random()*(max-min)+min);
}
var nuevo = "Tu nuevo número es ";
var bien = "Bien hecho, ganasteB)";
var mal = "Simón está triste, te has equivocado :c";

let numeros = [];
for (var i = 0; i < 5; i++) {
  numeros.push(random(1,99));
}

function nuevoNumero(numero){
  var nummer = numeros.shift()
  if (nummer) {
    
  }
}




/*
var promesaA = new Promise(function(resolve, reject) {

  alert(nuevo + a);
  var respuestaA = prompt("¿Qué número era?");
  if (respuestaA == a) {
    resolve();
  }
  reject(mal);
});


promesaA.then(()=>{
  var promesaB = new Promise(function(resolve, reject) {

    alert(nuevo + b);
    var respuestaB = prompt("¿Qué número era?");
    if (respuestaB == b) {
      respuestaA = prompt("¿Y el anterior?");
      if (respuestaA == a) {
        resolve();
      }
    }
    reject();
  });
}).catch(()=>{
  alert(mal);
});

promesaB.then(()=>{
  var promesaC = new Promise(function(resolve, reject) {

    alert(nuevo + c);
    var respuestaC = prompt("¿Qué número era?");
    if (respuestaC == c) {
      respuestaB = prompt("¿Y el anterior?");
      if (respuestaB == b) {
        respuestaA = prompt("¿Y antes de ese?");
        if (respuestaA == a) {
          resolve();
        }
      }
    }
    reject();
  });
}).catch(()=>{
  alert(mal);
})

promesaC.then(()=>{
  var promesaD = new Promise(function(resolve, reject) {

    alert(nuevo + d);
    var respuestaD = prompt("¿Qué número era?");
    if (respuestaD == d) {
      respuestaC = prompt("¿El que iba antes de ese?");
      if (respuestaC == c) {
        respuestaB = prompt("¿Y el anterior?");
        if (respuestaB == b) {
          respuestaA = prompt("¿Y antes de ese?");
          if (respuestaA == a) {
            resolve();
          }
        }
      }
    }
    reject();
  });
}).catch(()=>{
  alert(mal);
})

promesaD.then(()=>{
  var promesaE = new Promise(function(resolve, reject) {

    alert(nuevo + e);
    var respuestaE = prompt("¿Qué número era?");
    if (respuestaE == e) {
      respuestaD = prompt("¿Y antes de ese?");
      if (respuestaD == d) {
        respuestaC = prompt("¿El que iba antes?");
        if (respuestaC == c) {
          respuestaB = prompt("¿Y el anterior?");
          if (respuestaB == b) {
            respuestaA = prompt("¿Y el primerito?");
            if (respuestaA == a) {
              resolve(bien);
            }
          }
        }
      }
    }
    reject();
  });
}).catch(()=>{
  alert(mal);
})

promesaE.then((message)=>{
  alert(bien);
}).catch(()=>{
  alert(mal);
})
*/
