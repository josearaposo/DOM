    
let mostrar = document.getElementById("ver");
let eliminar = document.getElementById("ocultar");

mostrar.addEventListener("click", visible);
eliminar.addEventListener("click", oculto);

  function visible(){  
    let valor = parseInt(document.getElementById("posicion").value);

    if(document.getElementById("visto"+valor).className != "visible") {

      document.getElementById("visto"+valor).className = "visible"; 

    }else{
      alert("Ya esta visible");
    }

   
  }
  
        
  
  function oculto(){  
    let valor = parseInt(document.getElementById("posicion").value);

    if(document.getElementById("visto"+valor).className != "oculto") {

      document.getElementById("visto"+valor).className = "oculto"; 

    }else{
      alert("Ya esta Oculto");
    }

   
  }