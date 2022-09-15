import outsideClick from "./outsideclick.js";

export default function initiMenuMobile() {
  const menuButton = document.querySelector(".button");
  const headeMenu = document.querySelector(".header-menu");
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      headeMenu.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(headeMenu, ["click", "touchstart"], () => {
        headeMenu.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
