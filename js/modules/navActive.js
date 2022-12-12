export default function initinavActive() {}

const eventos = ["click", "touchstart"];

const nav = document.querySelectorAll(".menu a");

function handleClick({ target }) {
  nav.forEach((link) => link.classList.remove("active"));

  target.classList.add("active");

  setTimeout(
    () =>
      nav.forEach((link) => {
        link.classList.remove("active");
      }),
    5000
  );
}

nav.forEach((link) =>
  eventos.forEach((evento) => link.addEventListener(evento, handleClick))
);
