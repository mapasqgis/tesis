//****************************************************************************************************
//[INICIALIZACIONES]

  //Inicializacion de lineas  ------------------------------------------------------------------------
    var lineas = new Array();

    for (n=0 ; n<10 ; n++){
      lineas[n] = new Array();
    }

    actualizarViajes();




//****************************************************************************************************
//[BOTONES]

//Crear
      document.getElementById('crear').onclick = function crear(){
          lineas[100] = new Array();
          solucion = new Array();
          solucion = new Array();
          var n = document.getElementById('aux').value;
          var ori = document.getElementById('origen').value;
          var des = document.getElementById('destino').value;
          var tim = document.getElementById('time').value;
          back(ori,des,lineas[100],tiempo,viajes,tim,n);
          lineas[n] = solucion;
          actualizarViajes();



      }

//mostrar
      document.getElementById('mostrar').onclick = function mostrar(){
        for (n=0 ; n<10 ; n++){
            console.log(lineas[n]);
        }
      }

//actualizar
      document.getElementById('actualizar').onclick = function actualizar(){
        console.log(lineas[100]);
        console.log('te amo lulita papitas');
      }





//****************************************************************************************************
