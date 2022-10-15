export default function initiMenuMobile() {
  const button = document.querySelector(".button");
  const btn = document.querySelector(".header div");
  const nav = document.querySelector(".nav");

  function handleClick(event) {
    if (event.type === "touchstart") event.preventDefault();
    button.classList.toggle("active");
    nav.classList.toggle("active");
  }

  btn.addEventListener("click", handleClick);
  btn.addEventListener("touchstart", handleClick);
}
