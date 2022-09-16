import outsideClick from "./outsideclick.js";

export default function initiMostrarMais() {}

const showMe = document.querySelector(".mostrarMais");
const buttonShow = document.querySelector(".mais-de-mim");

function show(event) {
  if (buttonShow.classList.contains("active")) {
    buttonShow.textContent = "Mostrar menos";
    showMe.classList.remove("active");
    buttonShow.classList.remove("active");
  } else {
    showMe.classList.add("active");
    buttonShow.classList.add("active");
  }
}

buttonShow.addEventListener("click", show);
