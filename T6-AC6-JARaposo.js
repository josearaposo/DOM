let activar = document.getElementById("ver");
let desactivar = document.getElementById("ocultar");

activar.addEventListener("click", habilitar);
desactivar.addEventListener("click", deshabilitar);

function habilitar(){
    document.getElementById('campos1').disabled = false;
    document.getElementById('campos2').disabled = false;
    document.getElementById('campos3').disabled = false;
    document.getElementById('campos4').disabled = false;
}
function deshabilitar(){
    document.getElementById('campos').disabled = true;
}
