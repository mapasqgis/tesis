//****************************************************************************************************
//INICIALIZACIONES  ----------------------------------------------------------------------------------

  //Inicializacion de lineas  --------------------------------------------------------------------------
    var lineas = new Array();

    for (n=0 ; n<10 ; n++){
      lineas[n] = new Array();
    }
//FIN de inicializaciones  ---------------------------------------------------------------------------


//****************************************************************************************************
//BOTONES  -------------------------------------------------------------------------------------------
                                                                                                     
//Actualizar
      document.getElementById('actualizar').onclick = function actualizar(){
          for (n=0 ; n<10 ; n++){
            id = ("l"+n);
            console.log(id);
            document.getElementById(id).innerHTML = lineas[n].join(" - ");
          }
      }

//Crear linea
      document.getElementById('actualizar').onclick = function actualizar(){
      }

//FIN de botones ------------------------------------------------------------------------------------



//****************************************************************************************************
