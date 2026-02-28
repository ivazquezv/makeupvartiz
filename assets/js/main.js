/* ============================================================
   CURSOR PINCEL PREMIUM – CONTROL DE MOVIMIENTO + EFECTO SPARKLE
============================================================ */

const brush = document.querySelector(".brush-cursor");
let lastX = null;
let lastY = null;
let isPressed = false;

// Detectar si el cursor está dentro del área del vídeo
function isOverVideo(e) {
  const video = document.querySelector(".video-container");
  if (!video) return false;

  const rect = video.getBoundingClientRect();
  return (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
  );
}

/* ------------------------------------------------------------
   MOVIMIENTO PRINCIPAL DEL CURSOR
------------------------------------------------------------ */
document.addEventListener("mousemove", (e) => {
  // 🔥 FIX DEFINITIVO:
  // Si el cursor está sobre el área del vídeo → NO sparkles
  if (isOverVideo(e)) {
    lastX = null;
    lastY = null;
    const x = e.clientX;
    const y = e.clientY;
    const scale = isPressed ? 1.3 : 1;
    brush.style.transform = `translate(${x - 30}px, ${y - 30}px) scale(${scale})`;
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  const scale = isPressed ? 1.3 : 1;
  brush.style.transform = `translate(${x - 30}px, ${y - 30}px) scale(${scale})`;

  if (lastX === null) {
    lastX = x;
    lastY = y;
    return;
  }

  const dx = x - lastX;
  const dy = y - lastY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const steps = Math.max(1, Math.floor(distance / 4));

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

  lastX = x;
  lastY = y;
});

/* ------------------------------------------------------------
   RESET AL SALIR DE LA PANTALLA
------------------------------------------------------------ */
document.addEventListener("mouseleave", () => {
  lastX = null;
  lastY = null;
});

/* ------------------------------------------------------------
   EFECTO DE PRESIÓN DEL PINCEL
------------------------------------------------------------ */
document.addEventListener("mousedown", () => {
  isPressed = true;
});

document.addEventListener("mouseup", () => {
  isPressed = false;
});

/* ============================================================
   MENÚ MÓVIL
============================================================ */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
