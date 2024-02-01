let alumnos = [];
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Introduce el nombre del alumno ${i + 1}:`);
    let notas = [];
    for (let j = 0; j < 3; j++) {
        notas.push(parseFloat(prompt(`Introduce la nota del módulo ${j + 1}:`)));
    }
    alumnos.push([nombre, notas]);
}
//tabla
let tabla = document.createElement("table");
//cabecera
let cabecera = tabla.createTHead();
//fila de cabecera
let filacab = cabecera.insertRow();
let celdaNombre = filacab.insertCell();
celdaNombre.innerHTML = "<b>Nombre</b>";
let celdanota1 = filacab.insertCell();
celdanota1.innerHTML = "<b>Nota 1</b>";
let celdanota2 = filacab.insertCell();
celdanota2.innerHTML = "<b>Nota 2</b>";
let celdanota3 = filacab.insertCell();
celdanota3.innerHTML = "<b>Nota 3</b>";
//Cuerpo
let cuerpo = tabla.createTBody();
for (let i = 0; i < alumnos.length; i++) {
    let fila = cuerpo.insertRow();
    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = alumnos[i][0];
    let celdavalor1 = fila.insertCell();
    celdavalor1.innerHTML = alumnos[i][1][0];
    let celdavalor2 = fila.insertCell();
    celdavalor2.innerHTML = alumnos[i][1][1];
    let celdavalor3 = fila.insertCell();
    celdavalor3.innerHTML = alumnos[i][1][2];
}

document.body.appendChild(tabla);
tabla.setAttribute("border", "1");
