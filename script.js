const ionesPositivos = ["H+1", "K+1", "Ba+2", "Al+3", "Pb+4", "Ni+3", "Hg+1"];
const ionesNegativos = ["", "H-1", "O-2", "(OH)-1", "(SO4)-2", "(PO3)-3", "(NO2)-1", "(ClO)-1"];

const formulas = {
    "H-1H+1": {formula: "H2", nombre: "Hidrógeno"},
    "H-1K+1": {formula: "KH", nombre: "Hidruro de potasio"},
    "H-1Ba+2": {formula: "BaH2", nombre: "Hidruro de bario"},
    "H-1Al+3": {formula: "AlH3", nombre: "Hidruro de aluminio"},
    "O-2H+1": {formula: "H2O", nombre: "Agua"},
    "O-2K+1": {formula: "K2O", nombre: "Óxido de potasio"},
    "O-2Ba+2": {formula: "BaO", nombre: "Óxido de bario"},
    "O-2Al+3": {formula: "Al2O3", nombre: "Óxido de aluminio"},
    // Completa con el resto de combinaciones necesarias
};

let celdaSeleccionada = null;

function crearMatriz() {
    const tabla = document.getElementById("matriz-ionica");

    // Crear la fila de los iones negativos (empezando desde la casilla 2)
    const fila1 = document.createElement("tr");
    for (let i = 0; i < ionesNegativos.length; i++) {
        const celda = document.createElement("td");
        if (i === 0) {
            celda.classList.add("vacía"); // Primera celda vacía
        } else {
            celda.textContent = ionesNegativos[i];
            celda.classList.add("ion-row");
        }
        fila1.appendChild(celda);
    }
    tabla.appendChild(fila1);

    // Crear las filas de los iones positivos
    for (let i = 0; i < ionesPositivos.length; i++) {
        const fila = document.createElement("tr");

        // Agregar el ion positivo en la primera columna
        const celdaFila = document.createElement("td");
        celdaFila.textContent = ionesPositivos[i];
        celdaFila.classList.add("ion-column");
        fila.appendChild(celdaFila);

        // Agregar las celdas vacías que combinan los iones
        for (let j = 1; j < ionesNegativos.length; j++) { // Comenzar en la columna 2
            const celda = document.createElement("td");
            celda.classList.add("vacía");
            celda.addEventListener("click", function () {
                manejarSeleccion(celda, i, j);
            });
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
}

function manejarSeleccion(celda, i, j) {
    if (celdaSeleccionada === celda) {
        // Deseleccionar si la misma celda fue seleccionada
        deseleccionarCelda();
    } else {
        // Resaltar la nueva celda
        resaltarCelda(celda, i, j);
    }
}

function resaltarCelda(celda, i, j) {
    deseleccionarCelda(); // Deseleccionar la anterior

    // Resaltar la celda actual
    celda.classList.add("selected");
    celdaSeleccionada = celda;

    // Hacer la matriz borrosa
    document.getElementById("matriz-ionica").classList.add("blur-background");

    // Mostrar fórmula y nombre en la celda seleccionada
    const clave = `${ionesNegativos[j]}${ionesPositivos[i]}`;
    const detalle = formulas[clave] || { formula: "Desconocido", nombre: "Desconocido" };
    celda.innerHTML = `<div><strong>${detalle.formula}</strong><br>${detalle.nombre}</div>`;

    // Permitir que la celda actúe como botón para deseleccionar
    celda.addEventListener("click", deseleccionarCelda);
}

function deseleccionarCelda() {
    if (celdaSeleccionada) {
        // Quitar resaltado de la celda
        celdaSeleccionada.classList.remove("selected");
        celdaSeleccionada.innerHTML = ""; // Limpiar contenido
        celdaSeleccionada.removeEventListener("click", deseleccionarCelda); // Eliminar evento de deselección
        celdaSeleccionada = null;
    }

    // Quitar el desenfoque de la matriz
    document.getElementById("matriz-ionica").classList.remove("blur-background");
}

crearMatriz();
