import outsideClick from "./outsideclick.js";

export default function initiMenuMobile() {
  const button = document.querySelector(".btn-mobile");
  const eventos = ["click", "touchstart"];

  function toggleMenu(event) {
    const nav = document.querySelector(".nav");

    if (event.type === "touchstart") event.preventDefault();

    const ativo = nav.classList.contains("active");
    nav.classList.remove("active");

    outsideClick(nav, ["click", "touchsatrt"], () => {
      nav.classList.remove("active");
    });

    if (!ativo) nav.classList.add("active");
  }

  eventos.forEach((evento) => button.addEventListener(evento, toggleMenu));
}
