/* -----------------------------------------
   GLOW DINÁMICO QUE SIGUE AL CURSOR
------------------------------------------ */

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();
    const glow = link.querySelector(".glow-effect");

    if (glow) {
      glow.style.left = `${e.clientX - rect.left}px`;
      glow.style.top = `${e.clientY - rect.top}px`;
    }
  });

  // Crear el elemento glow si no existe
  if (!link.querySelector(".glow-effect")) {
    const span = document.createElement("span");
    span.classList.add("glow-effect");
    link.appendChild(span);
  }
});
