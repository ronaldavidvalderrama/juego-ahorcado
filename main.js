const palabras = ["JAVASCRIPT", "DOMINIO", "VARIABLE", "EVENTO",
"FUNCION", "PROGRAMACION" , "HTML", "CSS", "ALGORITMO", "ARRAY", "OBJETO", "CLASE", "HERENCIA",];
let palabraSecreta = "";
let errores = 0;
const maxErrores = 6;

const palabraContenedor = document.getElementById("palabra");
const tecladoContenedor = document.getElementById("teclado");
const partes = document.querySelectorAll(".parte");
const btnReiniciar = document.getElementById("reiniciar");

function iniciarJuego() {
  // Limpiar todo

palabraContenedor.replaceChildren();
tecladoContenedor.replaceChildren();
partes.forEach((parte, i) => {
    parte.style.display = i === 0 ? "block" : "none"; // Mostrar solo la base (índice 0)
});
errores = 0;


  // Seleccionar palabra aleatoria
  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

  // Crear spans por cada letra
for (let letra of palabraSecreta) {
    const span = document.createElement("span");
    span.textContent = "_";
    span.dataset.letra = letra;
    palabraContenedor.appendChild(span);
}

  // Generar botones A-Z
for (let i = 65; i <= 90; i++) {
    const letra = String.fromCharCode(i);
    const boton = document.createElement("button");
    boton.textContent = letra;
    boton.addEventListener("click", () => verificarLetra(letra, boton));
    tecladoContenedor.appendChild(boton);
    }
}



function verificarLetra(letra, boton) {
    boton.disabled = true;
    let acierto = false;

    document.querySelectorAll("#palabra span").forEach(span => {
        if (span.dataset.letra === letra) {
            span.textContent = letra;
            acierto = true;
        }
    });

    if (!acierto) {
        errores++;
        if (errores <= maxErrores) {
            partes[errores].style.display = "block"; // Mostrar siguiente imagen
        }
        if (errores === maxErrores) {
            alert(`¡Has perdido! La palabra era: ${palabraSecreta}`);
            desactivarTeclado();
        }
    } else {
        // Comprobar si ganó
        const palabraAdivinada = [...document.querySelectorAll("#palabra span")]
            .every(span => span.textContent !== "_");
        if (palabraAdivinada) {
            alert("¡Ganaste!");
            desactivarTeclado();
        }
    }
}

function desactivarTeclado() {
document.querySelectorAll("#teclado button").forEach(btn => {
    btn.disabled = true;
    });
}



btnReiniciar.addEventListener("click", iniciarJuego);





  // Iniciar juego al cargar
iniciarJuego();
