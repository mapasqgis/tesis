
var solucion = new Array();

//Backtracking
  function back(origen,destino,camino,tiempo,viajes,maxtime,n){
      camino.push(origen);
      if(origen==destino){
        //console.log('hi');
        //console.log(camino);
        console.log(solucion);
        console.log('utilidad camino es: ' + utilidad(camino));
        console.log('utilidad solucion es: ' + utilidad(solucion));
        if(utilidad(camino)>utilidad(solucion)){
            reemplazar(camino);
            document.getElementById('l'+n).innerHTML = solucion.join(" - ");
            document.getElementById('l'+n+'.ut').innerHTML = utilidad(solucion);
            document.getElementById('l'+n+'.dem').innerHTML = sumaviajes(solucion,viajes);
            document.getElementById('l'+n+'.km').innerHTML = sumatiempo(solucion,tiempo)/60;
            console.log('solucion mejor');
            console.log(solucion);
        }
      }
      else{
      //console.log(origen);
        vecinos(origen,conectividad).forEach((vecino, i) => {
          if(sumatiempo(camino,tiempo)+tiempo[vecino][destino]<=maxtime && !contiene(camino,vecino)){
            back(vecino,destino,camino,tiempo,viajes,maxtime,n);
            camino.pop();
          }
        });

      }
  }

  //Muestra matriz viajes
  function actualizarViajes(){
    solucion.forEach((i1, i) => {
      solucion.forEach((i2, i) => {
            viajes[i1][i2]=0;
            console.log(i1);
            console.log(i2);
            console.log(viajes[i1][i2]);
      });
    });
    for(a=1 ; a<4 ; a++){
          for(q=1 ; q<36 ; q++){
              var celda = a+'.'+q;
              document.getElementById(celda).innerHTML = viajes[a][q];
              if(viajes[a][q]>20){
                document.getElementById(celda).style.background = '#FD0E35';
                document.getElementById(celda).style.color = 'white';
              }
              else{
                if(viajes[a][q]>10){
                  document.getElementById(celda).style.background = '#FD5B78';
                  document.getElementById(celda).style.color = 'white';
                }
                else{
                  if(viajes[a][q]>5){
                    document.getElementById(celda).style.background = '#FFFF66';
                    document.getElementById(celda).style.color = 'black';
                  }
                  else{
                    if(viajes[a][q]>0){
                      document.getElementById(celda).style.background = '#ECEBBD';
                      document.getElementById(celda).style.color = 'black';
                    }
                    else{
                      document.getElementById(celda).style.background = 'white';
                      document.getElementById(celda).style.color = 'black';
                    }
                  }
                }
              }
          }
    }
  }


//reemplazar
function reemplazar(camino){
  solucion = new Array;
  camino.forEach((nodo, i) => {
    solucion.push(nodo);

  });
}

//Limpiar
function contiene(camino, vecino){
  var bool = false;
  camino.forEach((v, i) => {
    if(v==vecino){
      bool = true;
    }
  });
  return bool;
}

//Suma de viajes
  function sumaviajes(camino,viajes){
    var suma = 0;
      camino.forEach((i1, i) => {
        camino.forEach((i2, i) => {
            if (i1 != i2){
            suma += viajes[i1][i2];
          }
        });
      });
      return suma;
  }

  //Borrar viajes
    function borraviajes(camino){
      camino.forEach((i1, i) => {
        camino.forEach((i2, i) => {
            if (i1 != i2){
              viajes[i1][i2]=0;
              console.log(viajes[i1][i2]);
          }
        });
      });
    }

//utilidad
function utilidad(camino){
  if(camino.length<2){
    return 0;
  }
  else{
    return sumaviajes(camino, viajes) / Math.pow(sumatiempo(camino, tiempo),3);
  }
}

//Suma de tiempos
  function sumatiempo(camino,tiempo){
    if(camino.length<2){
      return 1;
    }
    else{
      var suma = 0;
      for (i=0 ; i<camino.length-1 ; i++){
        suma += tiempo[camino[i]][camino[i+1]];
      }
      return suma;
    }
  }

//Vecinos de origen
  function vecinos(zona,conectividad){
    var vecino = new Array();
    for (i=1 ; i<36 ; i++){
      if(conectividad[zona][i] > 0){
        vecino.push(i);
      }
    }
    return vecino;
  }
