let insertar = document.getElementById("insertar");
let eliminar = document.getElementById("eliminar");

insertar.addEventListener("click", insertarDiv);
eliminar.addEventListener("click", eliminarDiv);

function insertarDiv(){
    let div = document.createElement("div");
    let texto = document.createTextNode(prompt("Introduce el texto del div"));
    div.appendChild(texto);
    document.getElementById("contenedor").appendChild(div);
    
}

function eliminarDiv(){
    let divs = document.getElementById("contenedor");
    divs.removeChild(divs.lastChild);


    
}