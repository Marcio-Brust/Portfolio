export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".nav a[href^='#']");
  const eventos = ["click", "touchstart"];

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    eventos.forEach((evento) => link.addEventListener(evento, scrollToSection));
  });
}
