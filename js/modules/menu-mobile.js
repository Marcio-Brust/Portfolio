import outsideClick from "./outsideclick.js";

export default function initiMenuMobile() {
  const button = document.querySelector(".btn-mobile");

  function toggleMenu(event) {
    const nav = document.querySelector(".nav");

    if (event.type === "touchstart") event.preventDefault();

    const ativo = nav.classList.contains("active");
    nav.classList.remove("active");

    outsideClick(button, ["click"], () => {
      nav.classList.remove("active");
    });

    if (!ativo) nav.classList.add("active");
  }

  button.addEventListener("click", toggleMenu);
  button.addEventListener("touchstart", toggleMenu);
}
