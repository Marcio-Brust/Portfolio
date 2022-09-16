import outsideClick from "./outsideclick.js";

export default function initiMenuMobile() {}

const button = document.querySelector(".button");
const menu = document.querySelector(".menu");
const eventos = ["click", "touchstart"];

function openMenu(event) {
  menu.classList.add("active");
  button.classList.add("active");
  outsideClick(menu, "click", () => {
    menu.classList.remove("active");
    button.classList.remove("active");
  });
}
/* eventos.forEach((evento) => { */
button.addEventListener("click", openMenu);
/* }); */
