//Solo es un callback hell de mandar numeros y pedirlos de vuelta;
setTimeout(()=>{
  var a = Math.floor(Math.random()*(99))
  alert("Tu nuevo número es "+a);
  var ar = prompt("¿Qué número era?")
  if (ar == a) {
    setTimeout(()=>{
      var b = Math.floor(Math.random()*(99))
      alert("Tu nuevo número es "+b);
      var br = prompt("¿Qué número era?")
      if (br == b) {
        ar = prompt("¿Y el anterior?")
        if(ar == a){
          setTimeout(()=>{
            var c = Math.floor(Math.random()*(99))
            alert("Tu nuevo número es "+c);
            var cr = prompt("¿Qué número era?")
            if (cr == c) {
              br = prompt("¿Y el anterior?")
              if (br == b) {
                ar = prompt("¿Y el que iba antes?")
                if (ar == a) {
                  setTimeout(()=>{
                    var d = Math.floor(Math.random()*(99))
                    alert("Tu nuevo número es "+d);
                    var dr = prompt ("¿Qué número era?")
                    if (dr == d) {
                      cr = prompt("¿Y el anterior?")
                      if (cr == c) {
                        br = prompt("¿Y el que iba antes?")
                        if (br == b) {
                          ar = prompt("¿Y antes de ese?")
                          if (ar == a) {
                            setTimeout(()=>{
                              var e = Math.floor(Math.random()*(99))
                              alert("Tu nuevo número es "+e);
                              var er = prompt("¿Qué número era?")
                              if (er == e) {
                                dr = prompt("¿Y el anterior?")
                                if (dr == d) {
                                  cr = prompt("¿Y el que iba antes?")
                                  if (cr == c) {
                                    br = prompt("¿Y antes de ese?")
                                    if (br == b) {
                                      ar = prompt("¿Y el primerito?")
                                      if (ar == a) {
                                        alert("Bien hecho, ganaste B)")
                                      }
                                      else{
                                        alert("Simón está triste, te has equivocado :c");
                                      }
                                    }else {
                                      alert("Simón está triste, te has equivocado :c");
                                    }
                                  }else {
                                    alert("Simón está triste, te has equivocado :c");
                                  }
                                }else {
                                  alert("Simón está triste, te has equivocado :c");
                                }
                              }else {
                                alert("Simón está triste, te has equivocado :c");
                              }
                            },1000)
                          }else {
                            alert("Simón está triste, te has equivocado :c");
                          }
                        }else {
                          alert("Simón está triste, te has equivocado :c");
                        }
                      }else {
                        alert("Simón está triste, te has equivocado :c");
                      }
                    }else {
                      alert("Simón está triste, te has equivocado :c");
                    }
                  },1000)
                }else {
                  alert("Simón está triste, te has equivocado :c");
                }
              }else {
                alert("Simón está triste, te has equivocado :c");
              }
            }else {
              alert("Simón está triste, te has equivocado :c");
            }
          },1000)
        }else {
          alert("Simón está triste, te has equivocado :c");
        }
      }else {
        alert("Simón está triste, te has equivocado :c");
      }
    },1000)
  }else {
    alert("Simón está triste, te has equivocado :c");
  }
},1000)
