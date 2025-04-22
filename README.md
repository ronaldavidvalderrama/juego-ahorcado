# 🎮 Juego del Ahorcado (Hangman Game)

Este es un juego clásico del ahorcado hecho con **HTML**, **CSS** y **JavaScript** puro. El objetivo es adivinar la palabra secreta antes de cometer 6 errores y "ser ahorcado".

---

## 🚀 ¿Cómo funciona?

- Se elige aleatoriamente una palabra oculta.
- El jugador tiene un teclado virtual con letras de la A a la Z.
- Cada vez que se selecciona una letra:
  - Si es correcta, se muestra en la palabra.
  - Si es incorrecta, se muestra una parte del dibujo del ahorcado (desde la imagen base hasta el muñeco completo).
- El juego termina cuando:
  - ✅ Se adivinan todas las letras (ganas).
  - ❌ Se cometen 6 errores (pierdes).

---

## 📁 Estructura del proyecto

ahorcado/ ├── index.html # Estructura principal del juego ├── style.css # Estilos visuales (fondo, colores, disposición) ├── script.js # Lógica del juego en JavaScript ├── img/ │ ├── parte0.png # Imagen del muñeco completo (último error) │ ├── parte1.png │ ├── parte2.png │ ├── parte3.png │ ├── parte4.png │ ├── parte5.png # Primer error visible │ └── parte6.png # Base visible desde el principio

yaml
Copiar
Editar

> 💡 Las imágenes se muestran de atrás hacia adelante (de la parte 6 a la 0).

---

## 🛠️ Tecnologías usadas

- **HTML5**
- **CSS3**
- **JavaScript Vanilla (puro)**

---


## 🧪 Cómo usar

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador.
3. ¡Empieza a jugar!

---

## 📌 Autor

Desarrollado por [Ronal avd va] 🚀  
¡Diviértete programando y jugando!

---