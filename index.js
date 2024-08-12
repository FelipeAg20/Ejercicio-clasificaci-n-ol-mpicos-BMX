const formulario = document.getElementById("formulario");

const tiempoBtn = document.getElementById("tiempoBtn");
const puntuacionBtn = document.getElementById("puntuacionBtn");
const paisBtn = document.getElementById("paisBtn");

const puntuacion = document.getElementById("puntuacion");

const carr = document.getElementById("carr");
const crearP = document.getElementById("crearP");

const cerrar = document.getElementById("cerrar");
const superpuesto = document.getElementById("superpuesto");
const superpuesto2 = document.getElementById("superpuesto2");

const tabla = document.getElementById("tabla");
const tabla2 = document.getElementById("tabla2");

const tr = document.getElementsByTagName("td")[0];

crearP.addEventListener("click", () => {
  let nomRam = Math.floor(Math.random() * atletas.length) * 1;
  let paisRam = Math.floor(Math.random() * atletas.length) * 1;
  let tiempoRam = Math.floor(Math.random() * atletas.length) * 1;
  let nuevoNomb = atletas[nomRam].nombre;
  let paisNue = atletas[paisRam].pais;
  let tiempoNue = atletas[tiempoRam].tiempo;
  atletas.push({ nombre: nuevoNomb, pais: paisNue, tiempo: tiempoNue });

  const nuevaFila = tabla.insertRow();
  nuevaFila.innerHTML = `<td>${nuevoNomb}</td> <td>${paisNue}</td> <td>${tiempoNue}</td> <td> 0 </td>`;
});
tabla.addEventListener("click", () => {
  superpuesto2.style.display = "block";

  console.log("holi");
});
carr.addEventListener("click", () => {
  tabla2.innerHTML = "";
  superpuesto.style.display = "block";
  tabla2.style.display = "block";

  let atletasAle = [];
  for (let i = 0; i < 10; i++) {
    let nomRam = Math.floor(Math.random() * atletas.length) * 1;
    let paisRam = Math.floor(Math.random() * atletas.length) * 1;
    let tiempoRam = Math.floor(Math.random() * atletas.length) * 1;
    let nuevoNomb = atletas[nomRam].nombre;
    let paisNue = atletas[paisRam].pais;
    let tiempoNue = atletas[tiempoRam].tiempo;
    atletasAle.push({
      nombre: nuevoNomb,
      pais: paisNue,
      tiempo: tiempoNue,
      puntos: 0,
    });
  }
  atletasAle.sort((a, b) => {
    return a.tiempo - b.tiempo;
  });

  for (let i = 0; i < 10; i++) {
    atletasAle[i].puntos = i + 1;
    const nuevaFila = tabla2.insertRow();
    nuevaFila.innerHTML = `<td>${atletasAle[i].nombre}</td> <td>${atletasAle[i].pais}</td> <td>${atletasAle[i].tiempo}</td> <td>${atletasAle[i].puntos}</td>`;
  }

  console.log(atletasAle);
});
cerrar.addEventListener("click", () => {
  superpuesto.style.display = "none";
});
cerrar2.addEventListener("click", () => {
  superpuesto2.style.display = "none";
});
tiempoBtn.addEventListener("change", () => {
  if (tiempoBtn.checked) {
    ordenarTiempo();
  }
});
paisBtn.addEventListener("change", () => {
  if (paisBtn.checked) {
    ordenarPais();
  }
});
puntuacionBtn.addEventListener("change", () => {
  if (puntuacionBtn.checked) {
    ordenarPuntos();
  }
});
let atletas = [
  { nombre: "jesus", pais: "Venezuela", tiempo: 0, puntos: 0 },
  { nombre: "jesus", pais: "Alemania", tiempo: 0, puntos: 0 },
  { nombre: "Maria", pais: "Colombia", tiempo: 0, puntos: 0 },
  { nombre: "pepito", pais: "Italia", tiempo: 0, puntos: 0 },
  { nombre: "Andres", pais: "Brasil", tiempo: 0, puntos: 0 },
  { nombre: "Felipe", pais: "Colombia", tiempo: 0, puntos: 0 },
  { nombre: "Rodolfo", pais: "Peru", tiempo: 0, puntos: 0 },
  { nombre: "pepe", pais: "Bolivia", tiempo: 0, puntos: 0 },
];

for (let i = 0; i < atletas.length; i++) {
  let tiempoRandom = Math.floor(Math.random() * 200) + 1;
  atletas[i].tiempo = tiempoRandom;
}
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  registar();
});
function registar() {
  const nacionalidad = document.getElementById("nacionalidad").value;
  const tiempo = parseInt(document.getElementById("tiempo").value);
  const nombre = document.getElementById("nombre").value;

  atletas.push({ nombre: nombre, pais: nacionalidad, tiempo: tiempo });

  const nuevaFila = tabla.insertRow();
  nuevaFila.innerHTML = `<td>${nombre}</td> <td>${nacionalidad}</td> <td>${tiempo}</td>`;
  console.log(atletas);

  tiempoBtn.checked = false;
  paisBtn.checked = false;
}
function ordenarTiempo() {
  atletas.sort((a, b) => {
    return a.tiempo - b.tiempo;
  });
  mostrarArreglo();
  tiempoBtn.checked = false;
}
function ordenarPais() {
  ordenarPuntos();
  atletas.sort((a, b) => a.pais.localeCompare(b.pais));

  mostrarArreglo();
  paisBtn.checked = false;
}
function ordenarPuntos() {
  ordenarTiempo();
  for (let i = 0; i < atletas.length; i++) {
    atletas[i].puntos = [i + 1];
    mostrarArreglo();
  }
}
function mostrarArreglo() {
  tabla.innerHTML = "";
  for (let i = 0; i < atletas.length; i++) {
    const nuevaFila = tabla.insertRow();
    nuevaFila.innerHTML = `<tr><td>${atletas[i].nombre}</td>  <td>${atletas[i].pais}</td> <td>${atletas[i].tiempo}</td> <td>${atletas[i].puntos}</td></tr>`;
  }
}
mostrarArreglo();
