// 5 colores básicos para sus elementos

let indiceColor = 0; // Variable para el índice del color seleccionado

function colorAleatorio() {
    const coloresBasicos = [
        { r: 255, g: 0, b: 0 },    // Rojo
        { r: 0, g: 255, b: 0 },    // Verde
        { r: 0, b: 255, g: 0 },    // Azul
        { r: 255, g: 255, b: 0 },  // Amarillo
        { r: 128, g: 0, b: 128 }   // Morado
    ];

    // Selecciona el color básico según el índice actual
    const color = coloresBasicos[indiceColor];
    // Incrementa el índice para seleccionar el próximo color la próxima vez
    indiceColor = (indiceColor + 1) % coloresBasicos.length;

    return color;
}


// Función para convertir grados a radianes
function aRadianes(grados) {
    return grados * (Math.PI / 180.0);
}

// Función para generar un número aleatorio dentro de un rango dado
function rangoAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función de easing (suavizado) utilizando una función seno
function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
}

// Función para obtener el porcentaje de un valor dentro de un rango dado
function obtenerPorcentaje(input, min, max) {
    return (((input - min) * 100) / (max - min)) / 100;
}

// Definición de dimensiones
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ancho = canvas.width;
const alto = canvas.height;

// Definición del centro y radio del círculo de la rueda
const centroX = ancho / 2;
const centroY = alto / 2;
const radio = ancho / 2;

// Obtención de los elementos de la ruleta desde el textarea
let elementos = document.getElementById("textarea").value.trim().split("\n").filter(e => e !== '');
let tachados = new Set(); // Conjunto para mantener un registro de los elementos tachados

// Inicialización de variables para el dibujo de la rueda
let gradosActuales = 0;
let paso = 360 / elementos.length; // Paso angular para cada elemento
let colores = []; // Arreglo para almacenar los colores de los elementos
let gradosElementos = {}; // Objeto para almacenar los grados de inicio y fin de cada elemento

// Generación de colores aleatorios para cada elemento
for (let i = 0; i < elementos.length; i++) {
    colores.push(colorAleatorio());
}

// Función para crear y dibujar la rueda
function crearRueda() {
    // Actualización de los elementos desde el textarea
    elementos = document.getElementById("textarea").value.trim().split("\n").filter(e => e !== '');
    // Filtrado de elementos ya tachados
    elementos = elementos.filter(e => !tachados.has(e));
    // Actualización del paso angular
    paso = 360 / elementos.length;
    colores = []; // Reinicialización del arreglo de colores
    // Generación de nuevos colores aleatorios para cada elemento
    for (let i = 0; i < elementos.length; i++) {
        colores.push(colorAleatorio());
    }
    dibujar(); // Llamada a la función para dibujar la rueda
}

// Función para dibujar la rueda en el canvas
function dibujar() {
    ctx.clearRect(0, 0, ancho, alto); // Borrado del canvas
    ctx.beginPath();
    ctx.arc(centroX, centroY, radio, aRadianes(0), aRadianes(360));
    ctx.fillStyle = `rgb(33, 33, 33)`; // Color de fondo de la rueda
    ctx.lineTo(centroX, centroY);
    ctx.fill();

    let gradosInicio = gradosActuales;
    for (let i = 0; i < elementos.length; i++, gradosInicio += paso) {
        let gradosFin = gradosInicio + paso;

        let color = colores[i];
        let estiloColor = `rgb(${color.r},${color.g},${color.b})`;

        ctx.beginPath();
        ctx.arc(centroX, centroY, radio - 2, aRadianes(gradosInicio), aRadianes(gradosFin));
        ctx.fillStyle = estiloColor;
        ctx.lineTo(centroX, centroY);
        ctx.fill();

        // Dibujar texto
        ctx.save();
        ctx.translate(centroX, centroY);
        ctx.rotate(aRadianes((gradosInicio + gradosFin) / 2));
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff"; // Color del texto
        ctx.font = 'bold 24px serif'; // Estilo del texto
        ctx.fillText(elementos[i], 130, 10); // Posición y contenido del texto
        ctx.restore();

        // Almacenar los grados de inicio y fin de cada elemento
        gradosElementos[elementos[i]] = {
            "gradosInicio": gradosInicio,
            "gradosFin": gradosFin
        };

        // Verificar si el elemento está en la posición de ganador
        if (gradosInicio % 360 < 360 && gradosInicio % 360 > 270 && gradosFin % 360 > 0 && gradosFin % 360 < 90) {
            document.getElementById("ganador").innerHTML = elementos[i];
        }
    }
}

dibujar(); // Llamada inicial para dibujar la rueda


let velocidad = 0;
let rotacionMaxima = rangoAleatorio(360 * 3, 360 * 6);
let pausa = false;

function animar() {
    if (pausa) {
        return;
    }
    velocidad = easeOutSine(obtenerPorcentaje(gradosActuales, rotacionMaxima, 0)) * 20;
    if (velocidad < 0.01) {
        velocidad = 0;
        pausa = true;
        tacharGanador();
    }
    gradosActuales += velocidad;
    dibujar();
    window.requestAnimationFrame(animar);
}

function girar() {
    if (velocidad !== 0) {
        return;
    }

    rotacionMaxima = 0;
    gradosActuales = 0;
    crearRueda();
    dibujar();

    let ganador = elementos[Math.floor(Math.random() * elementos.length)];
    rotacionMaxima = (360 * 6) - gradosElementos[ganador].gradosFin + 10;
    gradosElementos = {};
    pausa = false;
    window.requestAnimationFrame(animar);
}

function tacharGanador() {
    const ganador = document.getElementById("ganador").innerText;
    if (ganador && !tachados.has(ganador)) {
        tachados.add(ganador);
        let textarea = document.getElementById("textarea");
        let lines = textarea.value.split("\n");
        textarea.value = lines.map(line => line === ganador ? `~~${line}~~` : line).join("\n");
        crearRueda();  // Llama a crearRueda después de tachar al ganador
    }
}

function cambiarTitulo() {
    const nuevoTitulo = prompt("Ingrese el nuevo título:");
    if (nuevoTitulo) {
        document.getElementById("titulo").innerText = nuevoTitulo;
    }
}

function editarElementos() {
    document.getElementById("textarea").style.display = "block";
}

function esconderElementos() {
    document.getElementById("textarea").style.display = "none";
}

function reiniciar() {
    document.getElementById("ganador").innerText = "Girar la ruleta";
    tachados.clear();
    let textarea = document.getElementById("textarea");
    let lines = textarea.value.split("\n");
    textarea.value = lines.map(line => line.replace(/~~/g, '')).join("\n");
    crearRueda();
}

function pantallaCompleta() {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
    }
}
