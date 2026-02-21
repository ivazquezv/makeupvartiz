/* FOOTER DINÁMICO + ANIMACIÓN */
const footerYear = document.getElementById("footer-year");
const startYear = 2015;
const currentYear = new Date().getFullYear();

footerYear.innerHTML = `
  <i class="ph ph-copyright"></i>
  ${startYear}–${currentYear} Make Up Vartiz – Todos los derechos reservados
  <br>
  <span class="footer-credit">
    Página web creada por 
    <a href="https://draftdesignweb.com" target="_blank">DRAFT Design Web</a>
    by 
    <a href="https://ivanvazquezv.com" target="_blank">Iván Vázquez</a>
  </span>
`;

/* Glow sincronizado con el cursor */
document.addEventListener("mousemove", (e) => {
  footerYear.style.setProperty("--cursor-x", `${e.clientX}px`);
  footerYear.style.setProperty("--cursor-y", `${e.clientY}px`);
});
