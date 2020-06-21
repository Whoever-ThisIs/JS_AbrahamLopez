//Creación de elementos
function terminarJuego() {
  document.cookie = `intento=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `victoria=0; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}
function envio_nums() {
  setTimeout(() => {
    let c_nums_a_pedir = nums_a_pedir.toString();
    document.cookie = `nums_simon=${c_nums_a_pedir}`;
    setTimeout(() => {
      window.location = "./actividad10_1.html";
    }, 1000);
  }, v_cookie_aux * 1550);
}
function num() {
  return Math.round(Math.random() * 99);
}
function lectura_cookies(cookie) {
  let c = document.cookie
  let cookies = c.split(";");
  let regex = new RegExp(cookie, "i");
  for (indice in cookies) {
    let coincidencia = cookies[indice].search(regex);
    if (coincidencia > -1) {
      var posCookie = indice;
      break;
    }
    else {
      var posCookie = -1;
    }
  }
  if (posCookie != -1) {
    let valor_cookie = cookies[posCookie].split("=")[1];
    return valor_cookie
  }
  else {
    return false
  }
}
let vVictoria = lectura_cookies("victoria")
var v_cookie_aux = 0;
var valor_intento = new Promise((resolve) => {
  let c = lectura_cookies("intento");
  if(c != false){
    var v_cookie = c;
  }
  else{
    var v_cookie = 1
  }
  v_cookie_aux = v_cookie;
  resolve(v_cookie);
  if(v_cookie <= 5){
    v_cookie++;
  }
  document.cookie = "intento=" + v_cookie;
});
var nums_a_pedir = new Array();

if(vVictoria === false || vVictoria == 1){
  valor_intento
  .then((v_cookie)=>{
    let a = num();
    nums_a_pedir.push(a);
    let contador = 1;
    let resultados = new Array(v_cookie, contador);
    return Promise.resolve(resultados);
  })
  .then((resultados)=>{
    if(resultados[0] != resultados[1]){
      let a = num();
      nums_a_pedir.push(a);
      resultados[1]++;
    }
    return Promise.resolve(resultados);
  })
  .then((resultados) => {
    if (resultados[0] != resultados[1]) {
      let a = num();
      nums_a_pedir.push(a);
      resultados[1]++;
    }
    return Promise.resolve(resultados);
  })
  .then((resultados) => {
    if (resultados[0] != resultados[1]) {
      let a = num();
      nums_a_pedir.push(a);
      resultados[1]++;
    }
    return Promise.resolve(resultados);
  })
  .then((resultados) => {
    if (resultados[0] != resultados[1]) {
      let a = num();
      nums_a_pedir.push(a);
      resultados[1]++;
    }
    return Promise.resolve(resultados);
  })
  setTimeout(() => {
    let numeros = new Promise((resolve)=>{
      let len = nums_a_pedir.length;
      for (i = len; i < 5; i++) {
        nums_a_pedir.push(-1);
      }
      resolve(nums_a_pedir)
      console.log("¿Listo?")
    })
    numeros
    .then((nums_a_pedir)=>{
      setTimeout(() => {
        console.log(nums_a_pedir[0])
      }, 1500);
      return Promise.resolve(nums_a_pedir);
    })
    .then((nums_a_pedir) => {
      if(nums_a_pedir[1]!=-1){
        setTimeout(() => {
          console.log(nums_a_pedir[1])
        }, 1500 * 2);
      }
      return Promise.resolve(nums_a_pedir);
    })
    .then((nums_a_pedir) => {
      if (nums_a_pedir[2] != -1) {
        setTimeout(() => {
          console.log(nums_a_pedir[2])
        }, 1500 * 3);
      }
      return Promise.resolve(nums_a_pedir);
    })
    .then((nums_a_pedir) => {
      if (nums_a_pedir[3] != -1) {
        setTimeout(() => {
          console.log(nums_a_pedir[3])
        }, 1500 * 4);
      }
      return Promise.resolve(nums_a_pedir);
    })
    .then((nums_a_pedir) => {
      if (nums_a_pedir[4] != -1) {
        setTimeout(() => {
          console.log(nums_a_pedir[4])
        }, 1500 * 5);
      }
      return Promise.resolve(nums_a_pedir);
    })
  }, 10);

  envio_nums();
} else if (vVictoria == 0) {
  console.log("Simón está triste, te has equivocado :c");
  terminarJuego();
} else {
  console.log("Ganaste mi broooooo");
  terminarJuego();
}
