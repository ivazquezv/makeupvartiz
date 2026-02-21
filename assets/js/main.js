/* Cursor pincel */
const brush = document.querySelector(".brush-cursor");

let lastX = null;
let lastY = null;

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Mover el pincel principal
  brush.style.transform = `translate(${x - 30}px, ${y - 30}px)`;

  // Si no hay posición previa, inicializar
  if (lastX === null) {
    lastX = x;
    lastY = y;
    return;
  }

  // Calcular distancia entre puntos
  const dx = x - lastX;
  const dy = y - lastY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Cantidad de partículas intermedias
  const steps = Math.max(1, Math.floor(distance / 4));

  // Crear partículas interpoladas
  for (let i = 0; i < steps; i++) {
    const progress = i / steps;
    const ix = lastX + dx * progress;
    const iy = lastY + dy * progress;

    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${ix - 11}px`;
    sparkle.style.top = `${iy - 11}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1200);
  }

  // Actualizar última posición
  lastX = x;
  lastY = y;
});

/* Reset al salir de la pantalla */
document.addEventListener("mouseleave", () => {
  lastX = null;
  lastY = null;
});

/* Efecto de presión del pincel */
document.addEventListener("mousedown", () => {
  brush.style.transform += " scale(1.3)";
});

document.addEventListener("mouseup", () => {
  brush.style.transform = brush.style.transform.replace(" scale(1.3)", "");
});

/* Menú móvil */
/* MENU HAMBURGUESA */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
