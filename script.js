const ionesPositivos = [
    "H<sup>+1</sup>", 
    "K<sup>+1</sup>", 
    "Ba<sup>+2</sup>", 
    "Al<sup>+3</sup>", 
    "Pb<sup>+4</sup>", 
    "Ni<sup>+3</sup>", 
    "Hg<sup>+1</sup>"
];
const ionesNegativos = [
    "", 
    "H<sup>-1</sup>", 
    "O<sup>-2</sup>", 
    "(OH)<sup>-1</sup>", 
    "(SO<sub>4</sub>)<sup>-2</sup>", 
    "(PO<sub>3</sub>)<sup>-3</sup>", 
    "(NO<sub>2</sub>)<sup>-1</sup>", 
    "(ClO)<sup>-1</sup>"
];

const formulas = {
    "H<sup>-1</sup>H<sup>+1</sup>": { formula: "H<sub>2</sub>", nombre: "Hidrógeno" },
    "H<sup>-1</sup>K<sup>+1</sup>": { formula: "KH", nombre: "Hidruro de potasio" },
    "H<sup>-1</sup>Ba<sup>+2</sup>": { formula: "BaH<sub>2</sub>", nombre: "Hidruro de bario" },
    "H<sup>-1</sup>Al<sup>+3</sup>": { formula: "AlH<sub>3</sub>", nombre: "Hidruro de aluminio" },
    "O<sup>-2</sup>H<sup>+1</sup>": { formula: "H<sub>2</sub>O", nombre: "Agua" },
    "O<sup>-2</sup>K<sup>+1</sup>": { formula: "K<sub>2</sub>O", nombre: "Óxido de potasio" },
    "O<sup>-2</sup>Ba<sup>+2</sup>": { formula: "BaO", nombre: "Óxido de bario" },
    "O<sup>-2</sup>Al<sup>+3</sup>": { formula: "Al<sub>2</sub>O<sub>3</sub>", nombre: "Óxido de aluminio" },
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
            celda.innerHTML = ionesNegativos[i];
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
        celdaFila.innerHTML = ionesPositivos[i];
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
    const tabla = document.getElementById("matriz-ionica");

    if (celdaSeleccionada === celda) {
        // Deseleccionar si la misma celda fue seleccionada
        deseleccionarCelda();
    } else {
        // Resaltar la nueva celda
        deseleccionarCelda(); // Quitar selección previa
        tabla.classList.add("toggled-blur"); // Aplicar efecto borroso a la tabla
        resaltarCelda(celda, i, j);
    }
}

function resaltarCelda(celda, i, j) {
    const clave = `${ionesNegativos[j]}${ionesPositivos[i]}`;
    const detalle = formulas[clave] || { formula: "Desconocido", nombre: "Desconocido" };

    celdaSeleccionada = celda;
    celda.classList.add("selected");
    celda.innerHTML = `
        <div>
            <strong>${detalle.formula}</strong><br>
            ${detalle.nombre}
        </div>
    `;

    // Permitir que el cuadro actúe como botón para deseleccionar
    celda.addEventListener("click", deseleccionarCelda);
}

function deseleccionarCelda() {
    const tabla = document.getElementById("matriz-ionica");

    if (celdaSeleccionada) {
        celdaSeleccionada.classList.remove("selected");
        celdaSeleccionada.innerHTML = ""; // Limpiar contenido
        celdaSeleccionada.removeEventListener("click", deseleccionarCelda); // Eliminar evento
        celdaSeleccionada = null;
    }

    tabla.classList.remove("toggled-blur"); // Quitar el efecto borroso
}

crearMatriz();
