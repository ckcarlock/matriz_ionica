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
    "H<sup>-1</sup>Pb<sup>+4</sup>": { formula: "PbH<sub>4</sub>", nombre: "Hidruro de plomo (IV)" },
    "H<sup>-1</sup>Ni<sup>+3</sup>": { formula: "NiH<sub>3</sub>", nombre: "Hidruro de níquel (III)" },
    "H<sup>-1</sup>Hg<sup>+1</sup>": { formula: "HgH", nombre: "Hidruro de mercurio (I)" },
    "O<sup>-2</sup>H<sup>+1</sup>": { formula: "H<sub>2</sub>O", nombre: "Agua" },
    "O<sup>-2</sup>K<sup>+1</sup>": { formula: "K<sub>2</sub>O", nombre: "Óxido de potasio" },
    "O<sup>-2</sup>Ba<sup>+2</sup>": { formula: "BaO", nombre: "Óxido de bario" },
    "O<sup>-2</sup>Al<sup>+3</sup>": { formula: "Al<sub>2</sub>O<sub>3</sub>", nombre: "Óxido de aluminio" },
    "O<sup>-2</sup>Pb<sup>+4</sup>": { formula: "PbO<sub>2</sub>", nombre: "Óxido de plomo (IV)" },
    "O<sup>-2</sup>Ni<sup>+3</sup>": { formula: "Ni<sub>2</sub>O<sub>3</sub>", nombre: "Óxido de níquel (III)" },
    "O<sup>-2</sup>Hg<sup>+1</sup>": { formula: "Hg<sub>2</sub>O", nombre: "Óxido de mercurio (I)" },
    "(OH)<sup>-1</sup>K<sup>+1</sup>": { formula: "KOH", nombre: "Hidróxido de potasio" },
    "(OH)<sup>-1</sup>Ba<sup>+2</sup>": { formula: "Ba(OH)<sub>2</sub>", nombre: "Hidróxido de bario" },
    "(OH)<sup>-1</sup>Al<sup>+3</sup>": { formula: "Al(OH)<sub>3</sub>", nombre: "Hidróxido de aluminio" },
    "(OH)<sup>-1</sup>Pb<sup>+4</sup>": { formula: "Pb(OH)<sub>4</sub>", nombre: "Hidróxido de plomo (IV)" },
    "(OH)<sup>-1</sup>Ni<sup>+3</sup>": { formula: "Ni(OH)<sub>3</sub>", nombre: "Hidróxido de níquel (III)" },
    "(OH)<sup>-1</sup>Hg<sup>+1</sup>": { formula: "HgOH", nombre: "Hidróxido de mercurio (I)" },
    "(SO<sub>4</sub>)<sup>-2</sup>H<sup>+1</sup>": { formula: "H<sub>2</sub>SO<sub>4</sub>", nombre: "Ácido sulfúrico" },
    "(SO<sub>4</sub>)<sup>-2</sup>K<sup>+1</sup>": { formula: "K<sub>2</sub>SO<sub>4</sub>", nombre: "Sulfato de potasio" },
    "(SO<sub>4</sub>)<sup>-2</sup>Ba<sup>+2</sup>": { formula: "BaSO<sub>4</sub>", nombre: "Sulfato de bario" },
    "(SO<sub>4</sub>)<sup>-2</sup>Al<sup>+3</sup>": { formula: "Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>", nombre: "Sulfato de aluminio" },
    "(SO<sub>4</sub>)<sup>-2</sup>Pb<sup>+4</sup>": { formula: "Pb(SO<sub>4</sub>)<sub>2</sub>", nombre: "Sulfato de plomo (IV)" },
    "(SO<sub>4</sub>)<sup>-2</sup>Ni<sup>+3</sup>": { formula: "Ni<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>", nombre: "Sulfato de níquel (III)" },
    "(SO<sub>4</sub>)<sup>-2</sup>Hg<sup>+1</sup>": { formula: "Hg<sub>2</sub>SO<sub>4</sub>", nombre: "Sulfato de mercurio (I)" },
    "(PO<sub>3</sub>)<sup>-3</sup>H<sup>+1</sup>": { formula: "H<sub>3</sub>PO<sub>3</sub>", nombre: "Ácido fosforoso" },
    "(PO<sub>3</sub>)<sup>-3</sup>K<sup>+1</sup>": { formula: "K<sub>3</sub>PO<sub>3</sub>", nombre: "Fosfito de potasio" },
    "(PO<sub>3</sub>)<sup>-3</sup>Ba<sup>+2</sup>": { formula: "Ba<sub>3</sub>(PO<sub>3</sub>)<sub>2</sub>", nombre: "Fosfito de bario" },
    "(PO<sub>3</sub>)<sup>-3</sup>Al<sup>+3</sup>": { formula: "AlPO<sub>3</sub>", nombre: "Fosfito de aluminio" },
    "(PO<sub>3</sub>)<sup>-3</sup>Pb<sup>+4</sup>": { formula: "Pb<sub>3</sub>(PO<sub>3</sub>)<sub>4</sub>", nombre: "Fosfito de plomo (IV)" },
    "(PO<sub>3</sub>)<sup>-3</sup>Ni<sup>+3</sup>": { formula: "NiPO<sub>3</sub>", nombre: "Fosfito de níquel (III)" },
    "(PO<sub>3</sub>)<sup>-3</sup>Hg<sup>+1</sup>": { formula: "Hg<sub>3</sub>(PO<sub>3</sub>)", nombre: "Fosfito de mercurio (I)" },
    "(NO<sub>2</sub>)<sup>-1</sup>H<sup>+1</sup>": { formula: "H(NO<sub>2</sub>)", nombre: "Ácido nitroso" },
    "(NO<sub>2</sub>)<sup>-1</sup>K<sup>+1</sup>": { formula: "K(NO<sub>2</sub>)", nombre: "Nitrito de potasio" },
    "(NO<sub>2</sub>)<sup>-1</sup>Ba<sup>+2</sup>": { formula: "Ba(NO<sub>2</sub>)<sub>2</sub>", nombre: "Nitrito de bario" },
    "(NO<sub>2</sub>)<sup>-1</sup>Al<sup>+3</sup>": { formula: "Al(NO<sub>2</sub>)<sub>3</sub>", nombre: "Nitrito de aluminio" },
    "(NO<sub>2</sub>)<sup>-1</sup>Pb<sup>+4</sup>": { formula: "Pb(NO<sub>2</sub>)<sub>4</sub>", nombre: "Nitrito de plomo (IV)" },
    "(NO<sub>2</sub>)<sup>-1</sup>Ni<sup>+3</sup>": { formula: "Ni(NO<sub>2</sub>)<sub>3</sub>", nombre: "Nitrito de níquel (III)" },
    "(NO<sub>2</sub>)<sup>-1</sup>Hg<sup>+1</sup>": { formula: "Hg(NO<sub>2</sub>)", nombre: "Nitrito de mercurio (I)" },
    "(ClO)<sup>-1</sup>H<sup>+1</sup>": { formula: "HClO", nombre: "Ácido hipocloroso" },
    "(ClO)<sup>-1</sup>K<sup>+1</sup>": { formula: "KClO", nombre: "Hipoclorito de potasio" },
    "(ClO)<sup>-1</sup>Ba<sup>+2</sup>": { formula: "Ba(ClO)<sub>2</sub>", nombre: "Hipoclorito de bario" },
    "(ClO)<sup>-1</sup>Al<sup>+3</sup>": { formula: "Al(ClO)<sub>3</sub>", nombre: "Hipoclorito de aluminio" },
    "(ClO)<sup>-1</sup>Pb<sup>+4</sup>": { formula: "Pb(ClO)<sub>4</sub>", nombre: "Hipoclorito de plomo (IV)" },
    "(ClO)<sup>-1</sup>Ni<sup>+3</sup>": { formula: "Ni(ClO)<sub>3</sub>", nombre: "Hipoclorito de níquel (III)" },
    "(ClO)<sup>-1</sup>Hg<sup>+1</sup>": { formula: "HgClO", nombre: "Hipoclorito de mercurio (I)" }
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
