class Vehiculo {
    constructor(marca, modelo, color, anio) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.anio = anio;
    }
  }
  
  let vehiculos = [
    new Vehiculo("Audi", "A3", "Rojo", 2019),
    new Vehiculo("BMW", "X1", "Azul", 2020),
    new Vehiculo("Ford", "Mustang", "Negro", 2018),
    new Vehiculo("Opel", "Corsa", "Amarillo", 2021),
    new Vehiculo("Renault", "Clio", "Blanco", 2017)
  ];
  

let tabla = document.createElement("table");
let cabecera = tabla.createTHead();
let filacabecera = cabecera.insertRow();
let celdaMarca = filacabecera.insertCell();
celdaMarca.innerHTML = "<b>Marca</b>";
let celdaModelo = filacabecera.insertCell();
celdaModelo.innerHTML = "<b>Modelo</b>";
let celdaColor = filacabecera.insertCell();
celdaColor.innerHTML = "<b>Color</b>";
let celdaAnio = filacabecera.insertCell();
celdaAnio.innerHTML = "<b>Fabricación</b>";

let cuerpo = tabla.createTBody();
for (let i = 0; i < vehiculos.length; i++) {
  let fila = cuerpo.insertRow();
  let celdaMarca = fila.insertCell();
  celdaMarca.innerHTML = vehiculos[i].marca;
  let celdaModelo = fila.insertCell();
  celdaModelo.innerHTML = vehiculos[i].modelo;
  let celdaColor = fila.insertCell();
  celdaColor.innerHTML = vehiculos[i].color;
  let celdaAnio = fila.insertCell();
  celdaAnio.innerHTML = vehiculos[i].anio;
}

document.body.appendChild(tabla);
tabla.setAttribute("border", "1");
