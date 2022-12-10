export default function initiNewOpenAba() {}

const links = document.querySelectorAll(".projetos a[href^='https://']");

const eventos = ["click", "touchstart"];

function newOpenAba(event) {
  if (event.type === "click") {
    event.preventDefault();
    window.open(event.target.href, "_blank");
  } else {
    window.open(event.target.href, "_blank");
  }
}

links.forEach((link) => {
  eventos.forEach((evento) => link.addEventListener(evento, newOpenAba));
});
