export default function initiMenuMobile() {}

const button = document.querySelector(".button");
const btn = document.querySelector(".header div");
const nav = document.querySelector(".nav");
const titulo = document.querySelectorAll(".titulo-dev, .p-dev");

function handleClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  button.classList.toggle("active");
  nav.classList.toggle("active");

  if (!button.classList.contains("active")) {
    [...titulo].forEach((item) => {
      item.innerHTML = "Frontend Developer";
    });
    titulo[1].style.display = "block";
    titulo[1].innerHTML = "Estou aprendo cada dia mais, e amo o que faço.";
  }
  if (button.classList.contains("active")) {
    [...titulo].forEach((item) => {
      item.innerHTML = "Front Dev";
    });
    titulo[1].style.display = "none";
  }
}

btn.addEventListener("click", handleClick);
btn.addEventListener("touchstart", handleClick);
